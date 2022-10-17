<template>
  <button @click="displayCode">
    {{ shouldShowCode ? "hide" : "show" }} code
  </button>
  <Codemirror
    v-show="shouldShowCode"
    v-model:value="code"
    :options="cmOptions"
  />
</template>
<script>
export default {
  name: "CodeDisplay",
};
</script>
<script setup>
import { ref, toRef } from "vue";
import Codemirror from "codemirror-editor-vue3";
import "codemirror/mode/clike/clike.js";
import "codemirror/theme/dracula.css";

const props = defineProps({
  generatedCode: Function,
});

const shouldShowCode = ref(false);

const displayCode = () => {
  shouldShowCode.value = !shouldShowCode.value;
};

const code = toRef(props, "generatedCode");
const cmOptions = {
  mode: "text/x-java",
  theme: "dracula",
  readOnly: true,
  lineNumbers: true,
  smartIndent: true,
  indentUnit: 2,
  foldGutter: true,
  styleActiveLine: true,
};
</script>
<style></style>
