<template>
  <div class="container">
    <span class="name">{{ iName }}</span>
    <br />
    <ul class="methods">
      <li v-for="method in methods" :key="method">{{ method }}</li>
    </ul>
    <CodeDisplay :generated-code="generatedCode" />
  </div>
</template>

<script>
export default {
  name: "OutputPortPort",
};
</script>
<script setup>
import { computed } from "vue";
import { useArchStore } from "@/stores/architecture";
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
    .map((method) => {
      const methodName = method.substring(0, method.indexOf("("));
      // TODO: Properly handle multiple parms
      const methodParms = method
        .substring(method.indexOf("(") + 1, method.indexOf(")"))
        .trim();
      console.log("methodParms", methodParms);
      const methodWithoutType = method
        .substring(0, method.indexOf("(") + 1)
        .concat(methodParms.substring(methodParms.indexOf(" ") + 1))
        .concat(method.substring(method.indexOf(")")));
      console.log("methodWithoutType", methodWithoutType);
      return `public void calling${
        methodName.charAt(0).toUpperCase() + methodName.slice(1)
      }(${methodParms}) `
        .concat("{\r\n    ")
        .concat(methodWithoutType)
        .concat("\r\n  }");
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
.methods {
  font-family: "Courier New";
}
</style>
