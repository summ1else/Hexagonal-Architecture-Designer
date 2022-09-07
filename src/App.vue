<template>
  <ul v-show="architecture.getUnimplementedUseCases.length > 0">
    <li>Unimplemented UseCases</li>
    <li v-for="useCase in architecture.getUnimplementedUseCases" :key="useCase">
      {{ useCase }}
    </li>
  </ul>
  <ul>
    <li>Uncalled UseCases</li>
    <li v-for="useCase in architecture.getUncalledUseCases" :key="useCase">
      {{ useCase }}
    </li>
  </ul>
  <button @click="architecture.showHideAddInput">Show Add Input Adapter</button>
  <AddInputAdapter
    :should-show-add-input="architecture.shouldShowAddInput"
    :input-adapter-names="architecture.getAllUseCaseNames"
    :add-input-adapter="architecture.addInputAdapter"
  />
  <div class="inputAdapters typeContainer">
    <InputAdapter
      v-for="inputAdapter in architecture.inputAdapters"
      :key="inputAdapter.name"
      :calling="inputAdapter.calling"
      :name="inputAdapter.name"
      :adapterType="inputAdapter.type"
      :remove="architecture.removeInputAdapter"
    ></InputAdapter>
  </div>
  <div class="useCases typeContainer">
    <UseCasePort
      v-for="useCase in architecture.useCases"
      :key="useCase.iName"
      :methods="useCase.methods"
      :iName="useCase.iName"
    />
  </div>
  <div class="services typeContainer">
    <Service
      v-for="service in architecture.services"
      :key="service.name"
      :implementing="service.implementing"
      :name="service.name"
    />
  </div>
  <div class="entities typeContainer">
    <Entity
      v-for:="entity in architecture.entities"
      :key="entity.name"
      :name="entity.name"
      :fields="entity.fields"
      :methods="entity.methods"
    />
  </div>
  <div class="repositories typeContainer">
    <RepositoryPort
      v-for="repository in architecture.repositories"
      :key="repository.iName"
      :methods="repository.methods"
      :iName="repository.iName"
    />
  </div>
  <div class="outputAdapters typeContainer">
    <OutputAdapter
      v-for="outputAdapter in architecture.outputAdapters"
      :key="outputAdapter"
      :implementing="outputAdapter.implementing"
      :name="outputAdapter.name"
      :adapter-type="outputAdapter.adapterType"
    />
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

export default defineComponent({
  name: "App",
  components: {
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
  justify-content: space-around;
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
