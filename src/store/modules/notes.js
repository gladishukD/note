import Vue from 'vue'

import {
  NOTES_CHANGE_SOURCE_DATABASE
} from '../mutation-types'

import {
  NOTES_GET_LIST,
  NOTES_CREATE_NOTE,
  NOTES_REMOVE_NOTE,
  NOTES_EDIT_NOTE,
  NOTES_ADD_NOTE_COMMENT
} from '../action-types'

import { db } from '../../main'

const state = {
  list: [],
  sourceOfDatabase: JSON.parse(localStorage.getItem('database'))
}

const getters = {
  list: state => state.list,
  sourceOfDatabase: state => state.sourceOfDatabase
}

const mutations = {
  [NOTES_GET_LIST] () {},
  [NOTES_CREATE_NOTE] () {},
  [NOTES_REMOVE_NOTE] () {},
  [NOTES_EDIT_NOTE] () {},
  [NOTES_ADD_NOTE_COMMENT] () {},

  [NOTES_CHANGE_SOURCE_DATABASE] (state, payload) {
    Vue.set(state, 'sourceOfDatabase', payload)
    localStorage.setItem('database', payload)
  }
}

const actions = {
  NOTES_GET_LIST ({ state }) {
    Vue.set(state, 'list', [])

    if (state.sourceOfDatabase) {
      if (localStorage.getItem('notes') !== null) {
        let notesList = JSON.parse(localStorage.getItem('notes'))

        Vue.set(state, 'list', notesList)
        console.log(state.list)
      } else {
        Vue.set(state, 'list', [])
      }
    } else {
      db.collection('notes').get().then((response) => {
        response.forEach((item) => {
          let tempData = { id: item.id, ...item.data() }

          state.list.push(tempData)
        })
      })
    }
  },

  NOTES_CREATE_NOTE ({ state, dispatch }, payload) {
    const tempParams = {
      name: payload.name,
      content: payload.content,
      comments: []
    }

    console.log('list', state.list)

    if (state.sourceOfDatabase) {
      state.list.push(tempParams)

      localStorage.setItem('notes', JSON.stringify(state.list))
    } else {
      db.collection('notes').add(tempParams)
        .then(function (docRef) {
          state.list.push(tempParams)
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    }
  },

  NOTES_REMOVE_NOTE ({ state, dispatch }, noteIndex) {
    if (state.sourceOfDatabase) {
      state.list.splice(noteIndex, 1)

      localStorage.setItem('notes', JSON.stringify(state.list))
    } else {
      let tempData = [...state.list]
      tempData.splice(noteIndex, 1)

      db.collection('notes').doc(state.list[noteIndex].id).delete().then(function () {
        state.list.splice(noteIndex, 1)
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  },

  NOTES_EDIT_NOTE ({ state, dispatch }, payload) {
    Vue.set(state.list[payload.id], 'name', payload.name)
    Vue.set(state.list[payload.id], 'content', payload.content)

    if (state.sourceOfDatabase) {
      localStorage.setItem('notes', JSON.stringify(state.list))
    } else {
      db.collection('notes').doc(state.list[payload.id].id).update({
        name: payload.name,
        content: payload.content
      }).then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  },

  NOTES_ADD_NOTE_COMMENT ({ state, dispatch }, payload) {
    const tempParams = {
      author: payload.author,
      content: payload.content,
      created_at: payload.created_at
    }

    state.list[payload.id].comments.push(tempParams)

    if (state.sourceOfDatabase) {
      localStorage.setItem('notes', JSON.stringify(state.list))
    } else {
      db.collection('notes').doc(state.list[payload.id].id).set({
        name: state.list[payload.id].name,
        content: state.list[payload.id].content,
        comments: state.list[payload.id].comments
      }).then(function () {
        console.log('Document successfully create!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
