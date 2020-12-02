<template>
    <div class="col-md-9">
                <div  class="pb-1 pt-1" style="text-align: right" >
                     <a href="/create-producto" class="btn btn-success">New</a>
                </div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">precio</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="compradm in compra" :key="compradm.id">
                            <td>dfdf</td>
                            <td>{{compradm.fecha_hora}}</td>
                            <td>{{compradm.nro_factura}}</td>
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
    name:'CompraAdmin',
    data() {
        return {
            token: ''
        }
    },
    
    computed: {
      compra(){
        return this.$store.state.compradmi;
      }
    },
    mounted(){
        this.token= localStorage.getItem("token"),
        axios.get("http://127.0.0.1:8000/compras/compraproduct/",{
        headers: {
          'Content-Type':'application/json',
          Authorization: "JWT" + this.token
        }
        }
        ).then((response)=>{
                    console.log("amdin")
                    console.log(response.data)
                   
                    //this.imagenes = response.data.results
                   
                }).catch(error => {
    console.log(error)
}); 
    }
}
</script>