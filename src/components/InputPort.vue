<template>
  <div class="container">
    <span><font-awesome-icon icon="fa-solid fa-arrows-down-to-line" /></span>
    <span>Package: {{ pack }}</span>
    <span class="name">{{ iName }}</span>
    <ul class="methods">
      <li v-for="method in methods" :key="method">
        {{ method }}
      </li>
    </ul>
    <CodeDisplay :generated-code="generatedCode" />
  </div>
</template>

<script>
export default {
  name: "InputPort",
};
</script>
<script setup>
import { computed } from "vue";
import CodeDisplay from "@/components/CodeDisplay.vue";

const props = defineProps({
  pack: String,
  iName: String,
  methods: Array,
});
const generatedCode = computed(() => {
  const methods = props.methods
    .map((method) => {
      method = method.trim();
      return method;
    })
    .join("\r\n\r\n  ");
  return `
package ${props.pack}

public interface ${props.iName} {

  ${methods}

}`;
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
.methods {
  font-family: "Courier New";
}
</style>
