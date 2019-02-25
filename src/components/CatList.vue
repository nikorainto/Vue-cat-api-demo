<template>
  <div>
    <div v-bind:key="breed.name" v-for="breed in breeds">
      <p>{{breed.name}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default {
  name: 'CatList',
  props: ['breeds'],
};

/*
  @Component
  export default class CatList extends Vue {
    @Prop() private movies!: Array<string>;
    // 4da0f59e-ca65-4fd7-adad-4b1df659b28c
  }
  */
</script>
