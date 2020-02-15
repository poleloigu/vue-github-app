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
      query: ''
    };
  },
  methods: {
    async searchRepos(query) {
      if (query) {
        const formattedQuery = query.split(/[ ,]+/).join(',');
        const tail = `${formattedQuery}+in:name,description&type=Repositories`;
        const url = `https://api.github.com/search/repositories?q=${tail}`;
        const fetchData = fetch(url).then(response => response.json());
        const responseRepositories = await fetchData;
        const transformedData = this.transformData(responseRepositories);
        this.$emit('submitted', transformedData);
      }
    },
    transformData(data) {
      const { items } = data;
      const transformedData = items.map(item => ({
        name: item.name,
        author: item.owner.login,
        fullName: item.full_name,
        href: item.html_url,
        stars: item.stargazers_count,
        forks: item.forks_count,
        id: item.id
      }));
      return transformedData;
    }
  }
};
</script>
