<template>
  <div class="results__item">
    <h2 className="heading heading--result">{{ item.name }}</h2>
    <p>{{ item.name }}</p>
    <p>Stars: {{ item.stargazers_count }}</p>
    <p>Forks: {{ item.forks_count }}</p>
    <a target="_blank" :href="item.html_url">Link</a>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    item: Object
  }
};
</script>

<style lang="scss">
.results__item {
  border: 1px solid black;
}
</style>
