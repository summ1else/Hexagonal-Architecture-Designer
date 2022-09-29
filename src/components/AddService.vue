<template>
  <div id="addUseCasePortDiv">
    <label for="newInputAdapterName">Service Name </label>
    <input id="newInputAdapterName" v-model="newServiceName" />
    <VueMultiselect
      v-model="newServiceImplementing"
      :multiple="true"
      :options="useCaseNames.concat(repositoryNames)"
    >
      <!-- TODO implement a computed property instead -->
    </VueMultiselect>
    <button
      class="btn btn-primary"
      @click="
        addService({
          name: newServiceName,
          implementing: newServiceImplementing,
        })
      "
    >
      Add Service
    </button>
  </div>
</template>

<script>
export default {
  name: "AddService",
};
</script>

<script setup>
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";

const newServiceName = ref("");
const newServiceImplementing = ref([]);
const props = defineProps({
  addService: Function,
  useCaseNames: Array,
  repositoryNames: Array,
});
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
