<template>
  <div id="addUseCasePortDiv">
    <div>
      <div>
        <ul>
          <li v-for="(method, idx) in newUseCasePortMethods">
            <RemovableComponentContainer
              :key="method"
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
        <label for="newUseCasePortName">Use Case Port Name </label>
        <input id="newUseCasePortName" v-model="newUseCasePortName" />
      </div>
      <div class="adderField">
        <label for="newInputAdapterType">New Method </label>
        <input id="newInputAdapterType" v-model="newUseCasePortMethod" />
        <button class="btn btn-secondary" @click="addMethod()">
          Add Method
        </button>
      </div>
      <br />
      <button
        class="btn btn-primary"
        @click="
          addUseCasePort({
            iName: newUseCasePortName,
            methods: newUseCasePortMethods,
          })
        "
      >
        Add Use Case Port
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUseCasePort",
};
</script>

<script setup>
import { ref } from "vue";
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
// import VueMultiselect from "vue-multiselect";
const newUseCasePortName = ref("");
const newUseCasePortMethods = ref([]);
const newUseCasePortMethod = ref("");
const props = defineProps({
  addUseCasePort: Function,
});

function addMethod() {
  newUseCasePortMethods.value.push(newUseCasePortMethod.value);
}

const removeMethod = (idx) => {
  newUseCasePortMethods.value.splice(idx, 1);
};

console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addUseCasePortDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

#addUseCasePortDiv > div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
  align-items: flex-start;
}

div.display {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 65%;
  align-items: flex-start;
  height: 100%;
}

.editor > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.adderField {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.adderField > button {
  margin-top: 5px;
}
</style>
