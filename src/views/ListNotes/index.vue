<template>
  <div class="notes-list my-5">
    <div class="row mx-0 d-flex justify-content-center flex-wrap">
      <div v-for="(item, index) in list" :key="index"
           class=" col-sm-5 m-2 p-0 text-left">
        <div v-if="list.length > 0" class="card">
          <h5 class="card-header bg-primary text-white">Note №{{index}}</h5>
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.content}}</p>
            <router-link :to="{name: 'details-note', params: {id: index}}"
                         class="btn btn-primary mx-1">
              Details
            </router-link>
            <router-link :to="{name: 'edit-note', params: {id: index}}"
                         class="btn btn-primary mx-1">
              Edit
            </router-link>
            <button @click="removeItem(index)"
                    type="button"
                    class="btn btn-danger mx-1">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div v-if="list.length === 0" class=" col-sm-5 m-2 p-0 text-left">
        <div class="card">
          <h5 class="card-header text-white bg-dark">Create note</h5>
          <div class="card-body">
            <router-link :to="{name: 'create-note'}"
                         class="btn btn-primary mx-1">
              Create
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
