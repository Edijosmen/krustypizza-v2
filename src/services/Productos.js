import Service from './Service.js';
const resource = 'ventas/productos/';


export default {
    get() {
        return Service.get(resource);
    }, 
}