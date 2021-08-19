<template>
  <div>
    <h1 class="borderBottom">Cart</h1>
    <div class="borderBottom cartTopBar">
      <div class="width-25">
        <h2>Image</h2>
      </div>
      <div class="width-25">
        <h2>Price</h2>
      </div>
      <div class="width-25">
        <h2>Amount</h2>
      </div>
      <div class="width-25">
        <h2>Add/Remove</h2>
      </div>
    </div>
    <div class="itemsInCart" v-if="uniqueItemsInCart.length > 0">
      <ItemInCart v-for="(item,index) in uniqueItemsInCart" :key="index" :item="item"/>
      <div>
        <h1>Total Price: {{totalPrice}} $</h1>
      </div>
    </div>
    <div v-if="uniqueItemsInCart.length <= 0">
      <h3>Cart is empty</h3>
    </div>
  </div>
</template>
<script>
import ItemInCart from "@/components/ItemInCart";
import {mapState} from "vuex";

export default {
  name: 'Cart',
  components: {
    ItemInCart
  },
  computed: {
    ...mapState(['cart','uniqueItemsInCart','totalPrice']),
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('filterUniqueItems')
    this.$store.dispatch('setTotalPrice')
  },
}
</script>

<style>

.itemsInCart {
  display: flex;
  flex-direction: column;
}

.cartTopBar {
  display: flex;
  justify-content: space-around;
}
.cartTopBar div {
  display: flex;
  justify-content: center;
}
.width-25 {
  width: 25px;
}

.borderBottom {
  border-bottom: solid 2px gray;
}

</style>

