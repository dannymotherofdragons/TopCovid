<template>
  <div id="app">
    <img src="./assets/covid.jpeg" />
    <CovidData country="Portugal"/>
  </div>
</template>

<script>
import CovidData from "./components/CovidData.vue";

export default {
  name: "App",
  components: {
    CovidData
  }
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
}
</style>
