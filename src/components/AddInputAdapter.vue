<template>
  <div id="addInputAdapterDiv">
    <label for="newInputAdapterPack">Package</label>
    <input id="newInputAdapterPack" v-model="newInputAdapterPack" />
    <label for="newInputAdapterName">InputAdapter Name </label>
    <input id="newInputAdapterName" v-model="newInputAdapterName" />
    <label for="newInputAdapterType">InputAdapter Type </label>
    <input id="newInputAdapterType" v-model="newInputAdapterType" />
    <VueMultiselect
      v-model="newInputAdapterCalling"
      :multiple="true"
      :options="inputAdapterNames"
    >
    </VueMultiselect>
    <button
      class="btn btn-primary"
      @click="
        addInputAdapter({
          pack: newInputAdapterPack,
          name: newInputAdapterName,
          type: newInputAdapterType,
          calling: newInputAdapterCalling,
        })
      "
    >
      Add Input Adapter
    </button>
  </div>
</template>

<script>
export default {
  name: "AddInputAdapter",
};
</script>

<script setup>
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";
const newInputAdapterPack = ref("");
const newInputAdapterName = ref("");
const newInputAdapterType = ref("");
const newInputAdapterCalling = ref([]);
// const inputAdapterNames = ref(["list", "of", "options"]);
const props = defineProps({
  addInputAdapter: Function,
  inputAdapterNames: Array,
});
console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addInputAdapterDiv {
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
