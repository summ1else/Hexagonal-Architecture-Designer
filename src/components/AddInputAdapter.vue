<template>
  <div id="addInputAdapterDiv">
    <div>
      <label for="newInputAdapterPack">Package</label><br />
      <input id="newInputAdapterPack" v-model="newInputAdapterPack" />
    </div>
    <div>
      <label for="newInputAdapterName">InputAdapter Name </label><br />
      <input id="newInputAdapterName" v-model="newInputAdapterName" />
    </div>
    <div>
      <label for="newInputAdapterType">InputAdapter Type </label><br />
      <input id="newInputAdapterType" v-model="newInputAdapterType" />
    </div>
    <div>
      <VueMultiselect
        class="multiselect"
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
  align-items: flex-start;
  width: 100%;
}

#addInputAdapterDiv > div {
  text-align: left;
  width: 100%;
  padding: 10px;
}

.multiselect {
  width: 100%;
}
</style>
