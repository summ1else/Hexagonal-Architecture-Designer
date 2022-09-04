<template>
  <div v-show="shouldShowAddInput" id="addInputAdapterDiv">
    <button
      @click="
        addInputAdapter({
          name: newInputAdapterName,
          type: newInputAdapterType,
          implementing: newInputAdapterImplementing,
        })
      "
    >
      Add Input Adapter
    </button>
    <label>InputAdapter Name</label>
    <input v-model="newInputAdapterName" />
    <label>InputAdapter Type</label>
    <input v-model="newInputAdapterType" />
    <VueMultiselect v-model="newInputAdapterImplementing"
                    :options="inputAdapterNames">
    </VueMultiselect>
  </div>
</template>

<script>
export default {
  name: 'AddInputAdapter'
}
</script>

<script setup>
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";
const newInputAdapterName = ref("");
const newInputAdapterType = ref("");
const newInputAdapterImplementing = ref('list');
const inputAdapterNames = ref(["list", "of", "options"]);
const props = defineProps({
    addInputAdapter: Function,
    shouldShowAddInput: Boolean
    // inputAdapterNames: Array
  });
console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>

</style>
