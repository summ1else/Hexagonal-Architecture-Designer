<template>
  <div class="container">
    <span>Package: {{ pack }}</span>
    <span class="name">{{ name }}</span>
    <br />
    {{ adapterType }}
    <ul class="calling">
      <li v-for="iface in calling" :key="iface">
        {{ iface }}
      </li>
    </ul>
    <button @click="generateCode">log code</button>
  </div>
</template>

<script>
export default {
  name: "InputAdapter",
};
</script>
<script setup>
const props = defineProps({
  pack: String,
  name: String,
  calling: Array,
  adapterType: String,
});
import { useArchStore } from "@/stores/architecture";
const archStore = useArchStore();
const generateCode = function () {
  const methods = props.calling
    .flatMap((name) => archStore.getUseCaseByName(name).methods)
    .join("\r\n\r\n");
  const code = `
package ${props.pack}

public class ${props.name}

${methods}
`;
  console.log(code);
};
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
