<template>
  <div>
    <h1 v-if="!breeds">No breeds to show. This is possibly a problem with the API</h1>
    <div v-if="breeds">
      <div class="top_bar">
        <h1 class="catlist_h1">Cat breeds:</h1>
        <input
          type="text"
          id="search_input"
          v-on:keyup="search($event)"
          placeholder="Search for breeds..."
          title="Type in something"
        >
      </div>
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
  .top_bar {
    padding-left: 10px;
  }

  #search_input {
    max-height: 30px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    background-color: white;
    background-image: url('https://www.w3schools.com/css/searchicon.png');
    background-position: 5px 3px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    margin-bottom: 15px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
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

  .hidden {
    display: none;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  export default {
    name: 'CatList',
    props: ['breeds'],
    methods: {
      search(e: Event) {
        const searchVal = (<HTMLInputElement>e.target).value;
        const elems = document.getElementsByClassName('container_catlistitem');

        for (let element of elems) {
          if (element.firstElementChild) {
            const breedName = element.firstElementChild.innerHTML.toLowerCase();
            if (!breedName.includes(searchVal)) {
              element.className += ' hidden';
            } else {
              element.classList.remove('hidden');
            }
          }
        }
      },
    },
  };
</script>
