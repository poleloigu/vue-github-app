<template>
  <div class="results">
    <Result
      v-for="(item, index) in results"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.id"
    />
  </div>
</template>

<script>
import Result from '@/components/Result.vue';

export default {
  name: 'Results',
  components: {
    Result
  },
  props: {
    results: Object
  },
  created() {
    console.log(this.results);
  }
};
</script>

<style lang="scss">
.results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
