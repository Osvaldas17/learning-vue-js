<template>
  <div>
      <Toolbar />
  </div>
  <router-view/>
</template>


<script>
import Toolbar from "@/components/Toolbar";
export default {
  name: "App",
  components: {
    Toolbar
  }
}


</script>

<style>

* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
