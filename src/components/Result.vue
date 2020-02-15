<template>
  <div class="results__item">
    <h2 className="heading heading--result">{{ item.name }}</h2>
    <p>{{ item.author }}</p>
    <p>Stars: {{ item.stars }}</p>
    <p>Forks: {{ item.forks }}</p>
    <a target="_blank" :href="item.href">Link</a>
    <a :href="`/bookmarks/${item.author}/${item.name}`">Link to details </a>
    <button
      v-on:click="
        bookmarkResult({
          name: item.name,
          href: item.href,
          fullName: item.fullName,
          stars: item.stars,
          forks: item.forks,
          id: item.id
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
  watch: {
    item: {
      immediate: true,
      handler(value) {
        this.checkIfBookmarked(value);
      }
    }
  },
  methods: {
    bookmarkResult(result) {
      store.commit('toggleBookmark', result);
      this.$set(this, 'isBookmarked', !this.isBookmarked);
    },
    checkIfBookmarked(result) {
      const data = store.getters.getBookmarks || [];
      const { fullName } = result;
      const foundItem = data.find(item => item.fullName === fullName);
      if (foundItem) {
        this.$set(this, 'isBookmarked', true);
      } else {
        this.$set(this, 'isBookmarked', false);
      }
    }
  },
  activated() {
    this.checkIfBookmarked(this.item);
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
