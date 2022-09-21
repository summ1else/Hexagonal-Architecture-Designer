<template>
  <div id="addUseCasePortDiv">
    <label for="newUseCasePortName"
      >Use Case Port Name
      <input id="newUseCasePortName" v-model="newUseCasePortName"
    /></label>
    <ul>
      <li v-for="method in newUseCasePortMethods" :key="method">
        {{ method }}
      </li>
    </ul>
    <label for="newInputAdapterType"
      >New Method
      <input id="newInputAdapterType" v-model="newUseCasePortMethod"
    /></label>
    <button @click="addMethod()">Add Method</button>
    <br />
    <button
      @click="
        addUseCasePort({
          iName: newUseCasePortName,
          methods: newUseCasePortMethods,
        })
      "
    >
      Add Use Case Port
    </button>
  </div>
</template>

<script>
export default {
  name: "AddUseCasePort",
};
</script>

<script setup>
import { ref } from "vue";
// import VueMultiselect from "vue-multiselect";
const newUseCasePortName = ref("");
const newUseCasePortMethods = ref([]);
const newUseCasePortMethod = ref("");
const props = defineProps({
  addUseCasePort: Function,
});

function addMethod() {
  this.newUseCasePortMethods.push(newUseCasePortMethod.value);
}

console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addUseCasePortDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

label {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
