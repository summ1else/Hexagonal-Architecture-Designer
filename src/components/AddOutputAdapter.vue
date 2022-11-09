<template>
  <div id="addOutputAdapterDiv">
    <div><font-awesome-icon icon="fa-solid fa-arrow-up" /></div>
    <div>
      <label for="newOutputAdapterPack">Package</label><br />
      <input id="newOutputAdapterPack" v-model="newOutputAdapterPack" />
    </div>
    <div>
      <label for="newOutputAdapterName">OutputAdapter Name </label><br />
      <input id="newOutputAdapterName" v-model="newOutputAdapterName" />
    </div>
    <div>
      <label for="newOutputAdapterType">OutputAdapter Type </label><br />
      <input id="newOutputAdapterType" v-model="newOutputAdapterType" />
    </div>
    <div>
      <VueMultiselect
        v-model="newOutputAdapterCalling"
        :multiple="true"
        :options="outputPortNames"
      >
      </VueMultiselect>
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="
          addOutputAdapter({
            pack: newOutputAdapterPack,
            name: newOutputAdapterName,
            adapterType: newOutputAdapterType,
            calling: newOutputAdapterCalling,
          })
        "
      >
        Add Output Adapter
      </button>
    </div>
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

const newOutputAdapterPack = ref("");
const newOutputAdapterName = ref("");
const newOutputAdapterType = ref("");
const newOutputAdapterCalling = ref([]);
// const outputAdapterNames = ref(["list", "of", "options"]);
const props = defineProps({
  addOutputAdapter: Function,
  outputPortNames: Array,
});
console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addOutputAdapterDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

#addOutputAdapterDiv > div {
  text-align: left;
  width: 100%;
  padding: 10px;
}
</style>
