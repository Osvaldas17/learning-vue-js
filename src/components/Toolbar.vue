<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/shop">Shop</router-link>
    <div class="cartText">
      <router-link to="/cart">Cart</router-link>
      <div class="itemNumber">
        <p>{{cart.length}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Toolbar",
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
  background-color: rgb(40,44,52);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.itemNumber {
  background-color: #42b983;
  color: white;
  width: 20px;
  height: 20px;
  font-size: 15px;
  font-weight: bold;
  padding: 2px;
  border-radius: 50%;
  position: relative;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cartText {
  display: flex;
}


</style>