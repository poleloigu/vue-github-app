<template>
  <div class="badge">
    <img class="icon icon--bookmark" src="../assets/bookmarkTrue.svg" />
    {{ badgeAmount }}
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'Badge',
  computed: {
    badgeAmount() {
      if (store.state.bookmarks) {
        return store.state.bookmarks.length;
      }
      return 0;
    }
  }
};
</script>

<style></style>
