<template>
  <button @click="remove(idx)">x</button>
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

<style scoped></style>
