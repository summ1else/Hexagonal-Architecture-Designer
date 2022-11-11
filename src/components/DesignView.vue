<template>
  <SideBar id="sidebar" />
  <div id="containers">
    <div
      class="inputAdapters typeContainer"
      v-show="
        architecture.inputAdapters.length > 0 &&
        architecture.displayed.includes('inputAdapters')
      "
    >
      <RemovableComponentContainer
        v-for="(inputAdapter, idx) in architecture.inputAdapters"
        :remove="architecture.removeInputAdapter"
        :idx="idx"
        :key="inputAdapter.name"
      >
        <InputAdapter v-bind="inputAdapter"></InputAdapter>
      </RemovableComponentContainer>
    </div>
    <div
      class="inputPorts typeContainer"
      v-show="
        architecture.inputPorts.length > 0 &&
        architecture.displayed.includes('inputPorts')
      "
    >
      <RemovableComponentContainer
        v-for="(inputPort, idx) in architecture.inputPorts"
        :remove="architecture.removeInputPort"
        :idx="idx"
        :key="inputPort.iName"
      >
        <InputPort v-bind="inputPort" />
      </RemovableComponentContainer>
    </div>
    <div
      class="services typeContainer"
      v-show="
        architecture.services.length > 0 &&
        architecture.displayed.includes('services')
      "
    >
      <RemovableComponentContainer
        v-for="(service, idx) in architecture.services"
        :remove="architecture.removeService"
        :idx="idx"
        :key="service.name"
      >
        <Service v-bind="service" />
      </RemovableComponentContainer>
    </div>
    <div
      class="entities typeContainer"
      v-show="
        architecture.entities.length > 0 &&
        architecture.displayed.includes('entities')
      "
    >
      <RemovableComponentContainer
        v-for="(entity, idx) in architecture.entities"
        :remove="architecture.removeEntity"
        :idx="idx"
        :key="entity.name"
      >
        <Entity v-bind="entity" />
      </RemovableComponentContainer>
    </div>
    <div
      class="outputPorts typeContainer"
      v-show="
        architecture.outputPorts.length > 0 &&
        architecture.displayed.includes('outputPorts')
      "
    >
      <RemovableComponentContainer
        v-for="(outputPort, idx) in architecture.outputPorts"
        :remove="architecture.removeOutputPort"
        :idx="idx"
        :key="outputPort.iName"
      >
        <OutputPortPort v-bind="outputPort" />
      </RemovableComponentContainer>
    </div>
    <div
      class="outputAdapters typeContainer"
      v-show="
        architecture.outputAdapters.length > 0 &&
        architecture.displayed.includes('outputAdapters')
      "
    >
      <RemovableComponentContainer
        v-for="(outputAdapter, idx) in architecture.outputAdapters"
        :remove="architecture.removeOutputAdapter"
        :idx="idx"
        :key="outputAdapter.name"
      >
        <OutputAdapter v-bind="outputAdapter" />
      </RemovableComponentContainer>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import RemovableComponentContainer from "@/components/RemovableComponentContainer.vue";
import InputAdapterVue from "@/components/InputAdapter.vue";
import InputPortVue from "@/components/InputPort.vue";
import OutputPortPortVue from "@/components/OutputPort.vue";
import OutputAdapterVue from "@/components/OutputAdapter.vue";
import ServiceVue from "@/components/Service.vue";
import EntityVue from "@/components/Entity.vue";
import SideBarVue from "@/components/SideBar.vue";
import { useArchStore } from "@/stores/architecture";

export default defineComponent({
  name: "DesignView",
  components: {
    RemovableComponentContainer,
    InputAdapter: InputAdapterVue,
    InputPort: InputPortVue,
    OutputPortPort: OutputPortPortVue,
    OutputAdapter: OutputAdapterVue,
    Service: ServiceVue,
    Entity: EntityVue,
    SideBar: SideBarVue,
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
<style scoped></style>
