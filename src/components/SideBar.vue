<template>
  <AddInputAdapter
    v-show="architecture.inputDisplay === 'addInputAdapter'"
    :input-adapter-names="architecture.getAllInputPortNames"
    :add-input-adapter="architecture.addInputAdapter"
  />
  <AddInputPort
    v-show="architecture.inputDisplay === 'addInputPort'"
    :add-input-port="architecture.addInputPort"
  />
  <AddService
    v-show="architecture.inputDisplay === 'addService'"
    :add-service="architecture.addService"
    :use-case-names="architecture.getAllInputPortNames"
  />
  <AddEntity
    v-show="architecture.inputDisplay === 'addEntity'"
    :add-entity="architecture.addEntity"
  />
  <AddRepository
    v-show="architecture.inputDisplay === 'addRepository'"
    :add-repository="architecture.addRepository"
  />
  <AddOutputAdapter
    v-show="architecture.inputDisplay === 'addOutputAdapter'"
    :add-output-adapter="architecture.addOutputAdapter"
    :repository-names="architecture.getAllRepositoryNames"
  />
</template>

<script>
import { defineComponent } from "vue";
import { useArchStore } from "@/stores/architecture";
import AddInputAdapterVue from "@/components/AddInputAdapter.vue";
import AddInputPortVue from "@/components/AddInputPort.vue";
import AddServiceVue from "@/components/AddService.vue";
import AddEntityVue from "@/components/AddEntity.vue";
import AddRepositoryVue from "@/components/AddSecondaryPort.vue";
import AddOutputAdapterVue from "@/components/AddOutputAdapter.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    AddOutputAdapter: AddOutputAdapterVue,
    AddRepository: AddRepositoryVue,
    AddInputAdapter: AddInputAdapterVue,
    AddInputPort: AddInputPortVue,
    AddService: AddServiceVue,
    AddEntity: AddEntityVue,
  },
  setup() {
    const architecture = useArchStore();
    window.stores = { architecture };
    return {
      architecture,
    };
  },
});
</script>

<style>
.typeContainer > div {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
}

ul {
  text-align: left;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
}
</style>
