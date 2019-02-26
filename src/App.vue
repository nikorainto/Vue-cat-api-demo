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

  #nprogress .bar {
    background: #616161 !important;
    height: 6px !important;
  }

  #nprogress .peg {
    box-shadow: none !important;
  }

  @media (max-width: 767px) {
    body,
    html {
      overflow-x: hidden;
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