<template>
  <div class="home">
    <CatList v-bind:breeds="breeds"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CatList from '@/components/CatList.vue'; // @ is an alias to /src

export default {
  data() {
    return {
      breeds: [],
    };
  },
  name: 'Home',
  components: {
    CatList,
  },
  methods: {
    getCatBreeds() {
      fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.breeds = data;
        });
    },
  },
  created() {
    this.getCatBreeds();
  },
};
</script>
