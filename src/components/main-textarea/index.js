
export default {
  name: 'main-textarea',

  data () {
    return {
    }
  },

  inject: [ '$validator' ],

  props: {
    value: {
      type: String,
      default: ''
    },
    formScope: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: () => {
        return {
          name: '',
          type: 'text',
          label: '',
          tooltip: '',
          placeholder: '',
          validation: {
            required: false,
            regex: '^.*$'
          },
          mask: ''
        }
      }
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    localValue: function () {
      let tempValue = ''

      if (this.value && this.value.length > 0) {
        tempValue = this.value
      }

      return tempValue
    }
  },

  methods: {
    updateValue (value) {
      this.$emit('textarea', value)
    }
  }
}
