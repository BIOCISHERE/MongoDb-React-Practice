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
    },
  };
};

export default getState;
