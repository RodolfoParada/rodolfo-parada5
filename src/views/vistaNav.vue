<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Tortas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item ">
              <!-- <button class="btn btn-primary mb-2">
                <router-link to="/todo-anterior">Todo Anterior</router-link>
              </button> -->
            </li>
            <li class="nav-item">
              <!-- <router-link to="/carrito-compra">carrito compra</router-link> -->
             <div class="row"> 
                <div class="col-10 arriba">
                  <AtributosRiac />
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-end mt-n5">
                  <!-- Button trigger modal -->
                  <button type="button" class="Boton btn btn-primary" @click="showModal = true">
                    Carrito de Compra
                  </button>
                  
                  <!-- Modal -->
                  <transition name="fade">
        <div v-if="showModal" class="modal fade show" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Carrito de Compra</h5>
                <button type="button" class="close" @click="showModal = false" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- aqui va el codigo  -->
                <carrito></carrito>
              </div>
              <div class="modal-footer justify-content-center">
                <!-- <button type="button" class="btn btn-danger" @click="showModal = false">Cancelar</button> -->
                <button type="button" class="btn btn-dark"  @click="confirmPurchase">CONFIRMAR COMPRA</button>
              </div>
            </div>
          </div>
        </div>
           </transition>
           
           
           <transition name="fade">
             <div
             v-if="showThankYouModal"
             class="modal fade show"
             style="display: block;"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLongTitle"
             aria-hidden="true"
             >
             <div class="modal-dialog" role="document">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLongTitle">Gracias por realizar su compra</h5>
                   <button type="button" class="close" @click="showThankYouModal = false" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <div class="modal-body">
              **********************
              
              ¡Gracias por su compra!
              
              **********************
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="continueShopping">Seguir Comprando</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

             </div>
              </div>
            </li>
            <li>
                <button  v-if="!existeUsuario" type="button" class="btn btn-outline-primary mx-2" 
                  data-bs-toggle="modal" 
                  data-bs-target="#login">
                  Log in
                </button> 
            </li>
            <li>
                <button  v-if="!existeUsuario" class="btn btn-outline-danger me-2"
                  data-bs-toggle="modal" 
                  data-bs-target="#login"
                  @click="signout">
                  Log out
                </button>
            </li>
            <li>
                <button  v-if="!existeUsuario" type="button" 
                  class="btn btn-outline-warning" 
                  data-bs-toggle="modal" 
                  data-bs-target="#registro"><!-- inicia modal con id="registro" --> 
                  Regístrate
                </button> 

            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- //// Modal - Registrarse //// -->
    <div class="modal fade" id="registro">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Regístrate</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="register(this.email, this.password)">  
               <!-- CORREO -->
              <div class="input-group mb-3">
              <span class="input-group-text">Correo</span>
              <input v-model="email" 
                      type="email"
                      required="true"
                      class="form-control">
              </div>
              <!-- PASSWORD -->
              <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <input v-model="password" 
                      type="password"
                      required="true" 
                      class="form-control">
              </div>
              <!-- REPASSWORD -->
              <div class="input-group mb-3">
              <span class="input-group-text">Repite Password</span>
              <input v-model="repassword" 
                      type="password"
                      required="true" 
                      class="form-control">
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   <!-- //// Modal - Iniciar sesión //// -->
    <div class="modal fade" id="login">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Inicia de sesión</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="login(this.email, this.password)">
              <!-- CORREO --> 
              <div class="input-group mb-3">
              <span class="input-group-text">Correo</span>
              <input v-model="email" 
                      type="email"
                      required="true"
                      class="form-control"
                      placeholder="curso@charcha.com"
                      >
              </div>
              <!-- PASSWORD --> 
              <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <input v-model="password" 
                      type="password"
                      required="true" 
                      class="form-control"
                      placeholder="123456"
                      >
              </div>
              <div class="d-grid gap-2">
                <button type="submit" 
                  class="btn btn-primary" 
                  data-bs-dismiss="modal"><!-- Cierra el modal --> 
                  Iniciar sesión
                </button>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  
     <div>
         <carro :carrito="carrito"></carro>  
     </div>
     <div>
       <h6 class="mt-5 d-flex justify-content-start p-4">* Una vez que hayas hecho click a Agregar carrito te puedes dirigir al carrito de compra para finalizar la compra</h6>
         <listaProductos @add-to-cart="addToCart"></listaProductos>  
     </div>


</template>






<script>
import { 
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { mapGetters } from 'vuex'

// import carro from '../components/CarritoCompra.vue'
import listaProductos from "../components/ListaProductos.vue"
import carrito from '../components/CarritoCompra.vue'



export default {
    name: 'Navbar',
  components: {
        listaProductos,
        // carro,
    carrito
      
    },
   data() {
        return {
            email: '',
            password: '',
            repassword: '',
            errorMessage: '',
          showModal: false,
          showPurchaseConfirmationModal: false,
          showThankYouModal: false,
        };
    },
   methods: {
     register(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('¡Registrado!');
        })
        .catch((error) => {
            const errorCode = error.code;
            this.errorMessage = error.message;
            alert(this.errorMessage);
            // ..
        });
      },        
     login( email, password ) {
       const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('¡Sesión iniciada!');
            // Signed in
            const user = userCredential.user;
            // ...
            })
        .catch((error) => {
        const errorCode = error.code;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        });
        },
     signout () {
       const auth = getAuth();
      signOut(auth).then(() => {
        alert('¡Sesión cerrada! Inicia sesión.');
      }).catch((error) => {
      });
       },
      addToCart(item) {
            this.carrito.push(item);
     },
        confirmPurchase() {
      this.showPurchaseConfirmationModal = false;
      this.showThankYouModal = true;
    },
    continueShopping() {
      this.showThankYouModal = false;
    },
     
   },
    computed: {
        ...mapGetters(['existeUsuario'])
    }
}
</script>