<template>
  <div class="container">
    <span><font-awesome-icon icon="fa-solid fa-arrow-down" /></span>
    <span>Package: {{ pack }}</span>
    <span class="name">{{ name }}</span>
    <br />
    {{ adapterType }}
    <ul class="calling">
      <li v-for="iface in calling" :key="iface">
        {{ iface }}
      </li>
    </ul>
    <CodeDisplay :generated-code="generatedCode" />
  </div>
</template>

<script>
export default {
  name: "InputAdapter",
};
</script>
<script setup>
import { computed } from "vue";
import { useArchStore } from "@/stores/architecture";
import CodeDisplay from "@/components/CodeDisplay.vue";

const archStore = useArchStore();

const props = defineProps({
  pack: String,
  name: String,
  calling: Array,
  adapterType: String,
});
const generatedCode = computed(() => {
  const methods = props.calling
    .flatMap((name) => archStore.getInputPortByName(name)?.methods)
    .filter((n) => n)
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
</style>
