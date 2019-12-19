import Vue from "vue";
import Router from "vue-router";
import Home from "./page/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/projectC",
      name: "home",
      component: Home
    },
    {
      path: "/projectC/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./page/About.vue")
    }
  ]
});
