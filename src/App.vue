<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link">
              Create
            </router-link>
          </li>
        </ul>

        <div class="custom-control custom-switch">
          <input type="checkbox" :checked="sourceDatabase"
                 @change="e => changeSourceOfDatabase(e.target.checked)"
                 class="custom-control-input" id="customSwitch1">
          <label class="custom-control-label" for="customSwitch1">{{sourceDatabase ? 'LocalStorage': 'Firebase'}}</label>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

import {
  NOTES_CHANGE_SOURCE_DATABASE
} from '@/store/mutation-types'

import {
  NOTES_GET_LIST
} from '@/store/action-types'

export default {
  name: 'app',
  data () {
    return {
      store: true
    }
  },

  mounted () {
    this.getNotesList()
  },

  computed: {
    ...mapGetters({
      sourceDatabase: 'notes/sourceOfDatabase'
    })
  },

  watch: {
    sourceDatabase: function (newValue) {
      this.getNotesList()
    }
  },

  methods: {
    ...mapMutations({
      changeSourceOfDatabase: `notes/${NOTES_CHANGE_SOURCE_DATABASE}`
    }),

    ...mapActions({
      getNotesList: `notes/${NOTES_GET_LIST}`
    })
  }
}
</script>
