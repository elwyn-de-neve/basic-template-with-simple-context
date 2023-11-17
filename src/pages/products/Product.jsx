
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";

const Product = () => {

    const { products, loading, error } = useFetch("https://fakestoreapi.com/products/", []);
    console.log(products)

    return (
        <>
            <h1>Products</h1>
            { loading && <p>Loading...</p>}
            { error && <p>Er is een error opgetreden, met error: { error.message }</p>}
            { products.map((product) => {
                return (
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <span>{product.price}</span>
                            <Link to={`/product/${product.id}`}>More info</Link>
                        </div>
                    )
            }) }
        </>
    );
};

export default Product;