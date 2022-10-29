<template>
  <div id="sidebar">
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
          <span class="h4">Uncalled InputPorts</span>
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
          <span class="h4">Unimplemented InputPorts</span>
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
          <a class="btn btn-primary btn-sm" href="#">InputAdapter</a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a class="btn btn-primary btn-sm" href="#">InputPort</a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a class="btn btn-primary btn-sm" href="#">Service</a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a class="btn btn-primary btn-sm" href="#">Entity</a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a class="btn btn-primary btn-sm" href="#">OutputPort</a>
        </div>
      </div>
      <div class="sidebar-button">
        <div class="sidebar-link">
          <a class="btn btn-primary btn-sm" href="#">OutputAdapter</a>
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
#sidebar {
  display: flex;
  flex-direction: row;
  height: 100%;
}

#sidebar-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 10;
}

.sidebar-button {
  display: table;
}

.sidebar-link {
  padding: 50% 0;
  height: 0;
}

.sidebar-link > a {
  display: block;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
  margin-top: -50%;
  white-space: nowrap;
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
  border-top: 2px solid black;
  height: 25%;
  overflow-y: auto;
}
</style>
