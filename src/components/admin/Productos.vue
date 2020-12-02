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
                        <tr v-for="producto in productos" :key="producto.id">
                            <td>{{producto.codigo}}</td>
                            <td>{{producto.nombre}}</td>
                            <td>{{producto.descripcion}}</td>
                            <td>{{producto.precio}}</td>
                            <td>{{producto.categoria}}</td>
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
export default {
    name: "Productos",
    async created(){
      try {
        await this.$store.dispatch("getProducto") 
      }catch(error){
        console.error(error)
      }
      
    },
    computed: {
      productos(){
        return this.$store.state.adm.listproducts;
      }
    }
}

</script>
