<template>
  <div id="addInputPortDiv">
    <label for="newOutputAdapterName">OutputAdapter Name </label>
    <input id="newOutputAdapterName" v-model="newOutputAdapterName" />
    <label for="newOutputAdapterType">OutputAdapter Type </label>
    <input id="newOutputAdapterType" v-model="newOutputAdapterType" />
    <!--    <VueMultiselect-->
    <!--      v-model="newOutputAdapterCalling"-->
    <!--      :multiple="true"-->
    <!--      :options="repositoryNames"-->
    <!--    >-->
    <!--    </VueMultiselect>-->
    <button
      class="btn btn-primary"
      @click="
        addOutputAdapter({
          name: newOutputAdapterName,
          adapterType: newOutputAdapterType,
          calling: newOutputAdapterCalling,
        })
      "
    >
      Add Output Adapter
    </button>
  </div>
</template>

<script>
export default {
  name: "AddOutputAdapter",
};
</script>

<script setup>
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";

const newOutputAdapterName = ref("");
const newOutputAdapterType = ref("");
const newOutputAdapterCalling = ref([]);
// const outputAdapterNames = ref(["list", "of", "options"]);
const props = defineProps({
  addOutputAdapter: Function,
  repositoryNames: Array,
});
console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addInputPortDiv {
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
