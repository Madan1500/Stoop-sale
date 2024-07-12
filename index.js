const totalContainer = document.querySelector(".total-container");

// Fetch list of product categories
const fetchProductLists = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    return data;
};

// Fetch products by category
const fetchProductsByCategory = async (category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data;
};

// Categories to fetch
const categories = ["mens-shoes", "womens-shoes", "mens-shirts"];

// Display products by category
const displayProducts = (productName) => {
    fetchProductsByCategory(productName).then(data => {
        // Get or create a container for the category
        let containerId = `${productName}-container`;
        let container = document.getElementById(containerId);
        if (!container) {
            container = createContainer(containerId, productName);
            totalContainer.appendChild(container);
        } else {
            container.innerHTML = ''; // Clear previous contents if any
        }

        // Create and append product elements
        const productsWrapper = document.createElement('div');
        productsWrapper.classList.add('products-wrapper');
        data.products.forEach(product => {
            const productDiv = createProductDiv(product);
            productsWrapper.appendChild(productDiv);

            // Add click event to navigate to the product details page
            productDiv.addEventListener('click', () => {
                window.location.href = `productDetails.html?productId=${product.id}`;
            });
        });

        container.appendChild(productsWrapper);
    });
};

// Create a container for a category
const createContainer = (containerId, productName) => {
    const container = document.createElement('div');
    container.id = containerId;
    container.classList.add('product-container');

    const categoryName = document.createElement('h2');
    categoryName.textContent = formatCategoryName(productName);
    container.appendChild(categoryName);

    return container;
};

// Create a div for each product
const createProductDiv = (product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.alt = product.title;
    img.classList.add('product-image');

    const name = document.createElement('p');
    name.textContent = product.title;
    name.classList.add('product-name');

    productDiv.appendChild(img);
    productDiv.appendChild(name);

    return productDiv;
};

// Format category name for display
const formatCategoryName = (productName) => {
    return productName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Fetch and display products for all categories
categories.forEach(category => displayProducts(category));


const date = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = date;
// Function to update date and time
function updateTime() {

    const time = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
}

// Call updateDateTime immediately to set initial date and time
updateTime();

// Update date and time every second (1000 milliseconds)
setInterval(updateTime, 1000);