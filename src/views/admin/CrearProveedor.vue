<template>
    <div class="container">
        <div class="abs-center">
        <form @submit.prevent='saveproveedor'>
            <div class="form-group row">
                <h2>Nuevo Proveedor</h2>
            </div>
            <div class="form-group row ">
                <label for="nombre">Nombre</label>
                <input type="text" v-model="nombre" class="form-control"  name="nombre" id="nombre">
            </div>
            <div class="form-group row">
                <label for="telefono">Telefono</label>
                <input type="text" v-model="cell" class="form-control"  name="telefono" id="telefono">
            </div>
            <div class="form-group row">
                <label for="email">Correo</label>
               <input type="email" v-model="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com">
            </div>
            <div class="form-group row">
                <label for="direccion">Dirección</label>
                <input type="text" v-model="direcc" class="form-control"  name="direccion" id="direccion">
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
            <a href="/admin/" class="btn ml-2 btn-primary">Volver</a>
        </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "CrearProveedores",
    data(){
        return {
            nombre:'',
            cell: '',
            email: '',
            direcc: '',
        }
    },
    methods:{
        saveproveedor(){
            axios.post("http://127.0.0.1:8000/compras/proveedores/",{
                nombre: this.nombre,
                telefono: this.cell,
                correo: this.email,
                direccion: this.direcc
            }).then(response=>{
                this.$router.push("/admin")
            })
        }
    }
}
</script>
<style scoped>
.abs-center {
  display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
  justify-content: center;
}
</style>