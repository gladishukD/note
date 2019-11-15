import Vue from 'vue'
// import Vuex from 'vuex'

// import {
// } from '../mutations-types'

import {
  NOTES_GET_LIST,
  NOTES_CREATE_NOTE,
  NOTES_REMOVE_NOTE,
  NOTES_EDIT_NOTE,
  NOTES_ADD_NOTE_COMMENT
} from '../action-types'

const state = {
  list: []
}

const getters = {
  list: state => state.list
}

const mutations = {
  [NOTES_GET_LIST] () {},
  [NOTES_CREATE_NOTE] () {},
  [NOTES_REMOVE_NOTE] () {},
  [NOTES_EDIT_NOTE] () {},
  [NOTES_ADD_NOTE_COMMENT] () {}
}

const actions = {
  NOTES_GET_LIST ({ state }) {
    Vue.set(state, 'list', [])

    if (localStorage.getItem('notes') !== null) {
      let notesList = JSON.parse(localStorage.getItem('notes'))

      Vue.set(state, 'list', notesList)
      console.log(state.list)
    } else {
      Vue.set(state, 'list', [])
    }
  },

  NOTES_CREATE_NOTE ({ state, dispatch }, payload) {
    dispatch(NOTES_GET_LIST)

    const tempParams = {
      name: payload.name,
      content: payload.content,
      comments: []
    }

    state.list.push(tempParams)
    console.log('list', state.list)

    localStorage.setItem('notes', JSON.stringify(state.list))
  },

  NOTES_REMOVE_NOTE ({ state, dispatch }, noteIndex) {
    state.list.splice(noteIndex, 1)

    localStorage.setItem('notes', JSON.stringify(state.list))
  },

  NOTES_EDIT_NOTE ({ state, dispatch }, payload) {
    dispatch(NOTES_GET_LIST)

    Vue.set(state.list[payload.id], 'name', payload.name)
    Vue.set(state.list[payload.id], 'content', payload.content)

    localStorage.setItem('notes', JSON.stringify(state.list))
  },

  NOTES_ADD_NOTE_COMMENT ({ state, dispatch }, payload) {
    const tempParams = {
      author: payload.author,
      content: payload.content,
      created_at: payload.created_at
    }

    state.list[payload.id].comments.push(tempParams)

    localStorage.setItem('notes', JSON.stringify(state.list))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
