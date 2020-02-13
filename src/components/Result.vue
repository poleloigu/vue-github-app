<template>
  <div class="results__item">
    <h2 className="heading heading--result">{{ item.name }}</h2>
    <p>{{ item.name }}</p>
    <p>Stars: {{ item.stars }}</p>
    <p>Forks: {{ item.forks }}</p>
    <a target="_blank" :href="item.href">Link</a>
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
    <img v-if="isBookmarked" class="icon icon--bookmark" src="../assets/bookmarkTrue.svg" />
    <img v-else class="icon icon--bookmark" src="../assets/bookmarkFalse.svg" />
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'Result',
  props: {
    item: Object
  },
  data() {
    return {
      isBookmarked: false
    };
  },
  methods: {
    bookmarkResult(result) {
      store.commit('toggleBookmark', result);
      this.$set(this, 'isBookmarked', !this.isBookmarked);
    },
    created() {
      console.log(this.item);
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
.icon {
  &--bookmark {
    height: 15px;
    width: auto;
  }
}
</style>
