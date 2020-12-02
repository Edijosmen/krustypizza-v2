import Service from '../Service';
const resource = 'compras/proveedores/'

export default {
    get() {
        return Service.get(resource);
    },
}
