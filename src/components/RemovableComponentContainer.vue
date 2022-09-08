<template>
  <button @click="remove">x</button>
  <slot></slot>
</template>

<script>
export default {
  name: "RemovableComponentContainer",
  props: {
    remove: Function,
  },
};
</script>

<style scoped></style>
