<template>
  <div id="addInputPortDiv">
    <div>
      <label for="newInputPortPack">Package</label><br />
      <input id="newInputPortPack" v-model="newInputPortPack" />
    </div>
    <div>
      <label for="newInputPortName">Use Input Port Name </label><br />
      <input id="newInputPortName" v-model="newInputPortName" />
    </div>
    <div class="adderField">
      <label for="newInputPortMethod">New Method </label><br />
      <input id="newInputPortMethod" v-model="newInputPortMethod" />
      <br />
      <button class="btn btn-secondary" @click="addMethod()">Add Method</button>
    </div>
    <div>
      <ul>
        <li v-for="(method, idx) in newInputPortMethods" :key="method">
          <RemovableComponentContainer
            :remove="removeMethod"
            :idx="idx"
            :inline="true"
          >
          </RemovableComponentContainer>
          {{ method }}
        </li>
      </ul>
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="
          addInputPort({
            pack: newInputPortPack,
            iName: newInputPortName,
            methods: newInputPortMethods,
          })
        "
      >
        Add Input Port
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddInputPort",
};
</script>

<script setup>
import { ref } from "vue";
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
// import VueMultiselect from "vue-multiselect";
const newInputPortPack = ref("");
const newInputPortName = ref("");
const newInputPortMethods = ref([]);
const newInputPortMethod = ref("");
const props = defineProps({
  addInputPort: Function,
});

function addMethod() {
  newInputPortMethods.value.push(newInputPortMethod.value);
}

const removeMethod = (idx) => {
  newInputPortMethods.value.splice(idx, 1);
};

console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addInputPortDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

#addInputPortDiv > div {
  text-align: left;
  width: 100%;
  padding: 10px;
}

.adderField > button {
  margin-top: 10px;
}
</style>
