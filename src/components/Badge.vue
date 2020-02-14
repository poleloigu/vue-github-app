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
      console.log(store);
      return store.state.bookmarks.length;
    }
  }
};
</script>

<style></style>
