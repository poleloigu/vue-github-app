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
    getBookmarks() {}
  },
  watch: {
    bookmarks(val) {
      console.log('changed');
      console.log(val);
    }
  },
  created() {
    console.log('created');
  },
  updated() {
    console.log('updated');
  },
  mounted() {
    console.log('mounted');
  },
  activated() {
    console.log('activated');
    const data = store.getters.getBookmarks;
    console.log(data);
    this.$set(this, 'bookmarks', data);
    // this.bookmarks = data;
    this.$forceUpdate();
  },
  deactivated() {
    console.log('deactivated');
  }
};
</script>
