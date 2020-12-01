<template>
  <div class="container">
    <div class="contend">
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4"
          @click="selectProduct(product)"
          v-for="product in productsOnStock"
          :key="product.id"
        >
          <div
            class="card"
            style="width: 18rem;"
          >
            <img 
               
              :src="product.img_product"
              class="card-img-top"
              alt="..."
              width="150" height="150"
            >
            <div class="card-body">
              <h5 class="card-title">{{product.nombre}}</h5>
              <p class="card-text">{{product.descripcion}}</p>
              <p class="card-text">${{product.precio}}</p>
              <button class="btn btn-primary" @click="addToCart(product)">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "AppProductList",
  async created() {
    try {
      await this.$store.dispatch("getProducts");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    ...mapActions({
      addToCart: "addProductToCart"
    }),
    ...mapMutations({
      selectProduct: "setSelectedProduct"
    })
  },
  // methods: {
  //   addToCart(product) {
  //     this.$store.dispatch("addProductToCart", product);
  //   },
  //   selectProduct(product) {
  //     this.$store.commit("setSelectedProduct", product);
  //   }
  // },
  // computed: {
  //   products() {
  //     // return this.$store.state.products;
  //     return this.$store.getters.productsOnStock;
  //   }
  // }
  computed: {
    ...mapState(["selectedProduct"]),
    ...mapGetters(["productsOnStock"]),
    testing() {
      return null;
    }
  }
};
</script>

