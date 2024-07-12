import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Memoize the 'categories' array
    const categories = useMemo(() => [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
      ], []);

    useEffect(() => {
        const fetchProducts = async () => {
            const responses = await Promise.all(
                categories.map(category =>
                    fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json())
                )
            );
            setProducts(responses.flatMap(response => response.products));
        };
        fetchProducts();
    }, [categories]);

    return (
        <div className="container mx-auto p-4">
            {categories.map(category => (
                <div key={category} className="mb-8">
                    <h2 className="text-center text-3xl font-bold mb-4">{category.replace('-', ' ').toUpperCase()}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products
                            .filter(product => product.category === category)
                            .map(product => (
                                <div
                                    key={product.id}
                                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    <img
                                        loading='lazy'
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                                    />
                                    <p className="text-lg font-medium text-gray-800">{product.title}</p>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

