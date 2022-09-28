<template>
  <div id="addUseCasePortDiv">
    <label for="newUseCasePortName"
      >Use Case Port Name
      <input id="newUseCasePortName" v-model="newUseCasePortName"
    /></label>
    <ul>
      <RemovableComponentContainer
        v-for="(method, idx) in newUseCasePortMethods"
        :key="method"
        :remove="removeMethod"
        :idx="idx"
      >
        <li>
          {{ method }}
        </li>
      </RemovableComponentContainer>
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
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
// import VueMultiselect from "vue-multiselect";
const newUseCasePortName = ref("");
const newUseCasePortMethods = ref([]);
const newUseCasePortMethod = ref("");
const props = defineProps({
  addUseCasePort: Function,
});

function addMethod() {
  newUseCasePortMethods.value.push(newUseCasePortMethod.value);
}

const removeMethod = (idx) => {
  newUseCasePortMethods.value.splice(idx, 1);
};

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
