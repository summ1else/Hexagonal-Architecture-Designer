<template>
  <div class="container">
    {{ name }} <br />
    <ul>
      <li v-for="iface in implementing" :key="iface">
        {{ iface }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    name: String,
    implementing: Array,
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
  background-color: orange;
  padding: 0;
}
</style>

