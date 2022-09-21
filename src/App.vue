<template>
  <div id="header"></div>
  <div id="containers">
    <div class="inputAdapters typeContainer">
      <AddInputAdapter
        :input-adapter-names="architecture.getAllUseCaseNames"
        :add-input-adapter="architecture.addInputAdapter"
      />
      <ul>
        <li>Uncalled UseCases</li>
        <li v-show="architecture.getUnimplementedUseCases.length === 0">
          None
        </li>
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
        <InputAdapter
          :calling="inputAdapter.calling"
          :name="inputAdapter.name"
          :adapterType="inputAdapter.type"
        ></InputAdapter>
      </RemovableComponentContainer>
    </div>
    <div class="useCases typeContainer">
      <RemovableComponentContainer
        v-for="(useCase, idx) in architecture.useCases"
        :remove="architecture.removeUseCase"
        :idx="idx"
        :key="useCase.iName"
      >
        <UseCasePort :methods="useCase.methods" :iName="useCase.iName" />
      </RemovableComponentContainer>
    </div>
    <div class="services typeContainer">
      <ul>
        <li>Unimplemented UseCases</li>
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
        <Service :implementing="service.implementing" :name="service.name" />
      </RemovableComponentContainer>
    </div>
    <div class="entities typeContainer">
      <RemovableComponentContainer
        v-for="(entity, idx) in architecture.entities"
        :remove="architecture.removeEntity"
        :idx="idx"
        :key="entity.name"
      >
        <Entity
          :name="entity.name"
          :fields="entity.fields"
          :methods="entity.methods"
        />
      </RemovableComponentContainer>
    </div>
    <div class="repositories typeContainer">
      <RemovableComponentContainer
        v-for="(repository, idx) in architecture.repositories"
        :remove="architecture.removeRepository"
        :idx="idx"
        :key="repository.iName"
      >
        <RepositoryPort
          :methods="repository.methods"
          :iName="repository.iName"
        />
      </RemovableComponentContainer>
    </div>
    <div class="outputAdapters typeContainer">
      <RemovableComponentContainer
        v-for="(outputAdapter, idx) in architecture.outputAdapters"
        :remove="architecture.removeOutputAdapter"
        :idx="idx"
        :key="outputAdapter.name"
      >
        <OutputAdapter
          :implementing="outputAdapter.implementing"
          :name="outputAdapter.name"
          :adapter-type="outputAdapter.adapterType"
        />
      </RemovableComponentContainer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import UseCasePortVue from "./components/UseCasePort.vue";
import RepositoryPortVue from "./components/RepositoryPort.vue";
import InputAdapterVue from "./components/InputAdapter.vue";
import OutputAdapterVue from "./components/OutputAdapter.vue";
import AddInputAdapter from "./components/AddInputAdapter.vue";
import ServiceVue from "./components/Service.vue";
import EntityVue from "./components/Entity.vue";
import { useArchStore } from "./stores/architecture";
import RemovableComponentContainer from "./components/RemovableComponentContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    RemovableComponentContainer,
    AddInputAdapter,
    InputAdapter: InputAdapterVue,
    UseCasePort: UseCasePortVue,
    RepositoryPort: RepositoryPortVue,
    OutputAdapter: OutputAdapterVue,
    Service: ServiceVue,
    Entity: EntityVue,
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

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 10em;
  background-color: antiquewhite;
}

#containers {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.typeContainer > div {
  margin: 10px;
  padding: 10px;
}

.inputAdapters {
  display: flex;
  flex-direction: column;
}

.inputAdapters > div {
  background-color: pink;
}

.useCases > div {
  background-color: cornflowerblue;
}

.services > div {
  background-color: tan;
}

.entities > div {
  background-color: lightgreen;
}

.repositories > div {
  background-color: lightsalmon;
}

.outputAdapters > div {
  background-color: lightseagreen;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
