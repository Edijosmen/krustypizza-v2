<template>
    <div class="container" >
        <div class="abs-center">
       
        <form @submit.prevent="guardar" enctype="multipart/form-data">
        <div class="form-group">
            <h2>Agregar Productos</h2>
        </div>
        <div class="form-group row">
            <label for="codigo">Codigo</label>
            <input type="text" class="form-control" id="codigo" v-model="Codigo">

        </div>
        <div class="form-group row">
            <label for="exampleInputPassword1">Nombre</label>
            <input type="text" v-model="Nombre" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
             <label for="validationTextarea">Descripcion</label>
            <textarea class="form-control" id="validationTextarea" v-model="descripcion" placeholder="Required example textarea" required></textarea>
        </div>
        <div class="form-group">
            <div class="form-group ">
                <label for="categoria">Categoria</label>
            </div>
                <select v-model="categoria"  >
                    <option disabled value="">Seleccione categoria</option>
                    <option  v-for="categori in cate" :key="categori.id" >{{categori.nombre}}</option>
                </select>
                
        </div>
        <div class="form-group row">
            <label for="exampleInputPassword1">precio</label>
            <input type="text" v-model="precio" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
            <div class="form-group">
                <label for="exampleInputPassword1">Ingredientes</label>
            </div>
            <input type="checkbox" id="jack" value="Jack" v-model="ingredientes">
            <label for="jack">Jack</label>
        </div>
        <div class="form-group row">
            <label for="imagen">Imagen</label>
            <input type="file"  @change="obtenerImg" name="imagen" id="imagen" class="form-control-file">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
       
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'registroProducto',
    data() {
        return {
            Codigo: '',
            Nombre:'',
            descripcion: '',
            precio: '',
            categoria: '',
            ingredientes: [],
            imagen : '',
            cate:[],
        }
    },
    methods: {
        obtenerImg(e){
            let img = e.target.files[0]
            console.log(img)
            this.imagen = img
        },
        guardar(){
            axios.post("http://127.0.0.1:8000/ventas/categorias/",{
                
                codigo:this.Codigo,
                nombre:this.Nombre,
                descripcion: this.descripcion,
                precio:this.precio,
                img_product:this.imagen,
                categoria
            },
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
            )

        },
    },
    mounted(){
    axios.get("http://127.0.0.1:8000/ventas/categorias/")
    .then(response=>{
        console.log(response.data.results)
        this.cate = response.data.results
    }) 
    
    },
    /*
    async created(){
      try {
        await this.$store.dispatch("getCategoria") 
      }catch(error){
        console.error(error)
      }
      
    },
    computed: {
      
      categoria(){
        return this.$store.state.categoria;
      }
    }
    */
}
</script>

<style scoped>
.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>