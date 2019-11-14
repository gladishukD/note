import { mapActions } from 'vuex'

import mainInput from '@/components/main-input/index.vue'
import mainTextarea from '@/components/main-textarea/index.vue'

import { NOTES_CREATE_NOTE } from '@/store/action-types'

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
      }
    }
  },

  components: {
    mainInput,
    mainTextarea
  },

  methods: {
    ...mapActions({
      createNote: `notes/${NOTES_CREATE_NOTE}`
    }),

    resetForm () {
      this.name.value = ''
      this.content.value = ''

      this.$validator.reset()
    },

    submitForm () {
      this.$validator.validateAll(this.formScope).then((result) => {
        if (result) {
          const tempParams = {
            name: this.name.value,
            content: this.content.value
          }

          this.createNote(tempParams)
          this.resetForm()

          this.$toaster.success('Нотатка успішно створена.')
          this.$router.push({ name: 'list-notes' })
        }
      })
    }
  }
}
