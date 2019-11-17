import { mapGetters, mapActions } from 'vuex'

import mainInput from '@/components/main-input/index.vue'
import mainTextarea from '@/components/main-textarea/index.vue'

import {
  NOTES_EDIT_NOTE,
  NOTES_ADD_NOTE_COMMENT
} from '@/store/action-types'

export default {
  name: 'DetailsNote',

  data () {
    return {
      noteItem: null,
      formScope: 'comment-form',

      author: {
        name: 'author',
        value: '',
        type: 'text',
        label: '',
        hint: '',
        placeholder: 'Author',
        validation: {
          required: true
        }
      },

      content: {
        name: 'content',
        value: '',
        type: 'text',
        label: '',
        hint: '',
        placeholder: 'Content',
        validation: {
          required: true
        }
      }
    }
  },

  components: {
    mainInput,
    mainTextarea
  },

  computed: {
    ...mapGetters({
      list: 'notes/list'
    })
  },

  mounted () {
    this.getNoteData()
  },

  watch: {
    list: function (newValue) {
      this.getNoteData()
    }
  },

  methods: {
    ...mapActions({
      editNote: `notes/${NOTES_EDIT_NOTE}`,
      addNoteComment: `notes/${NOTES_ADD_NOTE_COMMENT}`
    }),

    getNoteData () {
      let id = Number(this.$route.params.id)

      this.list.forEach((item, index, key) => {
        if (index === id) {
          this.noteItem = item
        }
      })
    },

    submitCommentForm (id) {
      this.$validator.validateAll(this.formScope).then((result) => {
        if (result) {
          let date = new Date()
          const tempParams = {
            id: Number(id),
            author: this.author.value,
            content: this.content.value,
            created_at: date.toLocaleString()
          }
          console.log(tempParams)

          this.addNoteComment(tempParams)
          this.resetForm()

          this.$toaster.success('Коментар успішно додано.')
        }
      })
    },

    resetForm () {
      this.author.value = ''
      this.content.value = ''

      this.$validator.reset()
    }
  }
}
