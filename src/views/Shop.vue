<template>
  <div>
    <div class="shoppingList">
      <ShopItem v-for="(item,index) in products" :key="index" :product="item"/>
    </div>

  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem";
import {mapState} from "vuex";

export default {
  name: "Shop",
  components: {ShopItem},
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style scoped>
.shoppingList {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>