<template>
  <div class="container">
    <span
      ><font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"
    /></span>
    <span>Package: {{ pack }}</span>
    <span class="name">{{ name }}</span>
    <br />
  </div>
</template>

<script>
export default {
  name: "EntitySimple",
};
</script>
<script setup>
defineProps({
  pack: String,
  name: String,
});
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
</style>
