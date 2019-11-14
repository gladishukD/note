<template>
  <div class="form-group text-left"
       :data-errors="(errors && errors.has(formScope + '.' + data.name)) ? 'true' : 'false'">

    <label v-if="data.label && data.label.length > 0"
           :for="'main-input-' + data.name">
      {{ data.label }}
    </label>

    <input :value="localValue"
           v-validate="data.validation"
           :data-vv-as="data.label"
           @input="updateValue($event.target.value)"
           :id="'main-input-' + data.name"
           :name="data.name"
           :placeholder="data.placeholder"
           :form-scope="formScope"
           :type="data.type"
           :readonly="readonly"
           :class="[ (errors && errors.has(formScope + '.' + data.name)) ? 'is-invalid' : '', 'form-control']">

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
