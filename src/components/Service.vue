<template>
  <div class="container">
    <span><font-awesome-icon icon="fa-solid fa-arrows-to-circle" /></span>
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
  calling: Array,
});
const generatedCode = computed(() => {
  const calledMethods = props.implementing
    .flatMap((name) => archStore.getInputPortByName(name)?.methods)
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

  const fields = props.implementing
    .map((called) => {
      return (
        "private " +
        called.trim() +
        " " +
        called.trim().charAt(0).toLowerCase() +
        called.trim().slice(1) +
        ";"
      );
    })
    .join("\r\n");

  const callingMethods = props.calling
    .map((name) => archStore.getOutputPortByName(name))
    .map((inputPort) => {
      return inputPort.methods
        .map((method) => {
          const methodName = method
            .trim()
            .substring(method.indexOf(" ") + 1, method.indexOf("("));
          // TODO: Properly handle multiple parms
          const methodParms = method
            .substring(method.indexOf("(") + 1, method.indexOf(")"))
            .trim();
          console.log("methodParms", methodParms);
          const methodWithoutType = method
            .substring(method.indexOf(" ") + 1, method.indexOf("(") + 1)
            .concat(methodParms.substring(methodParms.indexOf(" ") + 1))
            .concat(method.substring(method.indexOf(")")));
          console.log("methodWithoutType", methodWithoutType);
          return `private void calling${
            methodName.charAt(0).toUpperCase() + methodName.slice(1)
          }(${methodParms}) `
            .concat("{\r\n    ")
            .concat(
              inputPort.iName.charAt(0).toLowerCase() +
                inputPort.iName.slice(1) +
                "."
            )
            .concat(methodWithoutType)
            .concat("\r\n  }");
        })
        .join("\r\n\r\n  ");
    })
    .join(" {\r\n\r\n  }\r\n\r\n  ");
  return `
package ${props.pack}

public class ${props.name} implements ${props.implementing.join(", ")} {

  ${fields}

  ${calledMethods}

  ${callingMethods}

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
