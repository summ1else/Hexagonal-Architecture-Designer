<template>
  <div class="container">
    {{ name }} <br />
    <ul>
      <li v-for="field in fields" :key="field">
        {{ field }}
      </li>
      <li v-for="method in methods" :key="method">
        {{ method }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Entity",
  props: {
    name: String,
    fields: Array,
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
  background-color: orange;
  padding: 0;
}
</style>

