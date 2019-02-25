<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <div v-if="!loading">
      <h1>Cat breeds:</h1>
      <div v-bind:key="breed.name" v-for="breed in breeds" class="container_catlist">
        <a :href="breed.url" target="_blank" rel="noopener noreferrer">{{breed.breeds[0].name}}</a>
        <br>
        <label>{{breed.breeds[0].description}}</label>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .container_catlist > a {
    text-decoration: none;
    color: white;
  }

  .container_catlist > a:hover {
    text-decoration: underline;
  }

  .container_catlist > label {
    text-decoration: none;
    color: lightgrey;
    font-size: 14px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  export default {
    name: 'CatList',
    props: ['breeds', 'loading'],
  };
</script>
