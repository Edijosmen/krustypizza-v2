<template>
    <div class="container">
        <div class="abs-center">
        <form @submit.prevent='saveEditorproveedor'>
            <div class="form-group row">
                <h2>Editar Proveedor</h2>
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
            <button type="submit" class="btn btn-primary">Submit</button>
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
            id: null,
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
        },
        saveEditorproveedor(){
            axios.put("http://127.0.0.1:8000/compras/proveedores/"+this.id,{
                nombre: this.nombre,
                telefono: this.cell,
                correo: this.email,
                direccion: this.direcc
            }).then(response=>{
                this.$router.push("/admin")
            })
        }
    },
    mounted(){
        this.id= this.$route.params.id
        console.log(this.$route)
        axios.get("http://127.0.0.1:8000/compras/proveedores/"+this.id
        ).then(response=>{
            console.log(response)
            this.nombre = response.data.nombre,
            this.cell = response.data.telefono,
            this.email = response.data.correo,
            this.direcc = response.data.direccion
        })
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