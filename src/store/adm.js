import productos from '../services/Productos.js'
import proveedor from '../services/admin/Proveedor.js'
export default {
    state: {
        listproducts: [],
        proveedores:[],
      },
    mutations: {
        setProductos(state, products){
            state.listproducts= products
        },
        // setProductCart(state,productsCart){
        //     state.productCart.push(productsCart) 
        // },
       /* setCategoria(state,categoria){
            state.categoria=categoria
        }
        */
       setProveedor(state,proveedor){
            state.proveedores=proveedor
        },

    },
    actions: {
        getProducto({commit}){
            return new Promise((resolve) =>{
                productos.get().then(response=>{
                    console.log(response.data)
                    commit('setProductos',response.data.results)
                    //this.imagenes = response.data.results
                    resolve()
                }) 
            })
        },
        // addProductCart(contex,product){
        //     contex.commit('setProductCart',product)
        //     // const cart = window.localStorage.getItem("productCart")
        //     // if(cart){
        //     //     contex.commit('setProductCart',JSON.parse(cart))
        //     // }else{
        //     //     contex.commit('setProductCart',product)
        //     window.localStorage.setItem("cartpro",JSON.stringify(product))
                
        //     // }
        //},
        getProveedor({commit}){
            return new Promise((resolve) =>{
                proveedor.get()
                .then(response=>{
                    console.log(response.data)
                    commit('setProveedor',response.data.results)
                    resolve()
                }) 
            })
        },
//proceso de compra para el administrador
    /*
        getCompradmin({commit}){
            return new Promise((resolve) =>{
                axios.get("http://127.0.0.1:8000/compras/compraproduct/")
                .then(response=>{
                    console.log("amdin")
                    console.log(response.data)
                    commit('setCompradmin',response.data.results)
                    //this.imagenes = response.data.results
                    resolve()
                }) 
            })
        },
        /*
        getCategoria({commit}){
            return new Promise((resolve) =>{
                axios.get("http://127.0.0.1:8000/ventas/categorias/")
                .then(response=>{
                    console.log(response.data)
                    commit('setCategoria',response.data.results)
                    //this.imagenes = response.data.results
                    resolve()
                }) 
            })
        }
        */
    },
}