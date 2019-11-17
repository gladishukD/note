import { mapGetters, mapActions } from 'vuex'

import mainInput from '@/components/main-input/index.vue'
import mainTextarea from '@/components/main-textarea/index.vue'

import { NOTES_EDIT_NOTE } from '@/store/action-types'

export default {
  name: 'EditNote',

  data () {
    return {
      formScope: 'edit-form',
      name: {
        name: 'name',
        value: '',
        type: 'text',
        label: 'Name',
        hint: '',
        placeholder: '',
        validation: {
          required: true
        }
      },

      content: {
        name: 'content',
        value: '',
        type: 'text',
        label: 'Content',
        hint: '',
        placeholder: '',
        validation: {
          required: true
        }
      },
      noteItem: null
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
      editNote: `notes/${NOTES_EDIT_NOTE}`
    }),

    getNoteData () {
      let id = Number(this.$route.params.id)

      this.list.forEach((item, index, key) => {
        if (index === id) {
          this.noteItem = item

          this.name.value = item.name
          this.content.value = item.content
        }
      })
    },

    resetForm () {
      this.name.value = ''
      this.content.value = ''

      this.$validator.reset()
    },

    submitForm () {
      this.$validator.validateAll(this.formScope).then((result) => {
        if (result) {
          const tempParams = {
            id: this.$route.params.id,
            name: this.name.value,
            content: this.content.value
          }
          console.log(tempParams)

          this.editNote(tempParams)
          this.resetForm()

          this.$toaster.success('Нотатка успішно відредагована.')
          this.$router.push({ name: 'list-notes' })
        }
      })
    }
  }
}
