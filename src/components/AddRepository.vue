<template>
  <div id="addRepositoryDiv">
    <label for="newRepositoryName"
      >Repository Name
      <input id="newRepositoryName" v-model="newRepositoryName"
    /></label>
    <ul>
      <li v-for="method in newRepositoryMethods" :key="method">
        {{ method }}
      </li>
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
const newRepositoryName = ref("");
const newRepositoryMethods = ref([]);
const newRepositoryMethod = ref("");
const props = defineProps({
  addRepository: Function,
});

function addMethod() {
  this.newRepositoryMethods.push(newRepositoryMethod.value);
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
