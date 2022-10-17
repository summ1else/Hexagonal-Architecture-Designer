<template>
  <MenuHeader/>
  <div id="belowFold">
    <div id="sideBar" :style="{ backgroundColor: architecture.getColor }">
      <SideBar />
    </div>
    <div id="containers">
      <div class="inputAdapters typeContainer">
        <button @click="architecture.setInputDisplay('addInputAdapter')">
          Add
        </button>
        <ul>
          <li class="h5">Uncalled UseCases</li>
          <li v-show="architecture.getUncalledUseCases.length === 0">None</li>
          <li v-for="useCase in architecture.getUncalledUseCases" :key="useCase">
            {{ useCase }}
          </li>
        </ul>
        <RemovableComponentContainer
            v-for="(inputAdapter, idx) in architecture.inputAdapters"
            :remove="architecture.removeInputAdapter"
            :idx="idx"
            :key="inputAdapter.name"
        >
          <InputAdapter v-bind="inputAdapter"></InputAdapter>
        </RemovableComponentContainer>
      </div>
      <div class="useCases typeContainer">
        <button @click="architecture.setInputDisplay('addUseCasePort')">
          Add
        </button>
        <RemovableComponentContainer
            v-for="(useCase, idx) in architecture.useCases"
            :remove="architecture.removeUseCase"
            :idx="idx"
            :key="useCase.iName"
        >
          <UseCasePort v-bind="useCase"/>
        </RemovableComponentContainer>
      </div>
      <div class="services typeContainer">
        <button @click="architecture.setInputDisplay('addService')">Add</button>
        <ul>
          <li class="h5">Unimplemented UseCases</li>
          <li v-show="architecture.getUnimplementedUseCases.length === 0">
            None
          </li>
          <li
              v-for="useCase in architecture.getUnimplementedUseCases"
              :key="useCase"
          >
            {{ useCase }}
          </li>
        </ul>
        <RemovableComponentContainer
            v-for="(service, idx) in architecture.services"
            :remove="architecture.removeService"
            :idx="idx"
            :key="service.name"
        >
          <Service v-bind="service"/>
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
          <Entity v-bind="entity"/>
        </RemovableComponentContainer>
      </div>
      <div class="repositories typeContainer">
        <button @click="architecture.setInputDisplay('addRepository')">
          Add
        </button>
        <RemovableComponentContainer
            v-for="(repository, idx) in architecture.repositories"
            :remove="architecture.removeRepository"
            :idx="idx"
            :key="repository.iName"
        >
          <RepositoryPort v-bind="repository"/>
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
          <OutputAdapter v-bind="outputAdapter"/>
        </RemovableComponentContainer>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import UseCasePortVue from "./components/UseCasePort.vue";
import RepositoryPortVue from "./components/RepositoryPort.vue";
import InputAdapterVue from "./components/InputAdapter.vue";
import OutputAdapterVue from "./components/OutputAdapter.vue";
import MenuHeaderVue from "./components/MenuHeader.vue";
import ServiceVue from "./components/Service.vue";
import EntityVue from "./components/Entity.vue";
import {useArchStore} from "./stores/architecture";
import RemovableComponentContainer from "./components/RemovableComponentContainer.vue";
import SideBarVue from "./components/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    RemovableComponentContainer,
    MenuHeader: MenuHeaderVue,
    InputAdapter: InputAdapterVue,
    UseCasePort: UseCasePortVue,
    RepositoryPort: RepositoryPortVue,
    OutputAdapter: OutputAdapterVue,
    Service: ServiceVue,
    Entity: EntityVue,
    SideBar: SideBarVue
  },
  setup() {
    const architecture = useArchStore();
    window.stores = {architecture};
    return {
      architecture,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#belowFold {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#sideBar {
  flex: 1;
}

#containers {;
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

.useCases > div {
  border: 3px solid cornflowerblue;
}

.services > div {
  border: 3px solid tan;
}

.entities > div {
  border: 3px solid lightgreen;
}

.repositories > div {
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
