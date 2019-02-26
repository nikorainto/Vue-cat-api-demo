<template>
  <div class="home">
    <CatList v-bind:breeds="breeds"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import CatList from '@/components/CatList.vue';

  export default {
    data() {
      return {
        breeds: [] as Array<Object>,
      };
    },
    name: 'Home',
    components: {
      CatList,
    },
    created() {
      let breeds: any = localStorage.getItem('breeds');
      const that: any = this;
      that.breeds = JSON.parse(breeds);
    },
  };
</script>
