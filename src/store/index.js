import { createStore } from 'vuex'
// import axios from "axios";

export default createStore({
  state: {
    products: [
      {
        image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
        title: "green chair",
        price: 35.38
      },
      {
        image: "https://searsmorton.com.au/wp-content/uploads/2018/03/img-nordic-60-standard-white-on-natural.jpg",
        title: "simple chair",
        price: 19.99
      },
      {
        image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
        title: "fotelis chair",
        price: 55
      },
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
        title: "Boss chair",
        price: 128
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
        title: "king chair",
        price: 88.25
      },
    ],
    cart: [],
    uniqueItemsInCart: [],
    totalPrice: 0,
  },
  mutations: {
    addToCart(state,payload) {
      state.cart.push(payload)
    },
    removeFromCart(state,payload) {
      let index = state.cart.findIndex(i => i.title === payload.title);
      state.cart.splice(index,1)
    },
    setUniqueItems(state,payload) {
      state.uniqueItemsInCart = payload
    },
    setTotal(state,payload) {
      state.totalPrice = payload
    }
  },
  actions: {
    addToCartAction({commit,dispatch},payload) {
      commit('addToCart',payload)
      dispatch('setTotalPrice')
    },
    removeFromCartAction({commit,dispatch},payload) {
      commit('removeFromCart',payload)
      dispatch('setTotalPrice')
    },
    filterUniqueItems({state,commit}) {
      let filtered = state.cart.filter((item, index) => state.cart.indexOf(item) === index)
      commit('setUniqueItems',filtered)
    },
    setTotalPrice({state,commit}) {
      let total = 0
      state.cart.forEach((e) => total += e.price)
      commit('setTotal',total.toFixed(2))
      console.log('totalPriceStore',state.totalPrice)
    }
  },
  modules: {
  }
})
