import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import axios from 'axios';
import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: async (to, from, next) => {
        const dataExists = localStorage.getItem('breeds');
        if (!dataExists) {
          NProgress.start();
          const someRandomGenHash = '4da0f59e-ca65-4fd7-adad-4b1df659b28c';
          const { data } = await axios.get(
            'https://api.thecatapi.com/v1/breeds',
            {
              headers: { 'x-api-key': someRandomGenHash },
            },
          );

          interface Options {
            name: string;
            id: string;
            [key: string]: any;
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
            const parsedValues: any = [];

            values.forEach((val: any) => {
              const data = val.data[0];
              parsedValues.push(data);
            });

            localStorage.setItem('breeds', JSON.stringify(parsedValues));
            NProgress.done();
            next();
          });
        } else {
          next();
        }
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
