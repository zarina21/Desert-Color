"use client"
import { useState, useEffect } from 'react';
import { getProducts } from '../app/getProducts';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const fetchProducts = async () => {
        const productsData = await getProducts();
        setProducts(productsData);
    };
    fetchProducts();
    }, []);

    return (
        <div>
        <h1>Productos</h1>
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
                <img src={product.imagen} alt={product.name} />
                {/* Mostrar otros datos del producto */}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Products;
