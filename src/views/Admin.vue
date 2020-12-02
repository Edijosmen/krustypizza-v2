<template>
    <div>
        <nav class="navbar navbar-light  bgnav">
            <label for="" class="piza">Pizza</label>
            <div class="dropdown mb-3">
                    <div>
                        <b-dropdown id="dropdown-1" text="Administrador" class="m-md-2">
                            <b-dropdown-item>First Action</b-dropdown-item>
                            <b-dropdown-item>Second Action</b-dropdown-item>
                            <b-dropdown-item>Third Action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item active>Active action</b-dropdown-item>
                            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                        </b-dropdown>
                    </div>
            </div>
        </nav>
        <section id="breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="active">adminstrador</li>
                </ol>
            </div>

        </section>

        <section class="contenido">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group menu">
                            <label href="#" class="list-group-item  color-principal">
                                <i class="fas fa-bars"></i> Menú
                            </label>
                            <a href="#" class="list-group-item list-group-item-action">Clientes</a>
                            <a href="#proveedor" class="list-group-item list-group-item-action"
                            @click="changeProveedor()">Proveedores</a>
                            <a href="#Productos" class="list-group-item list-group-item-action"
                             @click="changproduct()">Productos</a>
                            <a href="#compra"  class="list-group-item list-group-item-action" 
                            @click="changcompra()">Compra</a>
                            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1"
                                aria-disabled="true">Vestibulum at eros</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                       <keep-alive>
                           <component :is="chanpage"></component>
                        </keep-alive>


                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Products from '@/components/admin/Productos.vue'
import Proveedores from '@/components/admin/Proveedores.vue'
import CompraAdmin from '@/components/admin/CompraAdmin.vue'
export default {
    name: 'admin',
    
    data() {
        return {
            chanpage: ''
        }
    },
    components: {
        Products,
        Proveedores,
        CompraAdmin
    },
    methods: {
        changproduct(){
            this.chanpage ='Products'
        },
        changeProveedor(){
            this.chanpage ='Proveedores'
        },
        changcompra(){
            this.chanpage ='CompraAdmin'
        }
    }
}
</script>

<style scoped>
.menu-section{
    background: #324A5B;

}
.color-principal{
    background: #324A5B;
    color: white;

}
.contenido{
    background: #F1F8F9;
}
.bgnav{
    background: #324A5B;
}
.piza{
    color: white;
}
.adm{
    color: white;
}
.adm:hover{
    color: white;
}

.menu{
    padding-top: 10px;
}
.pagine{
    border: 1px solid black;
}
</style>