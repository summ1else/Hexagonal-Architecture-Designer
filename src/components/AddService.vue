<template>
  <div id="addServiceDiv">
    <div>
      <label for="newServicePack">Package</label><br />
      <input id="newServicePack" v-model="newServicePack" />
    </div>
    <div>
      <label for="newServiceName">Service Name </label>
      <input id="newServiceName" v-model="newServiceName" />
    </div>
    <div>
      <VueMultiselect
        class="multiselect"
        v-model="newServiceImplementing"
        :multiple="true"
        :options="inputPortNames"
      >
        <!-- TODO implement a computed property instead -->
      </VueMultiselect>
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="
          addService({
            pack: newServicePack,
            name: newServiceName,
            implementing: newServiceImplementing,
          })
        "
      >
        Add Service
      </button>
    </div>
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

const newServicePack = ref("");
const newServiceName = ref("");
const newServiceImplementing = ref([]);
const props = defineProps({
  addService: Function,
  inputPortNames: Array,
});
console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addServiceDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

#addServiceDiv > div {
  text-align: left;
  width: 100%;
  padding: 10px;
}
.multiselect {
  width: 100%;
}
</style>
