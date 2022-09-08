import { defineStore } from "pinia";

export const useArchStore = defineStore({
  id: "architecture",
  state: () => ({
    shouldShowAddInput: false,
    inputAdapters: [
      {
        name: "First Controller",
        type: "controller",
        calling: ["First Use Case"],
      },
      {
        name: "Second Controller",
        type: "controller",
        calling: ["First Use Case"],
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
  }),
  getters: {
    getAllUseCaseNames(state) {
      return state.useCases.map((inputPort) => inputPort.iName);
    },
    getAllRepositoryNamee(state) {
      return state.repositories.map((repository) => repository.iName);
    },
    getAllOutputAdapterName(state) {
      return state.outputAdapters.map((outputAdapter) => outputAdapter.name);
    },
    getAllInputAdapterNames(state) {
      return state.inputAdapters.map((inputAdapter) => inputAdapter.name);
    },
    getAllEntityNames(state) {
      return state.entities.map((entity) => entity.name);
    },
    getAllServiceNames(state) {
      return state.services.map((service) => service.name);
    },
    getImplementedUseCases(state) {
      if (state.services.length === 0) {
        return this.getAllUseCaseNames;
      }
      return this.getAllUseCaseNames.filter(
        (useCase) =>
          state.services.filter((service) =>
            service.implementing.includes(useCase)
          ).length > 0
      );
    },
    getUnimplementedUseCases() {
      return this.getAllUseCaseNames.filter(
        (name) => !this.getImplementedUseCases.includes(name)
      );
    },
    getCalledUseCases(state) {
      console.log(state.inputAdapters.length);
      if (state.inputAdapters.length === 0) {
        console.log("called", []);
        return [];
      }
      let calledUseCases = this.getAllUseCaseNames.filter(
        (useCase) =>
          state.inputAdapters.filter((inputAdapter) =>
            inputAdapter.calling.includes(useCase)
          ).length > 0
      );
      console.log("called", calledUseCases);
      return calledUseCases;
    },
    getUncalledUseCases() {
      let uncalledUseCases = this.getAllUseCaseNames.filter(
        (name) => !this.getCalledUseCases.includes(name)
      );
      console.log("uncalled", uncalledUseCases);
      return uncalledUseCases;
    },
  },
  actions: {
    addInputAdapter({ name, type, calling }) {
      this.inputAdapters.push({
        name,
        type,
        calling,
      });
    },
    removeInputAdapter(idx) {
      this.inputAdapters.splice(idx, 1);
    },
    removeUseCase(idx) {
      this.useCases.splice(idx, 1);
    },
    removeService(idx) {
      this.services.splice(idx, 1);
    },
    removeEntity(idx) {
      this.entities.splice(idx, 1);
    },
    showHideAddInput() {
      this.shouldShowAddInput = !this.shouldShowAddInput;
    },
  },
});
