<template>
<div>
  <div class="about">
    <section class="login">
      <section class="container-fluid bg">
        <section class="row justify-content-center pt-5 pb-5">
          <section class="col col-sm-6 col-md-6 col-lg-4">
            <form class="form-container" @submit.prevent="register">
              <div class="form-group text-center">
                <label>Crear cuenta</label>
              </div>
              <div class="form-group text-center">
                <label
                  >Accede a tus pedidos favoritos, guarda tus direcciones y pide
                  de forma fácil y rápida.</label
                >
              </div>
              <div class="form-group">
                <label for="nombreuser">Nombre Usuario</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombreuser"
                  aria-describedby="emailHelp"
                  v-model="user.userName"
                />
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                />
              </div>
                <div class="form-group">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  v-model="user.nombre"
                />
              </div>
              <div class="form-group">
                <label for="apellido">Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  id="apellido"
                  v-model="user.apellido"
                />
              </div>
              <button class="btn btn-primary btn-block" type="submit">Registrarse</button>
              <br>
             <div class="form">
                <label for="registra">¿Ya tienes cuenta? </label>
                <a href="#" @click.prevent="goLoginNow"> Inicia sesion ahora</a>

              </div>

                <!--Ventana modal -->
       <div id="app">
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Registro exitoso</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Ahora puedes iniciar sesion y disfrutar de nuestros servicios.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="goLogin">Cerrar</button>
                <!--<button type="button" class="btn btn-primary">Save changes</button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <!--<button @click="showModal = true">Click</button>-->
</div>
<!--End ventana modal -->

            </form>
          </section>
        </section>
      </section>
    </section>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import SocialLogin from '@/components/SocialLogin'
import ProductoService from "../services/Productos.js";

import AuthService from '@/services/Auth.service.js'
export default {
  name: 'Login',
  components: {
    SocialLogin
  },
  data(){
    return {
      showModal: false,

      user:{
        userName: "",
        password: "",
        nombre: "",
        apellido: "",
        token: ""
      }, 

    }
  },
  methods:{
    //Iniciamos el proceso de consumo del api rest de django
    register(){
      AuthService.register(this.user)
      .then((response)=>{
         this.showModal = true

      }).catch(error => {
          alert("Error en el registro: " + error)
          console.log('error', error)
        })
    },
    goLogin(){
        this.showModal = true;
        this.$router.push('/login')
    },
    goLoginNow(){
        this.$router.push("/login")
    }
  }
}
</script>



<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.login {
  background-image: url("../assets/img/fondo2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.form-container {
  background: #f9e7d6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #000;
}
.bt {
  background: #dd4b39;
  color: white;
}
#nav{
        background:#F7C700;
    }

/* adminstrador */

.menu-section {
  background: #324a5b;
}
.color-principal {
  background: #324a5b;
  color: white;
}
.contenido {
  background: #f1f8f9;
}
.bgnav {
  background: #324a5b;
}
.piza {
  color: white;
}
.adm {
  color: white;
}
.adm:hover {
  color: white;
}

.menu {
  padding-top: 10px;
}
.pagine {
  border: 1px solid black;
}
</style>