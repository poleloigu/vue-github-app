<template>
  <div class="home">
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
      this.repositories = value;
    }
  }
};
</script>
