const productDetailsDiv = document.querySelector(".product-details");

// Function to get the product ID from the URL
const getProductIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('productId');
};

// Function to fetch and display product details
const fetchProductDetails = async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = await response.json();
    console.log(product);
    productDetailsDiv.innerHTML = `
        <div class="product-image-name">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="${product.title}" class="product-detail-image">
        </div>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating}</p>
        <div class="reviews">
            <button class="toggle-button" onclick="toggleReviews()">Show Reviews</button>
            <ul style="display: none;">
                ${product.reviews.map(comment => `
                    <li>
                        <p><strong>${comment.reviewerName}</strong></p>
                        <p>${comment.comment}</p>
                        <p>Rating: ${comment.rating}</p>
                        <p>Date: ${new Date(comment.date).toLocaleDateString()}</p>
                    </li>`).join('')}
            </ul>
        </div>
    `;
};

// Function to toggle the reviews section visibility
const toggleReviews = () => {
    const reviewsList = document.querySelector(".reviews ul");
    const toggleButton = document.querySelector(".toggle-button");
    if (reviewsList.style.display === "none") {
        reviewsList.style.display = "block";
        toggleButton.textContent = "Hide Reviews";
    } else {
        reviewsList.style.display = "none";
        toggleButton.textContent = "Show Reviews";
    }
};

// Get the product ID from the URL and fetch product details
const productId = getProductIdFromUrl();
if (productId) {
    fetchProductDetails(productId);
}

