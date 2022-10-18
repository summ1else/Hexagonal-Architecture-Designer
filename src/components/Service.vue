<template>
  <div class="container">
    <span>Package: {{ pack }}</span>
    <span class="name">{{ name }}</span>
    <br />
    <ul class="implementing">
      <li v-for="iface in implementing" :key="iface">
        {{ iface }}
      </li>
    </ul>
    <CodeDisplay :generated-code="generatedCode" />
  </div>
</template>

<script>
export default {
  name: "Service",
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
  implementing: Array,
});
const generatedCode = computed(() => {
  const methods = props.implementing
    .flatMap((name) => archStore.getInputPortByName(name)?.methods)
    .filter((n) => n)
    .map((method) => {
      method = method.trim();
      if (method.indexOf(";") === method.length - 1) {
        method = method.substring(0, method.length - 1);
        console.log("Found", method);
      }
      return method;
    })
    .join(" {\r\n\r\n  }\r\n\r\n  ")
    .concat(" {\r\n\r\n  }");
  return `
package ${props.pack}

public class ${props.name} implements ${props.implementing.join(", ")} {

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
