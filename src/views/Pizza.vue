<template>
<div>
  
  <!--seccion de domicilio -->
  <section class="lista Pizza domicilio">
    <div class="container domicilio">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-md-6">
          <div class="row">
            <div class="col-sm-12 col-md-6 ">
              <i class="fas fa-bicycle fa-10x bike"></i>
            </div>
            <div class="col-sm-12 col-md-6">
              <div
                class="card"
                style="width: 18rem;"
              >
                <div class="card-header font-weight-bold">
                  Horario de Domicilio
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Domingo a Jueves </li>
                  <li class="list-group-item">11:30 AM a 10:30 PM</li>
                  <li class="list-group-item">Viernes a Sabados</li>
                  <li class="list-group-item">11:0 AM a 11:30 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- contenido de la lista productos
  <section>
    <div class="container">
      <div class="contend">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4"
              v-for="imagen in imagenes" :key="imagen.id"           >
              <!--Aqui va el componente imagen
              <Imagen :imagen="imagen" v-on:productos_seleccionados="listarProductosCarrito"/>
            </div>
        </div>
      </div>
    </div>        
  </section>
  -->
  <div class="container">
    <nav
      class="navbar navbar-light navbar-expand-sm"
      style="background-color: #f4f9fc;"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarTogglerDemo01"
      >
        <div class="navbar-nav mx-auto text-center">
          <a
            class="nav-link active"
            href=""
            tabindex="-1"
            aria-disabled="true"
          >Pizzas</a>
          <a
            class="nav-link"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >Bebidas</a>
          <a
            class="nav-link"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >Postres</a>
        </div>
      </div>
    </nav>
  </div>
  <section>
    <AppProductList />
  </section>
  <Foother />
</div>
 

</template>
   
<script>
import Imagen from '@/components/Imagen.vue'
import Foother from '@/components/Foother.vue'
import Navbaru from '@/components/Navbaru.vue'
import axios from 'axios'

//import ProductoService from "../services/Productos.js";
import AppProductList from "../components/AppProductList.vue";

export default {
  created(){
    //ProductoService.get().then(items => (this.imagenes = items.data.results));

  },
  name: 'Pizza',
  components: {
      Imagen,
      Navbaru,
      Foother,
      AppProductList
  },
  data(){
    return {
      imagenes: [],
      lista_select_product: [],
    }
  },
  methods:{
    listarProductosCarrito: function(productos){
      this.lista_select_product.push(productos)
      //Esto posiblemente se puede hacer con $watch
      window.localStorage.setItem('select_product', JSON.stringify(this.lista_select_product));
      //console.log(this.lista_select_product)
    }
  },
  mounted(){
    //ProductoService.get().then(items => (this.imagenes = items.data.results));
    /*
    axios.get("http://127.0.0.1:8000/ventas/productos/")
    .then(response=>{
        //console.log(response.data)
        this.imagenes = response.data.results

    })*/    
    }
}


</script>



<style scoped>
.contend {
  margin-top: 20px;
  border-top: 5px solid #e5edef;
  padding-top: 20px;
}
.domicilio {
  background-image: url("../assets/img/banner2.jpg");
  padding-top: 20px;
  padding-bottom: 20px;
  background-repeat: no-repeat;
  background-size: cover;
}
.bike {
  color: #f7c700;
}
.card-header {
  background: #dc3545;
  color: white;
}
.bbtn {
  background: #f52f41;
  color: white;
}
</style>