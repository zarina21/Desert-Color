"use client"
import { useState, useEffect } from 'react';
import { getProducts } from './getProducts';

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
    2+2
    );
};

export default Products;
