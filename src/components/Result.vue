<template>
  <div class="results__item">
    <h2 className="heading heading--result">{{ item.name }}</h2>
    <p>{{ item.name }}</p>
    <p>Stars: {{ item.stargazers_count }}</p>
    <p>Forks: {{ item.forks_count }}</p>
    <a target="_blank" :href="item.html_url">Link</a>
    <button
      v-on:click="
        bookmarkResult({
          name: item.name,
          href: item.html_url,
          fullName: item.full_name
        })
      "
      type="button"
    >
      Bookmark
    </button>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'Result',
  props: {
    item: Object
  },
  methods: {
    bookmarkResult(result) {
      store.commit('addBookmark', result);
      console.log('clicked');
    }
  }
};
</script>

<style lang="scss">
.results__item {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
