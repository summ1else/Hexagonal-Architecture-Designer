<template>
  <button class="btn btn-danger" @click="remove(idx)">x</button>
  <slot></slot>
</template>

<script>
export default {
  name: "RemovableComponentContainer",
  props: {
    remove: Function,
    idx: Number,
  },
};
</script>

<style scoped>
button {
  width: 40%;
  position: relative;
  left: 30%;
}
</style>
