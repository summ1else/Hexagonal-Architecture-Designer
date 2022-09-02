<template>
  <div v-show="shouldShowAddInput" id="addInputAdapterDiv">
    <button
      @click="
        addInputAdapter({
          name: 'First Controller',
          type: 'controller',
          implementing: ['First Use Case'],
        })
      "
    >
      Add Input Adapter
    </button>
    <label>InputAdapter Name</label>
    <input v-model="newInputAdapterName" />
    <label>InputAdapter Type</label>
    <input v-model="newInputAdapterType" />
  </div>
  <button @click="showHideAddInput">Show Add Input Adapter</button>

  <div class="inputAdapters typeContainer">
    <InputAdapter
      v-for="inputAdapter in inputAdapters"
      :key="inputAdapter.name"
      :implementing="inputAdapter.implementing"
      :name="inputAdapter.name"
      :adapterType="inputAdapter.type"
      :remove="removeInputAdapter"
    ></InputAdapter>
  </div>
  <div class="useCases typeContainer">
    <UseCasePort
      v-for="useCase in useCases"
      :key="useCase.iName"
      :methods="useCase.methods"
      :iName="useCase.iName"
    />
  </div>
  <div class="services typeContainer">
    <Service
      v-for="service in services"
      :key="service.name"
      :implementing="service.implementing"
      :name="service.name"
    />
  </div>
  <div class="entities typeContainer">
    <Entity
      v-for:="entity in entities"
      :key="entity.name"
      :name="entity.name"
      :fields="entity.fields"
      :methods="entity.methods"
    />
  </div>
  <div class="repositories typeContainer">
    <RepositoryPort
      v-for="repository in repositories"
      :key="repository.iName"
      :methods="repository.methods"
      :iName="repository.iName"
    />
  </div>
  <div class="outputAdapters typeContainer">
    <OutputAdapter
      v-for="outputAdapter in outputAdapters"
      :key="outputAdapter"
      :implementing="outputAdapter.implementing"
      :name="outputAdapter.name"
      :adapter-type="outputAdapter.adapterType"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
import UseCasePortVue from "./components/UseCasePort.vue";
import RepositoryPortVue from "./components/RepositoryPort.vue";
import InputAdapterVue from "./components/InputAdapter.vue";
import OutputAdapterVue from "./components/OutputAdapter.vue";
import ServiceVue from "./components/Service.vue";
import EntityVue from "./components/Entity.vue";
const state = reactive({});
export default {
  name: "App",
  components: {
    InputAdapter: InputAdapterVue,
    UseCasePort: UseCasePortVue,
    RepositoryPort: RepositoryPortVue,
    OutputAdapter: OutputAdapterVue,
    Service: ServiceVue,
    Entity: EntityVue,
  },
  methods: {
    addInputAdapter() {
      this.inputAdapters.push({
        name: this.newInputAdapterName,
        type: this.newInputAdapterType,
        implementing: this.newInputAdapterImplementing,
      });
    },
    removeInputAdapter(inputAdapter) {
      this.inputAdapters.splice(this.inputAdapters.indexOf(inputAdapter), 1);
    },
    showHideAddInput() {
      this.shouldShowAddInput = !this.shouldShowAddInput;
    },
  },
  data() {
    return {
      newInputAdapterName: "",
      newInputAdapterType: "",
      newInputAdapterImplementing: [],
      shouldShowAddInput: false,
      inputAdapters: [
        {
          name: "First Controller",
          type: "controller",
          implementing: ["First Use Case"],
        },
        {
          name: "Second Controller",
          type: "controller",
          implementing: ["First Use Case"],
        },
      ],
      useCases: [
        {
          iName: "First Use Case",
          methods: ["method one", "method two"],
        },
      ],
      services: [
        {
          name: "First Service",
          implementing: ["First Use Case"],
        },
      ],
      entities: [
        {
          name: "My Entity",
          fields: ["id", "user"],
          methods: ["public static void main(Object... args);"],
        },
      ],
      repositories: [
        {
          iName: "First Repository",
          methods: ["test3", "test4"],
        },
      ],
      outputAdapters: [
        {
          name: "JPA Repository",
          implementing: ["First Repository"],
          adapterType: "db",
        },
      ],
    };
  },
};
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
</style>
