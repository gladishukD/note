import { mapGetters, mapActions } from 'vuex'

import {
  NOTES_GET_LIST,
  NOTES_REMOVE_NOTE
} from '@/store/action-types'

export default {
  name: 'ListNotes',

  data () {
    return {}
  },

  mounted () {
    this.getNotesList()
  },

  computed: {
    ...mapGetters({
      list: 'notes/list'
    })
  },

  methods: {
    ...mapActions({
      getNotesList: `notes/${NOTES_GET_LIST}`,
      removeNote: `notes/${NOTES_REMOVE_NOTE}`
    }),

    removeItem (id) {
      this.removeNote(id)
      this.getNotesList()

      this.$toaster.success('Нотатка успішно видалена.')
    }
  }
}
