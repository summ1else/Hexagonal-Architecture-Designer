import { defineStore } from "pinia";

export const useArchStore = defineStore({
  id: "architecture",
  state: () => ({
    shouldShowAddInput: false,
    inputAdapters: [
      {
        name: "First Controller",
        type: "controller",
        implementing: ["First Use Case"]
      },
      {
        name: "Second Controller",
        type: "controller",
        implementing: ["First Use Case"]
      }
    ],
    useCases: [
      {
        iName: "First Use Case",
        methods: ["method one", "method two"]
      }
    ],
    services: [
      {
        name: "First Service",
        implementing: ["First Use Case"]
      }
    ],
    entities: [
      {
        name: "My Entity",
        fields: ["id", "user"],
        methods: ["public static void main(Object... args);"]
      }
    ],
    repositories: [
      {
        iName: "First Repository",
        methods: ["test3", "test4"]
      }
    ],
    outputAdapters: [
      {
        name: "JPA Repository",
        implementing: ["First Repository"],
        adapterType: "db"
      }
    ]
  }),
  getters: {
    getAllUseCaseNames() {
      return this.useCases.map((inputPort) => inputPort.name);
    },
    getAllRepositoryNames() {
      return this.repositories.map((repository) => repository.iName);
    },
    getAllOutputAdapterNames() {
      return this.outputAdapters.map((outputAdapter) => outputAdapter.name);
    },
    getAllInputAdapterNames() {
      return this.inputAdapters.map((inputAdapter) => inputAdapter.name);
    },
    getAllEntityNames() {
      return this.entities.map((entity) => entity.name);
    },
    getAllServiceNames() {
      return this.services.map((service) => service.name);
    },
  },
  actions: {
    addInputAdapter({
      name,
      type,
      implementing,
    }) {
      this.inputAdapters.push({
        name,
        type,
        implementing,
      });
    },
    removeInputAdapter(inputAdapter) {
      this.inputAdapters.splice(this.inputAdapters.indexOf(inputAdapter), 1);
    },
    showHideAddInput() {
      this.shouldShowAddInput = !this.shouldShowAddInput;
    }
  }
});
