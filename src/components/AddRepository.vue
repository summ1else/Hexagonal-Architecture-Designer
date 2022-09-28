<template>
  <div id="addRepositoryDiv">
    <label for="newRepositoryName"
      >Repository Name
      <input id="newRepositoryName" v-model="newRepositoryName"
    /></label>
    <ul>
      <RemovableComponentContainer
        v-for="(method, idx) in newRepositoryMethods"
        :key="method"
        :idx="idx"
        :remove="removeMethod"
      >
        <li>
          {{ method }}
        </li>
      </RemovableComponentContainer>
    </ul>
    <label for="newInputAdapterType"
      >New Method <input id="newInputAdapterType" v-model="newRepositoryMethod"
    /></label>
    <button @click="addMethod()">Add Method</button>
    <br />
    <button
      @click="
        addRepository({
          iName: newRepositoryName,
          methods: newRepositoryMethods,
        })
      "
    >
      Add Repository
    </button>
  </div>
</template>

<script>
export default {
  name: "AddRepository",
};
</script>

<script setup>
import { ref } from "vue";
// import VueMultiselect from "vue-multiselect";
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
const newRepositoryName = ref("");
const newRepositoryMethods = ref([]);
const newRepositoryMethod = ref("");
const props = defineProps({
  addRepository: Function,
});

function addMethod() {
  newRepositoryMethods.value.push(newRepositoryMethod.value);
}

function removeMethod(idx) {
  newRepositoryMethods.value.splice(idx, 1);
}

console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addRepositoryDiv {
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
