import axios from "axios";
import { FaRegStar, FaStar } from "react-icons/fa";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      test: "test",
      cart: {},
      cartSizes: {},
      message: ["test"],
      id: null,
      token: null,
      user: null,
      shipping: 1,
      fullResponse: [],
      womenProducts: [],
      menProducts: [],
      footwearProducts: [],
    },
    actions: {
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await axios.get("http://localhost:8080/api");
          setStore({ message: resp.data.fruits });
          // don't forget to return something, that is how the async resolves
          return resp;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      linkManager: (num) => {
        return `/products/${num}`;
      },
      returnFormated: (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      turnRating: (info) => {
        if (info == 0) {
          return (
            <>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 1) {
          return (
            <>
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 2) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 3) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </>
          );
        } else if (info == 4) {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </>
          );
        } else {
          return (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </>
          );
        }
      },
      fetchProducts: async () => {
        const store = getStore();
        axios
          .get(`http://localhost:8080/api/products/`)
          .then((products) => {
            setStore({ fullResponse: products.data.data });

            store.fullResponse.map((product) => {
              if (product.productFor == "Women") {
                let womenArray = store.womenProducts;
                let womenUpdate = womenArray.concat(product);

                setStore({ womenProducts: womenUpdate });
                return true;
              } else if (product.productFor == "Men") {
                let menArray = store.menProducts;
                let menUpdate = menArray.concat(product);

                setStore({ menProducts: menUpdate });
                return true;
              } else if (product.productFor == "Footwear") {
                let footwearArray = store.footwearProducts;
                let footwearUpdate = footwearArray.concat(product);

                setStore({ footwearProducts: footwearUpdate });
                return true;
              } else {
                console.error("filterProducts failed to set the store", product.id);
                return false;
              }
            });
          })
          .catch((error) => {
            console.error(error);
            return false;
          });
      },
      filterProducts: () => {
        const store = getStore();

        store.fullResponse.map((product) => {
          if (product.productFor == "Women") {
            let womenArray = store.womenProducts;
            let womenUpdate = womenArray.concat(product);
            console.log(womenUpdate);

            setStore({ womenProducts: womenUpdate });
            return true;
          } else if (product.productFor == "Men") {
            let menArray = store.menProducts;
            let menUpdate = menArray.concat(product);

            setStore({ menProducts: menUpdate });
            return true;
          } else if (product.productFor == "Footwear") {
            let footwearArray = store.footwearProducts;
            let footwearUpdate = footwearArray.concat(product);

            setStore({ footwearProducts: footwearUpdate });
            return true;
          } else {
            console.error("filterProducts failed to set the store", product.id);
            return false;
          }
        });
      },
      readyProducts: () => {
        try {
          getActions().fetchProducts();
          getActions().filterProducts();
          getActions().getDefaultCart();
          getActions().getDefaultCartSize();
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },
      returnTotal: (price, id) => {
        const store = getStore();
        const actions = getActions();

        const total = price * store.cart[id];

        return actions.returnFormated(total);
      },
      getDefaultCart: () => {
        {
          /* This func must execute after the products fetch */
        }
        const store = getStore();
        let defaultCart = {};

        store.fullResponse.map((product) => {
          defaultCart[product.id] = 0;
        });

        setStore({ cart: defaultCart });
      },
      plusOneToCart: (itemId) => {
        const store = getStore();
        let updatedStore = store.cart;

        updatedStore[itemId] += 1;

        setStore({ cart: updatedStore });
      },
      plusCustomToCart: (itemId, num) => {
        const store = getStore();
        let updatedStore = store.cart;

        updatedStore[itemId] += Number(num);

        setStore({ cart: updatedStore });
      },
      minusOneToCart: (itemId) => {
        const store = getStore();
        let updatedStore = store.cart;

        updatedStore[itemId] -= 1;

        setStore({ cart: updatedStore });
      },
      resetIdOnCart: (itemId) => {
        const store = getStore();
        let updatedStore = store.cart;

        updatedStore[itemId] = 0;

        setStore({ cart: updatedStore });
      },
      setCustomToCart: (itemId, num) => {
        const store = getStore();
        let updatedStore = store.cart;

        updatedStore[itemId] = Number(num);

        setStore({ cart: updatedStore });
      },
      getTotalCartPrice: () => {
        const store = getStore();
        let totalCartPrice = 0;

        for (const item in store.cart) {
          if (store.cart[item] > 0) {
            let itemInfo = store.fullResponse.find((product) => product.id === Number(item));

            totalCartPrice += store.cart[item] * itemInfo.price;
          }
        }
        return totalCartPrice;
      },
      getTotalProductInCart: () => {
        const store = getStore();
        let totalProduct = 0;

        for (const item in store.cart) {
          totalProduct += store.cart[item];
        }

        return totalProduct;
      },
      getDefaultCartSize: () => {
        {
          /* This func must execute after the product fetch */
        }
        const store = getStore();
        let defaultCarSize = {};

        store.fullResponse.map((product) => {
          defaultCarSize[product.id] = 0;
        });

        setStore({ cartSizes: defaultCarSize });
      },
      changeCartSize: (id, size) => {
        const store = getStore();
        let updatedStore = store.cartSizes;

        updatedStore[id] = size;

        setStore({ cartSizes: updatedStore });
      },
      changeShippingRegion: (num) => {
        // We will use the continents as the shipping region, this could change in the future
        // Number 1 will be north america, and it's fake price will be $10
        // Number 2 will be south america, and it's fake price will be $15
        // Number 3 will be antartica, and it's fake price will be $20
        // Number 4 will be africa, and it's fake price will be $25
        // Number 5 will be europe, and it's fake price will be $15
        // Number 6 will be asia, and it's fake price will be $20
        // Number 7 will be australia, and it's fake price will be $15
        const store = getStore();
        let updateShipping = store.shipping;

        updateShipping = Number(num);

        setStore({ shipping: updateShipping });
      },
    },
  };
};

export default getState;
