<template>
  <button @click="displayCode">
    {{ shouldShowCode ? "hide" : "show" }} code
  </button>
  <Codemirror
    v-show="shouldShowCode"
    v-model:value="code"
    :options="cmOptions"
  />
  <!--  <div class="code" v-show="shouldShowCode">{{ props.generatedCode }}</div>-->
</template>
<script>
export default {
  name: "CodeDisplay",
};
</script>
<script setup>
import { ref } from "vue";
import Codemirror from "codemirror-editor-vue3";
import "codemirror/mode/clike/clike.js";
import "codemirror/theme/dracula.css";

const props = defineProps({
  generatedCode: Function,
});

const shouldShowCode = ref(true);

const displayCode = () => {
  shouldShowCode.value = !shouldShowCode.value;
};

const code = props.generatedCode;
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
<style>
.code {
  font-family: monospace;
  white-space: pre;
}
</style>
