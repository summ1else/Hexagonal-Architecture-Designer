<template>
  <button v-if="!inline" class="btn btn-danger" @click="remove(idx)">x</button>
  <i v-if="inline" @click="remove(idx)" class="bi bi-x"></i>
  <slot></slot>
</template>

<script>
export default {
  name: "RemovableComponentContainer",
  props: {
    remove: Function,
    idx: Number,
    inline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
button.block {
  width: 40%;
  position: relative;
  left: 30%;
}
button.inline {
  padding: 2px;
  display: inline;
}
i {
  cursor: pointer;
  border: 1px solid red;
  color: red;
}
.bi {
  vertical-align: 0;
}
</style>
