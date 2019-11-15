<template>
  <div class="row my-3">
    <form  :data-vv-scope="formScope"
           @submit.prevent="submitForm()"
            class="col-md-4 shadow-sm p-3 mb-5 bg-white rounded">
        <h3> Edit </h3>

        <main-input
                :value="name.value"
                v-model="name.value"
                :data="name"
                :form-scope="formScope"
                class="notes__list-input">
        </main-input>

        <main-textarea
                v-model="content.value"
                :data="content"
                :form-scope="formScope"
                class="notes__list-input">
        </main-textarea>

        <button type="submit"
                class="btn btn-primary mx-2">
            Save
        </button>
        <button @click="resetForm()"
                type="button"
                class="btn btn-danger mx-2">
            Reset
        </button>
    </form>
</div>

</template>

<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
