<template>
  <div id="addEntityDiv">
    <div>
      <label for="newEntityPack">Package</label>
      <input id="newEntityPack" v-model="newEntityPack" />
    </div>
    <div>
      <label for="newEntityName">Entity Name </label>
      <input id="newEntityName" v-model="newEntityName" />
    </div>
    <div>
      <label for="newEntityField">New Field </label>
      <input
        @keyup.enter="addField()"
        id="newEntityField"
        v-model="newEntityField"
      />
    </div>
    <div>
      <button class="btn btn-secondary" @click="addField()">Add Field</button>
    </div>
    <div>
      <ul>
        <li v-for="(field, idx) in newEntityFields" :key="field">
          <RemovableComponentContainer
            :idx="idx"
            :remove="removeField"
            :inline="true"
          >
          </RemovableComponentContainer>
          {{ field }}
        </li>
      </ul>
    </div>
    <div>
      <label for="newEntityMethod">New Method </label>
      <input
        @keyup.enter="addMethod()"
        id="newEntityMethod"
        v-model="newEntityMethod"
      />
    </div>
    <div>
      <button class="btn btn-secondary" @click="addMethod()">Add Method</button>
    </div>
    <div>
      <ul>
        <li v-for="(method, idx) in newEntityMethods">
          <RemovableComponentContainer
            :key="method"
            :idx="idx"
            :remove="removeMethod"
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
          addEntity({
            pack: newEntityPack,
            name: newEntityName,
            fields: newEntityFields,
            methods: newEntityMethods,
          })
        "
      >
        Add Entity
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEntity",
};
</script>

<script setup>
import { ref } from "vue";
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
// import VueMultiselect from "vue-multiselect";
const newEntityPack = ref("");
const newEntityName = ref("");
const newEntityFields = ref([]);
const newEntityField = ref("");
const newEntityMethods = ref([]);
const newEntityMethod = ref("");
const props = defineProps({
  addEntity: Function,
});

function addMethod() {
  newEntityMethods.value.push(newEntityMethod.value);
  newEntityMethod.value = "";
}

function removeField(idx) {
  newEntityFields.value.splice(idx, 1);
}

function removeMethod(idx) {
  newEntityMethods.value.splice(idx, 1);
}

function addField() {
  newEntityFields.value.push(newEntityField.value);
  newEntityField.value = "";
}

console.log(props);
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#addEntityDiv {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

#addEntityDiv > div {
  text-align: left;
  width: 100%;
  padding: 10px;
}
</style>
