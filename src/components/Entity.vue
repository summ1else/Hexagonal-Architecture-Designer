<template>
  <div class="container">
    <span
      ><font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right"
    /></span>
    <span>Package: {{ pack }}</span>
    <span class="name">{{ name }}</span>
    <br />
    <ul class="fields">
      <li v-for="field in fields" :key="field">
        {{ field }}
      </li>
    </ul>
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
  name: "Entity",
};
</script>
<script setup>
import { computed } from "vue";
import CodeDisplay from "@/components/CodeDisplay.vue";

const props = defineProps({
  pack: String,
  name: String,
  fields: Array,
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

public class ${props.name} {

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
.fields,
.methods {
  font-family: "Courier New";
}
</style>
