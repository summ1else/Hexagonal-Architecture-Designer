<template>
  <div id="addInputAdapterDiv">
    <div>
      <label for="newInputAdapterPack">Package</label>
      <input id="newInputAdapterPack" v-model="newInputAdapterPack" />
    </div>
    <div>
      <label for="newInputAdapterName">InputAdapter Name </label>
      <input id="newInputAdapterName" v-model="newInputAdapterName" />
    </div>
    <div>
      <label for="newInputAdapterType">InputAdapter Type </label>
      <input id="newInputAdapterType" v-model="newInputAdapterType" />
    </div>
    <div>
      <VueMultiselect
        v-model="newInputAdapterCalling"
        :multiple="true"
        :options="inputAdapterNames"
      >
      </VueMultiselect>
    </div>
    <div>
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
  </div>
</template>

<script>
export default {
  name: "AddInputAdapter"
};
</script>

<script setup>
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";
const newInputAdapterPack = ref("");
const newInputAdapterName = ref("");
const newInputAdapterType = ref("");
const newInputAdapterCalling = ref([]);

const props = defineProps({
  addInputAdapter: Function,
  inputAdapterNames: Array
});
console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addInputAdapterDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}
#addInputAdapterDiv > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
div.multiselect {
  min-width: 400px;
}
</style>
