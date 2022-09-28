<template>
  <div class="container">
    <span class="name">{{ name }}</span>
    <br />
    {{ adapterType }}
    <ul>
      <li v-for="iface in calling" :key="iface">
        {{ iface }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InputAdapter",
  props: {
    name: String,
    calling: Array,
    adapterType: String,
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
li {
  display: inline;
}
</style>
