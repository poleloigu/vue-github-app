<template>
  <div class="search">
    <form v-on:submit.prevent="searchRepos(query)">
      <input type="search" v-model="query" placeholder="Search repos" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      query: 'vk-projekt' // Used for testing purposes
      // query: ''
    };
  },
  methods: {
    async searchRepos(query) {
      if (query) {
        const formattedQuery = query.split(/[ ,]+/).join(','); // Commas are used to separate values in query
        const tail = `${formattedQuery}+in:name,description&type=Repositories`;
        const url = `https://api.github.com/search/repositories?q=${tail}`;
        const fetchData = fetch(url).then(response => response.json());
        const responseRepositories = await fetchData;
        console.log(responseRepositories);
        this.$emit('submitted', responseRepositories);
      }
    }
  }
};
</script>
