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
    outputPorts: useStorage("outputPorts", [
      {
        iName: "First OutputPort",
        methods: ["test3", "test4"],
      },
    ]),
    outputAdapters: useStorage("outputAdapters", [
      {
        name: "JPA OutputPort",
        calling: ["First OutputPort"],
        adapterType: "db",
      },
    ]),
    displayed: useStorage("displayed", [
      "outputAdapters",
      "outputPorts",
      "services",
      "entities",
      "inputPorts",
      "inputAdapters",
    ]),
  }),
  getters: {
    getDisplayed(state) {
      return state.displayed;
    },
    getAllInputPortNames(state) {
      return state.inputPorts.map((inputPort) => inputPort.iName);
    },
    getAllOutputPortNames(state) {
      return state.outputPorts.map((outputPort) => outputPort.iName);
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
    getCalledOutputPorts(state) {
      if (state.services.length === 0) {
        return [];
      }
      let calledOutputPorts = this.getAllOutputPortNames.filter(
        (outputPort) =>
          state.services.filter((service) =>
            service.calling.includes(outputPort)
          ).length > 0
      );
      return calledOutputPorts;
    },
    getUncalledOutputPorts() {
      let uncalledOutputPorts = this.getAllOutputPortNames.filter(
        (name) => !this.getCalledOutputPorts.includes(name)
      );
      return uncalledOutputPorts;
    },
    getColor() {
      switch (this.inputDisplay) {
        default:
          return "white";
      }
    },
  },
  actions: {
    setDisplayed(type) {
      console.log(type);
      const all = [
        "outputAdapters",
        "outputPorts",
        "services",
        "entities",
        "inputPorts",
        "inputAdapters",
      ];
      const domain = ["outputPorts", "services", "entities", "inputPorts"];
      const driving = ["inputAdapters", "inputPorts", "services", "entities"];
      const driven = ["outputAdapters", "outputPorts", "services", "entities"];
      const interfaces = ["outputPorts", "inputPorts"];
      const implementations = ["outputAdapters", "inputAdapters", "services"];
      switch (type) {
        case "All":
          this.displayed.splice(0, this.displayed.length, ...all);
          break;
        case "Domain (Application)":
          this.displayed.splice(0, this.displayed.length, ...domain);
          break;
        case "Driving Side":
          this.displayed.splice(0, this.displayed.length, ...driving);
          break;
        case "Driven Side":
          this.displayed.splice(0, this.displayed.length, ...driven);
          break;
        case "Interfaces":
          this.displayed.splice(0, this.displayed.length, ...interfaces);
          break;
        case "Implementations":
          this.displayed.splice(0, this.displayed.length, ...implementations);
          break;
      }
    },
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
    addOutputPort({ pack, iName, methods }) {
      this.outputPorts.push({ pack, iName, methods });
    },
    addOutputAdapter({ pack, name, calling, adapterType }) {
      this.outputAdapters.push({
        pack,
        name,
        calling,
        adapterType,
      });
    },
    addService({ pack, name, implementing, calling }) {
      this.services.push({ pack, name, implementing, calling });
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
    removeOutputPort(idx) {
      this.outputPorts.splice(idx, 1);
    },
    removeOutputAdapter(idx) {
      this.outputAdapters.splice(idx, 1);
    },
    getInputPortByName(name) {
      return this.inputPorts.filter((inputPort) => inputPort.iName === name)[0];
    },
    getOutputPortByName(name) {
      return this.outputPorts.filter(
        (outputPort) => outputPort.iName === name
      )[0];
    },
    setInputDisplay(input) {
      this.inputDisplay = input;
    },
  },
});
