export default {
    state: {
      cart: []
    },
    mutations: {

      setCart(state, cartTmp) {
        state.cart = cartTmp;
      },

      incrementProductQuantity(state, item) {
        item.quantity++;
      },
      decrementProductQuantity(state, item){
        item.quantity--;
      },
      addProductToCart(state, product) {
        state.cart.push({
          id: product.id,
          quantity: 1
        });
        
      },
      removeProductFromCart(state, index) {
        state.cart.splice(index, 1);
      },
      emptyCart(state) {
        state.cart = [];
      }
    },
    actions: {
      setCartTmp(context, carrito){
          context.commit("setCart", carrito);
      },
      addProductToCart(context, product) {
        //if (product.inventory === 0) return;
        const item = context.state.cart.find(item => item.id === product.id);
        if (item) {
          context.commit("incrementProductQuantity", item);
        } else {
          context.commit("addProductToCart", product);          
        }
        window.localStorage.setItem('carrito', JSON.stringify(context.state.cart));
        //context.state.cart = JSON.parse(window.localStorage.getItem('carrito'));
        //context.commit("setCart", JSON.parse(window.localStorage.getItem('carrito')));
        //context.commit("decrementProductInventory", product);
      },
      removeProductFromCart(context, index) {
        const item = context.state.cart[index];
        context.commit("removeProductFromCart", index);
        //context.commit("incrementProductInventory", item);
      }
    },
    getters: {
      productsOnCart(state, getters, rootState) {
        return state.cart.map(item => {
          const product = rootState.products.products.find(
            product => product.id === item.id
          );
          return {
            title: product.nombre,
            price: product.precio,
            quantity: item.quantity
          };
        }, this);
      },
      cartTotal(state, getters) {
        return getters.productsOnCart.reduce(
          (total, current) => total + current.precio * current.quantity,
          0
        );
      }
    }
  };