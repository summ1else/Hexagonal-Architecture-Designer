<template>
  <div id="addOutputPortDiv">
    <div>
      <font-awesome-icon icon="fa-solid fa-arrows-up-to-line" />
    </div>
    <div>
      <label for="newOutputPortPack">Package</label><br />
      <input id="newOutputPortPack" v-model="newOutputPortPack" />
    </div>
    <div>
      <label for="newOutputPortName">OutputPort Name </label><br />
      <input id="newOutputPortName" v-model="newOutputPortName" />
    </div>
    <div>
      <label for="newInputAdapterType">New Method </label><br />
      <input id="newInputAdapterType" v-model="newOutputPortMethod" />
    </div>
    <div>
      <button class="btn btn-secondary" @click="addMethod()">Add Method</button>
    </div>
    <div>
      <ul>
        <RemovableComponentContainer
          v-for="(method, idx) in newOutputPortMethods"
          :key="method"
          :idx="idx"
          :remove="removeMethod"
        >
          <li>
            {{ method }}
          </li>
        </RemovableComponentContainer>
      </ul>
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="
          addOutputPort({
            iName: newOutputPortName,
            methods: newOutputPortMethods,
          })
        "
      >
        Add OutputPort
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddOutputPort",
};
</script>

<script setup>
import { ref } from "vue";
// import VueMultiselect from "vue-multiselect";
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
const newOutputPortPack = ref("");
const newOutputPortName = ref("");
const newOutputPortMethods = ref([]);
const newOutputPortMethod = ref("");
const props = defineProps({
  addOutputPort: Function,
});

function addMethod() {
  newOutputPortMethods.value.push(newOutputPortMethod.value);
}

function removeMethod(idx) {
  newOutputPortMethods.value.splice(idx, 1);
}

console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addOutputPortDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

#addOutputPortDiv > div {
  text-align: left;
  width: 100%;
  padding: 10px;
}
</style>
