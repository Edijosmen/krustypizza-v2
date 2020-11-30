<template>
  <div>
    <h2>Carrito</h2>
    <hr />
    <ul>
      <li v-for="(item, $index) in productsOnCart" :key="item.id">
        {{ item.title }} | ({{ item.quantity }})
        <button @click="removeItem($index)">X</button>
      </li>
    </ul>
    <button>Checkout</button><!--<button v-if="cartItems.length" @click="checkout">Checkout</button>-->
    <hr />
    <h4>Total {{ cartTotal || 0 }}</h4>
    <div><!--<div v-if="$store.state.checkoutError">-->
      <p>Error procesando los productos...</p>
    </div>
  </div>
</template>
<script>
import { currency } from "../utils/currency.js";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "AppShoppingCart",
  data(){
    return{
      carrito: [],
      productsTmpOn: [],
    }
  },  
  mounted(){
      if (localStorage.getItem('carrito')) {
      try {
        this.carrito = JSON.parse(window.localStorage.getItem('carrito'));
        console.log(carrito);
        this.$store.dispatch("setCartTmp", this.carrito);
      } catch(e) {
        console.log("error en carrito");

        localStorage.removeItem('carrito');
      }
    }
    if (localStorage.getItem('productosTmp')) {
      try {
        this.productsTmpOn = JSON.parse(window.localStorage.getItem('productosTmp'));
        console.log(productsTmpOn);
        this.$store.dispatch("setProductsTmp", this.productsTmpOn);
      } catch(e) {
        console.log("error en productsTMP");
        localStorage.removeItem('productosTmp');
      }
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeProductFromCart", index);
    },
    /*checkout() {
      this.$store.dispatch("checkout");
    }*/
  },
  computed: {
      ...mapGetters(["productsOnCart"]),

    cartTotal() {
      return currency(this.$store.getters.cartTotal, " €");
    }
  }
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
