<template>
  <div id="header"></div>
  <div id="containers">
    <div class="inputAdapters typeContainer">
      <AddInputAdapter
        :input-adapter-names="architecture.getAllUseCaseNames"
        :add-input-adapter="architecture.addInputAdapter"
      />
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
        <InputAdapter
          :calling="inputAdapter.calling"
          :name="inputAdapter.name"
          :adapterType="inputAdapter.type"
        ></InputAdapter>
      </RemovableComponentContainer>
    </div>
    <div class="useCases typeContainer">
      <AddUseCasePort :add-use-case-port="architecture.addUseCasePort" />
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
      <AddService
        :add-service="architecture.addService"
        :use-case-names="architecture.getAllUseCaseNames"
      />
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
        <Service :implementing="service.implementing" :name="service.name" />
      </RemovableComponentContainer>
    </div>
    <div class="entities typeContainer">
      <AddEntity :add-entity="architecture.addEntity" />
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
      <AddRepository :add-repository="architecture.addRepository" />
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
      <AddOutputAdapter
        :add-output-adapter="architecture.addOutputAdapter"
        :repository-names="architecture.getAllRepositoryNames"
      />
      <RemovableComponentContainer
        v-for="(outputAdapter, idx) in architecture.outputAdapters"
        :remove="architecture.removeOutputAdapter"
        :idx="idx"
        :key="outputAdapter.name"
      >
        <OutputAdapter
          :calling="outputAdapter.calling"
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
import AddInputAdapterVue from "./components/AddInputAdapter.vue";
import AddUseCasePortVue from "./components/AddUseCasePort.vue";
import AddServiceVue from "./components/AddService.vue";
import AddEntityVue from "./components/AddEntity.vue";
import ServiceVue from "./components/Service.vue";
import EntityVue from "./components/Entity.vue";
import { useArchStore } from "./stores/architecture";
import RemovableComponentContainer from "./components/RemovableComponentContainer.vue";
import AddRepositoryVue from "./components/AddRepository.vue";
import AddOutputAdapterVue from "./components/AddOutputAdapter.vue";

export default defineComponent({
  name: "App",
  components: {
    AddOutputAdapter: AddOutputAdapterVue,
    AddRepository: AddRepositoryVue,
    RemovableComponentContainer,
    AddInputAdapter: AddInputAdapterVue,
    AddUseCasePort: AddUseCasePortVue,
    AddService: AddServiceVue,
    AddEntity: AddEntityVue,
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
  //margin-top: 60px;
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
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

span.name {
  font-size: larger;
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
