<template>
  <div id="addUseCasePortDiv">
    <label for="newUseCasePortName"
      >Entity Name <input id="newUseCasePortName" v-model="newEntityName"
    /></label>
    <ul>
      <RemovableComponentContainer
        v-for="(field, idx) in newEntityFields"
        :key="field"
        :idx="idx"
        :remove="removeField"
      >
        <li>
          {{ field }}
        </li>
      </RemovableComponentContainer>
    </ul>
    <label for="newEntityField"
      >New Field <input id="newEntityField" v-model="newEntityField"
    /></label>
    <button @click="addField()">Add Field</button>
    <ul>
      <RemovableComponentContainer
        v-for="(method, idx) in newEntityMethods"
        :key="method"
        :idx="idx"
        :remove="removeMethod"
      >
        <li>
          {{ method }}
        </li>
      </RemovableComponentContainer>
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
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
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
  newEntityMethods.value.push(newEntityMethod.value);
}

function removeField(idx) {
  newEntityFields.value.splice(idx, 1);
}

function removeMethod(idx) {
  newEntityMethods.value.splice(idx, 1);
}

function addField() {
  newEntityFields.value.push(newEntityField.value);
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
