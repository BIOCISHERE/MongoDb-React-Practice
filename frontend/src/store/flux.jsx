import axios from "axios";
import toast from "react-hot-toast";
import { FaRegStar, FaStar } from "react-icons/fa";

const getState = ({ getStore, getActions, setStore }) => {
  // In Store, we will save variables to be used globally in the project.
  // In Actions, we will save functions to be used globally in the project.
  return {
    store: {
      user: null,
      cart: {},
      cartSizes: {},
      shipping: 1,
      fullResponse: [],
      womenProducts: [],
      menProducts: [],
      footwearProducts: [],
    },
    actions: {
      linkManager: (num) => {
        // We use this func to redirect the user to it's desired product.
        return `/products/${num}`;
      },
      returnFormated: (value) => {
        // This func return the value with a coma every 3 digits.
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      turnRating: (info) => {
        // This func recives the rating, then it returns the rating but with "stars".
        if (info == 0) {
          // 0 full stars, 5 empty stars.
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
          // 1 full stars, 4 empty stars.
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
          // 2 full stars, 3 empty stars.
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
          // 3 full stars, 2 empty stars.
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
          // 4 full stars, 1 empty stars.
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
          // 5 full stars, 0 empty stars.
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
        let defaultCart = {};
        let defaultCarSize = {};

        // Fetching the products.
        await axios
          .get(`http://localhost:8080/api/products/`)
          .then((products) => {
            // Saving the products in the flux context.
            setStore({ fullResponse: products.data.data });

            // Filtering the products into women, men and footwear products.
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
                // If a product fails to be filtered, then we print the error to the terminal with it's id.
                console.error("filterProducts failed to set the store", product.id);
                return false;
              }
            });

            // After the fetch, we "build" a empty shopping cart with the products id.
            store.fullResponse.map((product) => {
              defaultCart[product.id] = 0;
            });

            // After the fetch, we "build" a empty shopping cart to store the products sizes.
            store.fullResponse.map((product) => {
              defaultCarSize[product.id] = 0;
            });

            // Saving the shopping carts in the flux context.
            setStore({ cart: defaultCart, cartSizes: defaultCarSize });
          })
          .catch((error) => {
            // If there is a error, we catch it here.
            console.error(error);
            return false;
          });
      },
      returnTotal: (price, id) => {
        const store = getStore();
        const actions = getActions();

        // This func returns the total in the shopping cart of a specified products.
        // Price times the amount of a products in the cart.
        const total = price * store.cart[id];

        return actions.returnFormated(total);
      },
      plusOneToCart: (itemId) => {
        const store = getStore();
        let updatedStore = store.cart;

        // This func adds 1 of a specified product to the shopping cart.
        updatedStore[itemId] += 1;

        setStore({ cart: updatedStore });
      },
      plusCustomToCart: (itemId, num) => {
        const store = getStore();
        let updatedStore = store.cart;

        // This func adds a custom amount of a specified product to the shopping cart.
        updatedStore[itemId] += Number(num);

        setStore({ cart: updatedStore });
      },
      minusOneToCart: (itemId) => {
        const store = getStore();
        let updatedStore = store.cart;

        // This func subtract 1 of a speciefied product to the shopping cart.
        updatedStore[itemId] -= 1;

        setStore({ cart: updatedStore });
      },
      resetIdOnCart: (itemId) => {
        const store = getStore();
        let updatedStore = store.cart;

        // This func resets the amount of a specified product to the shopping cart.
        updatedStore[itemId] = 0;

        setStore({ cart: updatedStore });
      },
      setCustomToCart: (itemId, num) => {
        const store = getStore();
        let updatedStore = store.cart;

        // This func sets a specified amount as the product amount to the shopping cart.
        updatedStore[itemId] = Number(num);

        setStore({ cart: updatedStore });
      },
      getTotalCartPrice: () => {
        const store = getStore();
        let totalCartPrice = 0;

        // This func goes through the shopping cart and adds the price times the amount of a product to get the total.
        for (const item in store.cart) {
          if (store.cart[item] > 0) {
            let itemInfo = store.fullResponse.find((product) => product.id === item);

            totalCartPrice += store.cart[item] * itemInfo.price;
          }
        }
        return totalCartPrice;
      },
      getTotalProductInCart: () => {
        const store = getStore();
        let totalProduct = 0;

        // This func returns the amount of products stored in the shopping cart.
        for (const item in store.cart) {
          totalProduct += store.cart[item];
        }

        return totalProduct;
      },
      changeCartSize: (id, size) => {
        const store = getStore();
        let updatedStore = store.cartSizes;

        // This func changes the stored size of a product.
        // We use the cartSizes object to store the desired size of a product.
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

        // This func changes the shipping region stored in the flux context.
        updateShipping = Number(num);

        setStore({ shipping: updateShipping });
      },
      getUserProfile: () => {
        const store = getStore();
        let userData = store.user;

        if (!userData) {
          axios.get("http://localhost:8080/api/user/profile").then((data) => {
            setStore({ user: data });
          });
        }
      },
      addUserFavorite: async (userId, productId) => {
        const store = getStore();
        try {
          const request = await axios.put("http://localhost:8080/api/user/a-favorites", {
            userID: userId,
            productID: productId,
          });

          if (!request.data.success) {
            toast.error(request.data.message);
          } else {
            toast.success(request.data.message);
          }
        } catch (error) {
          toast.error("Unknown error occurred. Please try again later.");
          console.log(error);
        }
      },
      removeUserFavorite: async (userId, productId) => {
        try {
          const request = await axios.put("http://localhost:8080/api/user/r-favorites", {
            userID: userId,
            productID: productId,
          });

          if (!request.data.success) {
            toast.error(request.data.message);
          } else {
            toast.success(request.data.message);
          }
        } catch (error) {
          toast.error("Unknown error occurred. Please try again later.");
          console.log(error);
        }
      },
    },
  };
};

export default getState;
