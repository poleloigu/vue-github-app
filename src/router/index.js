import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Bookmarks from '../views/Bookmarks.vue';
import BookmarkItem from '../views/BookmarkItem.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/bookmarks/:author/:name',
    name: 'BookmarkItem',
    props: true,
    component: BookmarkItem
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
