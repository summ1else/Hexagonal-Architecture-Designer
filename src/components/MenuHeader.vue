<template>
  <div id="menu">
    <div id="navLinks">
      <span><router-link to="/">Design</router-link></span>
      <span><router-link to="/analysis">Analysis</router-link></span>
      <span>Export</span>
      <span>Dashboard</span>
      <VueMultiselect
        class="multiselect"
        v-model="selectedContainerOption"
        :options="containerSelectorOptions"
        @select="onSelect"
      >
      </VueMultiselect>
    </div>
    <div id="userPanel">
      <a class="link-primary" html="/logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuHeader",
};
</script>
<script setup>
import { useArchStore } from "@/stores/architecture";
const architecture = useArchStore();
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";

const containerSelectorOptions = ref([
  "All",
  "Domain (Application)",
  "Driving Side",
  "Driven Side",
  "Interfaces",
  "Implementations",
]);
const selectedContainerOption = ref("");
const onSelect = function (option) {
  architecture.setDisplayed(option);
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
#menu {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1em;
  margin: 0 10px;
}

#navLinks {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

#navLinks > span {
  margin: 10px;
}

.multiselect {
  margin: 10px;
}

#userPanel {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#userPanel > a {
  margin: 10px;
}
</style>
