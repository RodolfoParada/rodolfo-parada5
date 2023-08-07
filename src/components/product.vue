
<template>
    
<div>
     <h1>Lista de Productos</h1>
    <form>
      <div class="row">
        <div
          class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col p-5"
         v-for="product in products" :key="product.id"
        >
          <div class="card card-item">
            <img
              :src="product.imagen"
              class="card-img-top d-flex justify-content-center product-image"
              alt="Imagen del producto"
              id="1"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <p class="card-text">Precio: {{ product.precio }}</p>
            </div>
<div>
              <button
                type="button"
                @click="agregarAlCarrito(item)"
                class="btn btn-success mb-2"
              >
                Agregar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template> 

<script>
import axios from 'axios';
export default {
    data() {
        return {
            products: [],
            listProductos: {},
           
        };
    },
    created() {
        this.getProductos();
        this.getProductoseje()
    
       
    },
    methods: {
      
        async getProductos() {
            try {
                const response = await axios.get('https://apiproductos-xhxy.onrender.com/listar');
                this.products = response.data;
                console.log("response", this.products)
            } catch (error) {
                console.error('no hay respuesta:', error);
            }
        },
        async getProductoseje() {
            try {
                const response = await axios.get('https://apiproductos-xhxy.onrender.com/listar');
                const products = await response.data;
                console.log("response", products)
                this.listProductos = products
                return products
            } catch (error) {
                console.error('no hay respuesta:', error);
            }
        },
    }
}
 
    
    
</script>

<style>
/* Estilos opcionales */
ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
}

img {
    width: 200px;
    height: auto;
}
</style>

















<!-- <template>
    <div>
        <h1>Lista de Productos</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <h2>{{ product.nombre }}</h2>
                <p>{{ product.descripcion }}</p>
                <img :src="product.imagen" alt="Imagen del producto" />
                <p>Precio: {{ product.precio }} CLP</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            // Aquí hacemos la petición al API
            fetch('https://apiproductos-xhxy.onrender.com/listar')
                .then((response) => response.json())
                .then((data) => {
                    this.products = data;
                    console.log(this.products)
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        },
    },
};
</script>

<style>
/* Estilos opcionales */
ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 20px;
}

img {
    width: 200px;
    height: auto;
}
</style> -->