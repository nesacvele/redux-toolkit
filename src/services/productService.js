import axios from "axios";

class ProductService {
    static getAllProductsService = () => axios.get('https://dummyjson.com/products');
}

export default ProductService;