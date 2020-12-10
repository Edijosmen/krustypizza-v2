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
          <!--If auth is false : mostramos login: mostramos go to usuario
                tambien cambian las rutas ...
            -->
          <router-link
            to="/"
            class=" a-menu font-weight-bold"
          >{{user_state}} <i class="fas fa-user"></i> | </router-link>
          <router-link to="/list">Go to carrito<i class="fas fa-shopping-cart carico"></i> | </router-link>
          <a href="/login" v-if="this.$store.getters.getLoginUserInfo" @click="logout">logout <i class="fa fa-sign-out" aria-hidden="true"></i></a>

        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import { removeItem } from '@/config/utils'
//import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
 name:'signup_header',
   methods: {
    logout () {
      removeItem('user')
      this.$router.push('/login')
    }
  },
  computed: {
    user_state(){
      if(this.$store.getters.getLoginUserInfo){
        if(this.$store.getters.getLoginUserInfo.loginType == 'local'){
          return this.$store.getters.getLoginUserInfo.local.nombre
        } 
        if(this.$store.getters.getLoginUserInfo.loginType == 'google'){
          return this.$store.getters.getLoginUserInfo.google.xt.Ad
        }        
      }else{
        return "Go To Login"
      }
    }
  }
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

.logovv {
  background: #f7c700;
}
.bgamar {
  background: #f7c700;
  color: white;
}

/*  .print{
        background-image: url("../assets/img/formulario.jpg");
    }
     .facturacion{
        margin-top: 150px;
       
    }
*/
.logo {
  width: 100px;
}
</style>