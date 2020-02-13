<template>
  <div class="bookmarks">
    <h1>Bookmarks</h1>
  </div>
</template>

<script>
// import Results from '@/components/Results.vue';
export default {
  name: 'Bookmarks',
  components: {
    // Results
  },
  data() {
    return {
      bookmarks: {}
    };
  },
  methods: {
    onSearch(value) {
      this.repositories = value;
    }
  }
};
</script>
