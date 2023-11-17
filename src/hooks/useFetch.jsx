import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (endpoint, param) => {

    const [products, setProducts] = useState(param);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        void fetchProducts()
    },[])

    async function fetchProducts(){
        setLoading(true);
        try {
            const {data} = await axios.get(endpoint)
            setProducts(data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    return { products, loading, error }
};

export default useFetch;