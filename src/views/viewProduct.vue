<template>

 
    <carro :carrito="carrito"></carro>  

  <listaProductos @add-to-cart="addToCart"></listaProductos>  




</template>

    <script>
    import carro from '../components/CarritoCompra.vue'
    import listaProductos from "../components/ListaProductos.vue"

    
    export default {
      name: 'viewProduct',
      components: {
            listaProductos,
             carro,
      },
      methods: {
        addToCart(item) {
          this.carrito.push(item);
        },
      }
      }
    
        
  
    </script>




