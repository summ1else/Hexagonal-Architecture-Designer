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
button {
  width: 10%;
  position: relative;
  left: 90%;
  margin-bottom: 10px;
  display: block;
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
