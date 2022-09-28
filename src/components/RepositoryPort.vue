<template>
  <div class="container">
    <span class="name">{{ iName }}</span>
    <br />
    <ul>
      <li v-for="method in methods" :key="method">{{ method }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RepositoryPort",
  props: {
    iName: String,
    methods: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
ul {
  text-align: left;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
}
</style>
