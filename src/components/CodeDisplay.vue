<template>
  <button @click="displayCode">
    {{ shouldShowCode ? "hide" : "show" }} code
  </button>
  <div class="code" v-show="shouldShowCode">{{ props.generatedCode }}</div>
</template>
<script>
export default {
  name: "CodeDisplay",
};
</script>
<script setup>
import { ref } from "vue";

const props = defineProps({
  generatedCode: Function,
});

const shouldShowCode = ref(false);

const displayCode = () => {
  shouldShowCode.value = !shouldShowCode.value;
};
</script>
<style>
.code {
  font-family: monospace;
  white-space: pre;
}
</style>
