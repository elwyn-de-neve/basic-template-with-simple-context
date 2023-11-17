import {useParams} from "react-router-dom";

import useFetch from "../../hooks/useFetch.jsx";

const ProductDetails = () => {
    const {id} = useParams();

    const { products, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`,{});
    
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Er is een error opgetreden, met error: {error.message}</p>}
            <p>Product id: {products.id}</p>
            <h1>{products.title}</h1>
        </>
    );
}


export default ProductDetails;