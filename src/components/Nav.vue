<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">VUE API Client</router-link>
      <nav>
        <ul>
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 1.3em;
    display: grid;
    grid-template-columns: 30% auto;

    a {
      color: white;
    }
  }

  header {
    background: #009688;

    .logo {
      font-weight: bold;
    }

    nav {
      justify-self: right;

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          float: left;

          a {
            padding: 1.5em;
            text-transform: uppercase;
            font-size: 0.8em;
            @media (max-width: 340px) {
              padding: 1em;
            }
            &:hover {
              background: #26a69a;
            }
          }
        }
      }
    }
  }

  @media (max-width: 340px) {
    .container > a {
      font-size: 16px;
    }
  }
</style>

