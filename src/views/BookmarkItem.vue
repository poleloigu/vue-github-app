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
      singleResult: {},
      readme: {}
    };
  },
  props: {
    author: String,
    name: String
  },

  methods: {
    async getItemData(author, name) {
      const tail = `repo:${author}/${name}`;
      const url = `https://api.github.com/search/repositories?q=${tail}`;
      const fetchData = fetch(url).then(response => response.json());
      const singleResult = await fetchData;
      const transformedResult = singleResult.items[0];
      this.$set(this, 'singleResult', transformedResult);
    },
    async getItemReadme(author, name) {
      const tail = `repos/${author}/${name}/readme`;
      const url = `https://api.github.com/${tail}`;
      const fetchReadme = fetch(url).then(response => response.json());
      const readme = await fetchReadme;
      const decodedReadme = atob(readme.content);
      this.$set(this, 'readme', decodedReadme);
    }
  },
  mounted() {
    const { author, name } = this.$route.params;
    this.getItemData(author, name);
    this.getItemReadme(author, name);
  }
};
</script>
