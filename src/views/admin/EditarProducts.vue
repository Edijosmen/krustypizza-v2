<template>
    <div class="container" >
        <div class="abs-center">
       
        <form @submit.prevent="EditarProduct" enctype="multipart/form-data">
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
                    <option  v-for="categori in cate" :key="categori.id" :value="categori.id">{{categori.nombre}}</option>
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
                <select v-model="ingredientes" multiple>
                <option v-for="ingredients in ingred" :key="ingredients.id" :value="ingredients.id">{{ingredients.nombre}}</option>
                </select>
        </div>
        <div class="form-group row">
            <label for="imagen">Imagen</label>
            <input type="file"  @change="obtenerImg" name="imagen" id="imagen" class="form-control-file">
            {{imagen}}
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
         <a href="/admin" class="btn btn-primary ml-3">Cancelar</a>
        </form>
        </div>
       
    </div>

</template>

<script>

import productos from '../../services/admin/Adproducto.js'
import categoria from '../../services/admin/Categoria.js'
import ingredients from '../../services/admin/Ingredients.js'
export default {
    name: 'EditarProducto',
    data() {
        return {
            id: null,
            Codigo: '',
            Nombre:'',
            descripcion: '',
            precio: '',
            categoria: '',
            ingredientes: [],
            imagen : null,
            cate:[],
            ingred: [],
        }
    },
    methods: {
        obtenerImg(e){
            let img = e.target.files[0]
            console.log(img)
            this.imagen = img
        },
        EditarProduct(){
            let formData = new FormData()
            formData.append('codigo',this.Codigo)
            formData.append('nombre',this.Nombre)
            formData.append('descripcion',this.descripcion)
            formData.append('precio',this.precio)
            formData.append('img_product',this.imagen)
            for (var i = 0; i < this.ingredientes.length; i++) {
                    formData.append('ingredientes',this.ingredientes[i])
                }
            formData.append('categoria',this.categoria)
            
          
            productos.update(formData,this.id)
                .then(response=>{
                    //console.log(response.data)
                    this.$router.push("/admin")

                })

        },
    },
    mounted(){
    this.id= this.$route.params.id
    categoria.get()
        .then(response=>{
            this.cate = response.data.results
            }); 
    ingredients.get().
        then(response=>{
            this.ingred=response.data.results
        })
    productos.edit(this.id).then(response=>{
           this.Codigo= response.data.codigo,
           this.Nombre = response.data.nombre,
           this.descripcion = response.data.descripcion,
           this.precio = response.data.precio,
           this.categoria = response.data.categoria,
           this.ingredientes = response.data.ingredientes,
           this.imagen = response.data.img_product
           
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