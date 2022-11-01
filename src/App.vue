<template>
  <MenuHeader id="header" />
  <div id="belowFold">
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import InputPortVue from "./components/InputPort.vue";
import OutputPortPortVue from "./components/OutputPort.vue";
import InputAdapterVue from "./components/InputAdapter.vue";
import OutputAdapterVue from "./components/OutputAdapter.vue";
import MenuHeaderVue from "./components/MenuHeader.vue";
import ServiceVue from "./components/Service.vue";
import EntityVue from "./components/Entity.vue";
import { useArchStore } from "./stores/architecture";
import RemovableComponentContainer from "./components/RemovableComponentContainer.vue";
import SideBarVue from "./components/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    RemovableComponentContainer,
    MenuHeader: MenuHeaderVue,
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

<style>
html,
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: antiquewhite;
}

#belowFold {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

#sidebar {
  display: flex;
  flex-direction: row;
  height: 100%;
  font-size: 1em;
}

#containers {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
}

.typeContainer > div {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
}

.typeContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 20%;
  margin: 10px 10px;
}

.inputAdapters > div {
  border: 3px solid pink;
}

.inputPorts > div {
  border: 3px solid cornflowerblue;
}

.services > div {
  border: 3px solid tan;
}

.entities > div {
  border: 3px solid lightgreen;
}

.outputPorts > div {
  border: 3px solid lightsalmon;
}

.outputAdapters > div {
  border: 3px solid lightseagreen;
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
