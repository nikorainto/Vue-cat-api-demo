<template>
  <div id="app">
    <Nav/>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  body,
  html {
    height: 100%;
    margin: 0 auto;

    color: #eeeeee;

    background: #1a1a1d;

    font-family: 'Montserrat';
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }

  section {
    width: 80%;
    margin: 0 auto;
    padding: 2em;
  }

  @media (max-width: 767px) {
    body,
    html {
      overflow: hidden;
      width: 100%;
    }
  }
</style>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import Nav from '@/components/Nav.vue';

  export default {
    name: 'App',
    components: {
      Nav,
    },
  };
</script>