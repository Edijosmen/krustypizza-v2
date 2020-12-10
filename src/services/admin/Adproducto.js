import Service from '../Service.js';
const resource = 'ventas/productos/';
// const ingre='ventas/ingredientes/';
// const categoria = 'ventas/categorias/';

export default {
    get() {
        return Service.get(resource);
    },
    create(data) {
        return Service.post(resource,data)
    },
    delete(id) {
        return Service.delete(resource+id)
    },
    update(data,id) {
        return Service.put(resource+id,data)
    },
    edit(id) {
        return Service.get(resource+id)
    }
    // get() {
    //     return Service.get(resource);
    // },
    // updateGet(id){
    //     return Service.get(resource+id);
    // },
    // post(){
    //     return Service.post(resource)
    // },
    // delete(id) {
    //     return Service.delete(resource+id);
    // },

    // //ingredientes
    // ingredientGet(){
    //     return Service.get(ingre);
    // },

    // //categoria
    // getCategoria(){
    //     return Service.get(categoria);
    // }
    
}

