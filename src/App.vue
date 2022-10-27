<template>
  <div id="header">
    <MenuHeader />
  </div>
  <div id="belowFold">
    <SideBar :style="{ flex: 1, backgroundColor: architecture.getColor }" />

    <div id="containers">
      <div class="inputAdapters typeContainer">
        <button @click="architecture.setInputDisplay('addInputAdapter')">
          Add
        </button>
        <RemovableComponentContainer
          v-for="(inputAdapter, idx) in architecture.inputAdapters"
          :remove="architecture.removeInputAdapter"
          :idx="idx"
          :key="inputAdapter.name"
        >
          <InputAdapter v-bind="inputAdapter"></InputAdapter>
        </RemovableComponentContainer>
      </div>
      <div class="inputPorts typeContainer">
        <button @click="architecture.setInputDisplay('addInputPort')">
          Add
        </button>
        <RemovableComponentContainer
          v-for="(inputPort, idx) in architecture.inputPorts"
          :remove="architecture.removeInputPort"
          :idx="idx"
          :key="inputPort.iName"
        >
          <InputPort v-bind="inputPort" />
        </RemovableComponentContainer>
      </div>
      <div class="services typeContainer">
        <button @click="architecture.setInputDisplay('addService')">Add</button>
        <RemovableComponentContainer
          v-for="(service, idx) in architecture.services"
          :remove="architecture.removeService"
          :idx="idx"
          :key="service.name"
        >
          <Service v-bind="service" />
        </RemovableComponentContainer>
      </div>
      <div class="entities typeContainer">
        <button @click="architecture.setInputDisplay('addEntity')">Add</button>
        <RemovableComponentContainer
          v-for="(entity, idx) in architecture.entities"
          :remove="architecture.removeEntity"
          :idx="idx"
          :key="entity.name"
        >
          <Entity v-bind="entity" />
        </RemovableComponentContainer>
      </div>
      <div class="outputPorts typeContainer">
        <button @click="architecture.setInputDisplay('addOutputPort')">
          Add
        </button>
        <RemovableComponentContainer
          v-for="(outputPort, idx) in architecture.outputPorts"
          :remove="architecture.removeOutputPort"
          :idx="idx"
          :key="outputPort.iName"
        >
          <OutputPortPort v-bind="outputPort" />
        </RemovableComponentContainer>
      </div>
      <div class="outputAdapters typeContainer">
        <button @click="architecture.setInputDisplay('addOutputAdapter')">
          Add
        </button>
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
  justify-content: space-evenly;
  height: 100%;
}

#containers {
  flex: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.typeContainer > div {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
}

.typeContainer {
  display: flex;
  flex-direction: column;
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
