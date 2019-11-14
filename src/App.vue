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
      </div>
    </nav>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import {
  NOTES_GET_LIST
} from '@/store/action-types'

export default {
  name: 'app',
  data () {
    return {
    }
  },

  mounted () {
    this.getNotesList()
  },

  methods: {
    ...mapActions({
      getNotesList: `notes/${NOTES_GET_LIST}`
    })
  }
}
</script>
