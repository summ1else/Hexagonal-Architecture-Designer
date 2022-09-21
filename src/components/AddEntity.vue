<template>
  <div id="addUseCasePortDiv">
    <label for="newUseCasePortName"
      >Entity Name <input id="newUseCasePortName" v-model="newEntityName"
    /></label>
    <ul>
      <li v-for="field in newEntityFields" :key="field">
        {{ field }}
      </li>
    </ul>
    <label for="newEntityField"
      >New Field <input id="newEntityField" v-model="newEntityField"
    /></label>
    <button @click="addField()">Add Field</button>
    <ul>
      <li v-for="method in newEntityMethods" :key="method">
        {{ method }}
      </li>
    </ul>
    <label for="newEntityMethod"
      >New Method <input id="newEntityMethod" v-model="newEntityMethod"
    /></label>
    <button @click="addMethod()">Add Method</button>
    <br />
    <button
      @click="
        addEntity({
          name: newEntityName,
          fields: newEntityFields,
          methods: newEntityMethods,
        })
      "
    >
      Add Use Case Port
    </button>
  </div>
</template>

<script>
export default {
  name: "AddEntity",
};
</script>

<script setup>
import { ref } from "vue";
// import VueMultiselect from "vue-multiselect";
const newEntityName = ref("");
const newEntityFields = ref([]);
const newEntityField = ref("");
const newEntityMethods = ref([]);
const newEntityMethod = ref("");
const props = defineProps({
  addEntity: Function,
});

function addMethod() {
  this.newEntityMethods.push(newEntityMethod.value);
}

function addField() {
  this.newEntityFields.push(newEntityField.value);
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
