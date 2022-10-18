import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useArchStore = defineStore({
  id: "architecture",
  state: () => ({
    inputDisplay: useStorage("inputDisplay", ""),
    inputAdapters: useStorage("inputAdapters", [
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
    ]),
    inputPorts: useStorage("inputPorts", [
      {
        iName: "First Use Case",
        methods: ["method one", "method two"],
      },
    ]),
    services: useStorage("services", [
      {
        name: "First Service",
        implementing: ["First Use Case"],
      },
    ]),
    entities: useStorage("entities", [
      {
        name: "My Entity",
        fields: ["id", "user"],
        methods: ["public static void main(Object... args);"],
      },
    ]),
    repositories: useStorage("repositories", [
      {
        iName: "First Repository",
        methods: ["test3", "test4"],
      },
    ]),
    outputAdapters: useStorage("outputAdapters", [
      {
        name: "JPA Repository",
        calling: ["First Repository"],
        adapterType: "db",
      },
    ]),
  }),
  getters: {
    getAllInputPortNames(state) {
      return state.inputPorts.map((inputPort) => inputPort.iName);
    },
    getAllRepositoryNames(state) {
      return state.repositories.map((repository) => repository.iName);
    },
    getAllOutputAdapterNames(state) {
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
    getImplementedInputPorts(state) {
      if (state.services.length === 0) {
        return [];
      }
      return this.getAllInputPortNames.filter(
        (inputPort) =>
          state.services.filter((service) =>
            service.implementing.includes(inputPort)
          ).length > 0
      );
    },
    getUnimplementedInputPorts() {
      return this.getAllInputPortNames.filter(
        (name) => !this.getImplementedInputPorts.includes(name)
      );
    },
    getCalledInputPorts(state) {
      console.log(state.inputAdapters.length);
      if (state.inputAdapters.length === 0) {
        console.log("called", []);
        return [];
      }
      let calledInputPorts = this.getAllInputPortNames.filter(
        (inputPort) =>
          state.inputAdapters.filter((inputAdapter) =>
            inputAdapter.calling.includes(inputPort)
          ).length > 0
      );
      console.log("called", calledInputPorts);
      return calledInputPorts;
    },
    getUncalledInputPorts() {
      let uncalledInputPorts = this.getAllInputPortNames.filter(
        (name) => !this.getCalledInputPorts.includes(name)
      );
      console.log("uncalled", uncalledInputPorts);
      return uncalledInputPorts;
    },
    getColor() {
      switch (this.inputDisplay) {
        case "addInputAdapter":
          return "pink";
        case "addInputPort":
          return "cornflowerblue";
        case "addService":
          return "tan";
        case "addEntity":
          return "lightgreen";
        case "addRepository":
          return "lightsalmon";
        case "addOutputAdapter":
          return "lightseagreen";
        default:
          return "white";
      }
    },
  },
  actions: {
    addInputAdapter({ pack, name, type, calling }) {
      this.inputAdapters.push({
        pack,
        name,
        type,
        calling,
      });
    },
    addInputPort({ pack, iName, methods }) {
      this.inputPorts.push({
        pack,
        iName,
        methods,
      });
    },
    addEntity({ pack, name, fields, methods }) {
      this.entities.push({
        pack,
        name,
        fields,
        methods,
      });
    },
    addRepository({ iName, methods }) {
      this.repositories.push({ iName, methods });
    },
    addOutputAdapter({ name, calling, adapterType }) {
      this.outputAdapters.push({
        name,
        calling,
        adapterType,
      });
    },
    addService({ pack, name, implementing }) {
      this.services.push({ pack, name, implementing });
    },
    removeInputAdapter(idx) {
      this.inputAdapters.splice(idx, 1);
    },
    removeInputPort(idx) {
      this.inputPorts.splice(idx, 1);
    },
    removeService(idx) {
      this.services.splice(idx, 1);
    },
    removeEntity(idx) {
      this.entities.splice(idx, 1);
    },
    removeRepository(idx) {
      this.repositories.splice(idx, 1);
    },
    removeOutputAdapter(idx) {
      this.outputAdapters.splice(idx, 1);
    },
    getInputPortByName(name) {
      return this.inputPorts.filter((inputPort) => inputPort.iName === name)[0];
    },
    setInputDisplay(input) {
      this.inputDisplay = input;
    },
  },
});
