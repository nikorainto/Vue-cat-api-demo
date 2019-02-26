<template>
  <div>
    <h1 v-if="!breeds">No breeds to show. This is possibly a problem with the API</h1>
    <div v-if="breeds">
      <h1 class="catlist_h1">Cat breeds:</h1>
      <div class="container_catlist">
        <div v-bind:key="breed.name" v-for="breed in breeds" class="container_catlistitem">
          <a
            :href="breed.url"
            target="_blank"
            rel="noopener noreferrer"
            :alt="breed.breeds[0].name"
            title="Open image"
          >{{breed.breeds[0].name}}</a>
          <br>
          <br>
          <label>{{breed.breeds[0].description}}</label>
          <br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .catlist_h1 {
    padding-left: 10px;
  }

  .container_catlist {
    display: flex;
    flex-wrap: wrap;
  }

  .container_catlistitem {
    width: 25rem;
    height: auto;
    border: 2px solid lightgrey;
    padding: 10px;
    margin: 10px;
  }

  .container_catlistitem > a {
    text-decoration: none;
    color: white;
    font-size: 24px;
  }

  .container_catlistitem > a:hover {
    text-decoration: underline;
  }

  .container_catlistitem > label {
    text-decoration: none;
    color: lightgrey;
    font-size: 14px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  export default {
    name: 'CatList',
    props: ['breeds'],
  };
</script>
