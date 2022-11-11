<template>
  <MenuHeader id="header" />
  <div id="belowFold">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MenuHeaderVue from "./components/MenuHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    MenuHeader: MenuHeaderVue,
  },
});
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: antiquewhite;
}

#belowFold {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

#sidebar {
  display: flex;
  flex-direction: row;
  height: 100%;
  font-size: 1em;
}

#containers {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
}

.typeContainer > div {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  border: 3px solid black;
}

.typeContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 20%;
  margin: 10px 10px;
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
