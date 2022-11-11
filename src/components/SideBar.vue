<template>
  <div :style="{ backgroundColor: architecture.getColor }">
    <div id="sidebar-main">
      <div class="editor">
        <AddInputAdapter
          v-show="architecture.inputDisplay === 'addInputAdapter'"
          :input-adapter-names="architecture.getAllInputPortNames"
          :add-input-adapter="architecture.addInputAdapter"
        />
        <AddInputPort
          v-show="architecture.inputDisplay === 'addInputPort'"
          :add-input-port="architecture.addInputPort"
        />
        <AddService
          v-show="architecture.inputDisplay === 'addService'"
          :add-service="architecture.addService"
          :input-port-names="architecture.getAllInputPortNames"
        />
        <AddEntity
          v-show="architecture.inputDisplay === 'addEntity'"
          :add-entity="architecture.addEntity"
        />
        <AddOutputPort
          v-show="architecture.inputDisplay === 'addOutputPort'"
          :add-output-port="architecture.addOutputPort"
        />
        <AddOutputAdapter
          v-show="architecture.inputDisplay === 'addOutputAdapter'"
          :add-output-adapter="architecture.addOutputAdapter"
          :output-port-names="architecture.getAllOutputPortNames"
        />
      </div>
      <div id="editor-details">
        <div
          v-show="
            architecture.inputDisplay === 'addInputAdapter' &&
            architecture.getUncalledInputPorts.length !== 0
          "
        >
          <span>Uncalled InputPorts</span>
          <ul>
            <li
              v-for="inputPort in architecture.getUncalledInputPorts"
              :key="inputPort"
            >
              {{ inputPort }}
            </li>
          </ul>
        </div>
        <div
          v-show="
            architecture.inputDisplay === 'addService' &&
            architecture.getUnimplementedInputPorts.length === 0
          "
        >
          <span>Unimplemented InputPorts</span>
          <ul>
            <li
              v-for="inputPort in architecture.getUnimplementedInputPorts"
              :key="inputPort"
            >
              {{ inputPort }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="sidebar-buttons">
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a
            class="btn btn-primary btn-sm"
            @click="architecture.setInputDisplay('addInputAdapter')"
            >InputAdapter <font-awesome-icon icon="fa-solid fa-arrow-down"
          /></a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a
            class="btn btn-primary btn-sm"
            @click="architecture.setInputDisplay('addInputPort')"
            >InputPort
            <font-awesome-icon icon="fa-solid fa-arrows-down-to-line" />
          </a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a
            class="btn btn-primary btn-sm"
            @click="architecture.setInputDisplay('addService')"
            >Service
            <font-awesome-icon icon="fa-solid fa-arrows-to-circle" />
          </a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a
            class="btn btn-primary btn-sm"
            @click="architecture.setInputDisplay('addEntity')"
            >Entity
            <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
          </a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a
            class="btn btn-primary btn-sm"
            @click="architecture.setInputDisplay('addOutputPort')"
            >OutputPort
            <font-awesome-icon icon="fa-solid fa-arrows-up-to-line" />
          </a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a
            class="btn btn-primary btn-sm"
            @click="architecture.setInputDisplay('addOutputAdapter')"
            >OutputAdapter
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useArchStore } from "@/stores/architecture";
import AddInputAdapterVue from "@/components/AddInputAdapter.vue";
import AddInputPortVue from "@/components/AddInputPort.vue";
import AddServiceVue from "@/components/AddService.vue";
import AddEntityVue from "@/components/AddEntity.vue";
import AddOutputPortVue from "@/components/AddOutputPort.vue";
import AddOutputAdapterVue from "@/components/AddOutputAdapter.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    AddOutputAdapter: AddOutputAdapterVue,
    AddOutputPort: AddOutputPortVue,
    AddInputAdapter: AddInputAdapterVue,
    AddInputPort: AddInputPortVue,
    AddService: AddServiceVue,
    AddEntity: AddEntityVue,
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

<style scoped>
svg {
  transform: rotate(180deg);
  font-size: 1.2em;
}

#sidebar-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 10;
}

#sidebar-buttons {
  background-color: antiquewhite;
}

.sidebar-button {
  width: 50px;
  //display: none;
}

.sidebar-link {
  position: relative;
  padding: 2px;
  margin: 2px;
  width: 0;
}

.sidebar-link > a {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
  display: inline-block;
  overflow: visible;
}

.typeContainer > div {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
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

button {
  width: 100%;
}

input {
  width: 100%;
}

#editor-details {
  margin: 10px;
  padding-top: 10px;
  border-top: 3px solid black;
  height: 25%;
  overflow-y: auto;
}
</style>
