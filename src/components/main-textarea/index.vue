<template>
  <div class="form-group text-left"
       :data-errors="(errors && errors.has(formScope + '.' + data.name)) ? 'true' : 'false'">

    <label v-if="data.label && data.label.length > 0"
           :for="'main-textarea-' + data.name">
      {{ data.label }}
    </label>

    <textarea v-model="data.value"
           v-validate="data.validation"
           :data-vv-as="data.label"
           :id="'main-textarea-' + data.name"
           :name="data.name"
           :placeholder="data.placeholder"
           :form-scope="formScope"
           :readonly="readonly"
           :class="[ (errors && errors.has(formScope + '.' + data.name)) ? 'is-invalid' : '', 'form-control']">
    </textarea>

    <div class="invalid-feedback">
      {{ errors.first(formScope + '.' + data.name) }}
    </div>

    <div v-if="data.tooltip && data.tooltip.length > 0"
         v-html="data.tooltip"
         class="text-muted">
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
