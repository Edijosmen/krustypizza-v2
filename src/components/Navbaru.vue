<template>
  <nav class="navbar navbar-inverse">
    <!--Vamos a empezar a modificar el header para que funcione como una SPA-->

    <div class="container-fluid">
      <div class="navbar-header">

        <router-link
          to="/inicio"
          class="navbar-brand a-menu font-weight-bold"
        >
          <div class="container logovv">
            <div class="logo ">
              <img
                class="img-fluid img-thumbnail"
                src="../assets/img/krostyanuncio.jpg"
              >
            </div>
          </div>
        </router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link
            to="/"
            class=" a-menu font-weight-bold"
          >Go to Usuario <i class="fas fa-user"></i> | </router-link>
          <router-link to="/list">Go to carrito<i class="fas fa-shopping-cart carico"></i></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
 
};
</script>

<style scoped>


nav {
  background: #f7c700;
}
.a-menu {
  color: #25251a;
}
.carico {
  color: #25251a;
}

.logovv{
        background:#f7c700;
    }
    .bgamar{
         background:#f7c700;
        color:white;
  }
    
  /*  .print{
        background-image: url("../assets/img/formulario.jpg");
    }
     .facturacion{
        margin-top: 150px;
       
    }
*/
  .logo{
      width: 100px;
  }
</style>