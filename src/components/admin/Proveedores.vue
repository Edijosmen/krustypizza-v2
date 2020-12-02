<template>
     <div class="col-md-9">
                <div class="pb-1 pt-1" style="text-align: right">
                     <a href="/create-proveedor" class="btn btn-dark" >New</a>
                </div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Aciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="proveedor in provedores" :key="proveedor.id">
                            <td>{{proveedor.nombre}}</td>
                            <td>{{proveedor.telefono}}</td>
                            <td>{{proveedor.correo}}</td>
                            <td>{{proveedor.direccion}}</td>
                            <td>
                                <b-button-group>
                                    <a :href="`/proveedor/${proveedor.id}/editar`" class="btn btn-info">Editar</a>
                                    <a class="ml-2 btn btn-danger" @click="Eliminar(proveedor.id)">Borrar</a>
                                </b-button-group>
                            </td>
                           
                        </tr>
                    </tbody>
                </table>
                <div class="row ">
                    <div class="col-md-12 pagine">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Proveedores",
    async created(){
      try {
        await this.$store.dispatch("getProveedor") 
      }catch(error){
        console.error(error)
      }
      
    },
    computed: {
      provedores(){
        return this.$store.state.adm.proveedores;
      }
    },
    methods:{
        Eliminar(id){
            axios.delete("http://127.0.0.1:8000/compras/proveedores/"+id)
            .then( ()=> {
                 this.$store.dispatch("getProveedor")
            })
        },
    },
  
}
</script>