<template>
  <div class="home">
    <h1>Search</h1>
    <Search @submitted="onSearch" />
    <Results :results="repositories" />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue';
import Results from '@/components/Results.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Results
  },
  data() {
    return {
      repositories: {}
    };
  },
  methods: {
    onSearch(value) {
      this.$set(this, 'repositories', value);
    }
  }
};
</script>
