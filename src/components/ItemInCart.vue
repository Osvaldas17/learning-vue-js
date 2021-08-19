<template>
  <div class="itemInCart">
    <div class="width-25">
      <img :src="item.image" alt="">
    </div>
    <div class="width-25">
      <h3>{{ item.price }} $</h3>
    </div>
    <div class="width-25">
      <h3>{{ itemCount(item.title) }}</h3>
    </div>
    <div class="width-25">
      <button class="addRemoveBtn" @click="addToCartAction(item)">+</button>
      <button class="addRemoveBtn" @click="removeFromCartAction(item)">-</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ItemInCart",
  props: ['item'],
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    ...mapActions(['addToCartAction', 'removeFromCartAction']),
    itemCount(itemName) {
      let filteredArr = this.cart.filter((e) => e.title === itemName)
      return filteredArr.length
    }
  },
  updated() {
    this.$store.dispatch('filterUniqueItems')
  }
}
</script>

<style scoped>

.itemInCart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px gray;
}
.itemInCart div {
  display: flex;
  justify-content: center;
}

.addRemoveBtn {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: rgb(40, 44, 52);
  width: 50px;
  height: 40px;
  color: white;
  border: none;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.addRemoveBtn:active {
  transform: scale(0.92);
}

.width-25 {
  width: 25%;
}

img {
  width: 100px;
  height: 100px;
}

</style>