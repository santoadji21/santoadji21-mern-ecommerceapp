import axios from 'axios';

const PRODUCTS_ENDPOINT = '/api/products';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}${PRODUCTS_ENDPOINT}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const data = await axios.get(`${import.meta.env.VITE_API_URL}${PRODUCTS_ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
