<template>
  <div>
    <div class="container">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
        <table class="table" >
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="item.id">
              <td>{{ item.nombre }}</td>
              <td>{{ item.precio }}</td>
              <td>
                <div class="row">
                  <div class="col-3">
                    <button
                      @click="decrementQuantity(item)"
                      :disabled="item.quantity === 1"
                      class="btn btn-secondary mt-2 ms-2"
                      id="decrement-btn"
                    >
                      -
                    </button>
                  </div>
                  <div class="col-4">
                    <input
                      v-model="item.quantity"
                      class="form-control"
                      :class="item.quantity > 0 ? 'positive' : 'negative'"
                      id="quantity-input"
                    />
                  </div>
                  <div class="col-3">
                    <button
                      @click="incrementQuantity(item)"
                      class="btn btn-secondary mt-2"
                      id="increment-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td>{{ getTotal(item) }}</td>
              <td>
                <button
                  class="btn btn-danger"
                  @click=" eliminarDelCarrito(index)"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    
  </div>
  <div class="container mt-3">
      <div class="row">
        <div class="col-12">
          <h4>Total a Pagar: {{ calcularTotalAPagar() }}</h4>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'CarritoCompra',
     data() {
    return {
    };
  },
  computed: {
    cartItems() {
      const cartItems = [];
      const selectedItems = this.$store.getters.selectedItems;

      // Agrupar los items por nombre y calcular la cantidad total
       selectedItems.forEach((item) => {
        const existingItem = cartItems.find((i) => i.nombre === item.nombre);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({ ...item, quantity: 1 });
        }
      });

      return cartItems;
    },
  },
  methods: {
        
    ...mapActions(['removeItem']), 
    
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
         this.$store.dispatch('removeItem', item);
      }
    },
    incrementQuantity(item) {
      item.quantity++;
       this.$store.dispatch('addItem', item);
    },
    getTotal(item) {
      return item.precio * item.quantity;
    },
    removeFromCart(item) {
      this.$store.dispatch('removeItem', item);
    },
    calcularTotalAPagar() {
      let total = 0;
      this.cartItems.forEach(item => {
        total += this.getTotal(item);
      });
      return total;
    },
    eliminarDelCarrito(index) {
      const item = this.cartItems[index];
      if (item.quantity > 1) {
        item.quantity--; // Disminuir la cantidad si es mayor a 1
      } else {
        this.removeFromCart(item); // Eliminar completamente el producto si la cantidad es 1
      }
    },
    
    // eliminarDelCarrito(index) {
    //   const item = this.cartItems[index];
    // },

  }
};
</script>

<style scoped>
#decrement-btn {
  margin-left: 30px;
}

#quantity-input {
  margin-left: 20px;
  width: 50px;
}
</style>