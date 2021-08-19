<template>
  <div class="shopItemDiv">
    <h2>{{product.title}}</h2>
    <div class="imgWrapper">
      <img :src="product.image" alt="">
    </div>
    <h3>Price: {{product.price}} $</h3>
    <div class="shopButtonDiv">
      <button class="shopButton" @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "ShopItem",
  props: ['product'],
  methods: {
    ...mapMutations(['addToCart'])
  }
}
</script>

<style scoped>

.shopItemDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  border: solid 1px grey;
  margin: 10px;
  padding-bottom: 30px;
}
img {
  width: 300px;
  height: 300px;
}
.shopButton {
  padding: 10px;
  font-size: 20px;
  width: 140px;
  height: 40px;
  color: white;
  border: none;
  background-color: rgb(40,44,52);
  cursor: pointer;
  transition: 0.3s;
}
.shopButton:active {
  transform: scale(0.95);
}
.shopButton:focus::after {
  display: flex;
  width: 300px;
  text-align: center;
  background-color: white;
  color: green;
  top: 10px;
  left: -45px;
  position: relative;
  font-weight: bold;
  font-size: 18px;
  content: 'succesfully added to cart';
}
.shopButtonDiv {
  width: 100%;
}

.imgWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>