<template>
<div class="notes-list">
    <!--<div class="row">-->
        <!--<div v-for="(item, key) in list" :key="key" class="col-sm-6">-->
            <!--<div class="card">-->
                <!--<div class="card-body">-->
                    <!--<h5 class="card-title">{{item.name}}</h5>-->
                    <!--<p class="card-text">{{item.content}}</p>-->
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <div class="row mx-0">
    <div v-for="(item, index) in list" :key="index"
         class="card col-sm-5 m-2 p-0 text-left">
        <h5 class="card-header">Note №{{index}}</h5>
        <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.content}}</p>
            <router-link :to="{name: 'edit-note', params: {id: index}}"
                         class="btn btn-primary mx-1">
                Details
            </router-link>
            <button @click="removeItem(index)"
                    type="button"
                    class="btn btn-danger mx-1">
                Remove
            </button>
        </div>
    </div>
    </div>
</div>

</template>

<script src="./index.js"></script>
<style lang="sass" src="./index.sass"></style>
