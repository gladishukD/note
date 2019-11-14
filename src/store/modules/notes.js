import Vue from 'vue'
// import Vuex from 'vuex'

// import {
// } from '../mutations-types'

import {
  NOTES_GET_LIST,
  NOTES_CREATE_NOTE,
  NOTES_REMOVE_NOTE
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
  [NOTES_REMOVE_NOTE] () {}
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
      comments: {}
    }

    state.list.push(tempParams)
    console.log('list', state.list)

    localStorage.setItem('notes', JSON.stringify(state.list))
  },

  NOTES_REMOVE_NOTE ({ state, dispatch }, noteIndex) {
    state.list.splice(noteIndex, 1)

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
