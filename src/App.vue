<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link>|
      <router-link to="/bookmarks">Bookmarks</router-link>
      <Badge />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import store from './store';
import Badge from './components/Badge.vue';

export default {
  name: 'App',
  components: {
    Badge
  },
  methods: {
    getStorageData() {
      if (localStorage) {
        const data = localStorage.getItem('bookmarked');
        const parsedData = JSON.parse(data);
        store.commit('addAllBookmarks', parsedData);
      }
    }
  },
  mounted() {
    this.getStorageData();
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
