import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [showReviews, setShowReviews] = useState(false);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const product = await response.json();
            setProduct(product);
        };
        fetchProductDetails();
    }, [productId]);

    if (!product) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h2>
                <img src={product.thumbnail} alt={product.title} className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105" />
            </div>
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-gray-800 mt-2">Price: ${product.price}</p>
            <p className="text-gray-800 mt-2">Category: {product.category}</p>
            <p className="text-gray-800 mt-2">Rating: {product.rating}</p>
            <div className="reviews mt-6">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-600"
                    onClick={() => setShowReviews(!showReviews)}
                >
                    {showReviews ? "Hide Reviews" : "Show Reviews"}
                </button>
                {showReviews && (
                    <ul className="mt-4">
                        {product.reviews.map(comment => (
                            <li key={comment.date} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                                <p className="font-semibold">{comment.reviewerName}</p>
                                <p className="text-gray-700">{comment.comment}</p>
                                <p className="text-gray-500">Rating: {comment.rating}</p>
                                <p className="text-gray-500">Date: {new Date(comment.date).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;

