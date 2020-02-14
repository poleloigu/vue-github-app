<template>
  <div class="bookmarks">
    <h1>Bookmarks</h1>
    <Result
      v-for="(item, index) in bookmarks"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.id"
    />
  </div>
</template>

<script>
import Result from '@/components/Result.vue';
import store from '../store';

export default {
  name: 'Bookmarks',
  components: {
    Result
  },
  data() {
    return {
      bookmarks: {}
    };
  },
  methods: {
    updateResults() {
      const data = store.getters.getBookmarks;
      this.$set(this, 'bookmarks', data);
    }
  },
  activated() {
    this.updateResults();
  }
};
</script>
