<template>
  <div class="home">
    <CatList v-bind:breeds="breeds" v-bind:loading="loading"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import CatList from '@/components/CatList.vue'; // @ is an alias to /src

  export default {
    data() {
      return {
        breeds: [],
        loading: true,
      };
    },
    name: 'Home',
    components: {
      CatList,
    },
    async created() {
      const someRandomGenHash = '4da0f59e-ca65-4fd7-adad-4b1df659b28c';
      const { data } = await axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': someRandomGenHash },
      });

      const breeds: Array<Object> = [];
      interface Options {
        name: string;
        id: string;
        [propName: string]: any;
      }

      const promises: Array<Object> = [];

      data.forEach((breed: Options) => {
        promises.push(
          axios.get(
            `https://api.thecatapi.com/v1/images/search?breed_id=${
              breed.id
            }&limit=1`,
            { headers: { 'x-api-key': someRandomGenHash } },
          ),
        );
      });

      Promise.all(promises).then(values => {
        interface Values {
          breeds: Array<Object>;
          id: string;
          url: string;
          [key: string]: any;
        }

        interface Val {
          data: Array<Object>;
          [key: string]: any;
        }

        const parsedValues: any = [];

        values.forEach((val: any) => {
          const data = val.data[0];
          parsedValues.push(data);
        });
        this.breeds = parsedValues;
        this.loading = false;
      });
    },
  };
</script>
