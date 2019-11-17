<template>
  <div class="row my-5">
    <div class="col-sm-6">
      <div v-if="noteItem" class="card">
        <div class="card-body">
          <h5 class="card-title">Title: {{noteItem.name}}</h5>
          <p class="card-text">Content: {{noteItem.content}}</p>
        </div>

        <div v-if="noteItem.comments.length > 0" class="comments mb-3 mx-3">
          <h3 class="title-comments">Comments ({{noteItem.comments.length}})</h3>
          <div class="card-list my-4">
            <div v-for="(item, index) in noteItem.comments" :key="index" class="card m-2">
              <div class="card-body">
                <h5 class="card-title">Author: {{item.author}}</h5>
                <p class="card-text">Content: {{item.content}}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Created date: {{item.created_at}}</small>
              </div>
            </div>
          </div>
        </div>

        <ul class="list-group list-group-flush">
          <div class="card-footer text-muted">
            Add comment:
          </div>
          <li class="list-group-item">
            <form :data-vv-scope="formScope"
                  @submit.prevent="submitCommentForm($route.params.id)"
                  class="p-3 mb-2 bg-white rounded">
              <main-input
                :value="author.value"
                v-model="author.value"
                :data="author"
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
                Add
              </button>
              <button @click="resetForm()"
                      type="button"
                      class="btn btn-danger mx-2">
                Reset
              </button>
            </form>
          </li>
        </ul>
      </div>

      <div v-else class="card">
        <div class="card-body">
          <h3 class="card-title">404</h3>
        </div>
      </div>
    </div>
  </div>

</template>

<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
