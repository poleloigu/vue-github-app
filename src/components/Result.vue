<template>
  <div class="results__item">
    <p>{{ item.name }}</p>
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

<style></style>
