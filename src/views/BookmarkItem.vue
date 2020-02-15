<template>
  <div class="bookmark__item">
    <h1>{{ singleResult.full_name }}</h1>
    <p>Name: {{ singleResult.name }}</p>
    <p>Description: {{ singleResult.description }}</p>
    <p>Stars: {{ singleResult.stargazers_count }}</p>
    <p>Forks: {{ singleResult.forks }}</p>
    <p>Language: {{ singleResult.language }}</p>
    <p>Open issues: {{ singleResult.open_issues_count }}</p>
  </div>
</template>

<script>
// import store from '../store';

export default {
  name: 'BookmarkItem',
  components: {},
  data() {
    return {
      singleResult: {}
    };
  },
  props: {
    author: String,
    name: String
  },

  methods: {
    async getItemData() {
      const { author, name } = this.$route.params;
      const tail = `repo:${author}/${name}`;
      const url = `https://api.github.com/search/repositories?q=${tail}`;
      const fetchData = fetch(url).then(response => response.json());
      const singleResult = await fetchData;
      const transformedResult = singleResult.items[0];
      this.$set(this, 'singleResult', transformedResult);
    }
  },
  mounted() {
    this.getItemData();
  }
};
</script>
