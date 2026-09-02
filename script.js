// ================================
// PRODUCT DATA
// ================================

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 4500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        description: "High-quality wireless headphones with clear sound and comfortable design.",
        stock: 15
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 6500,
        discount: 15,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        description: "Modern smart watch with stylish design and useful features.",
        stock: 10
    },
    {
        id: 3,
        name: "Women Handbag",
        category: "Fashion",
        price: 3200,
        discount: 20,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        description: "Elegant handbag suitable for everyday use and special occasions.",
        stock: 20
    },
    {
        id: 4,
        name: "Men Sneakers",
        category: "Shoes",
        price: 5500,
        discount: 12,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        rating: 4.4,
        description: "Comfortable and stylish sneakers for everyday activities.",
        stock: 18
    },
    {
        id: 5,
        name: "Sunglasses",
        category: "Accessories",
        price: 1800,
        discount: 10,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        rating: 4.3,
        description: "Trendy sunglasses with a modern and attractive look.",
        stock: 25
    },
    {
        id: 6,
        name: "Desk Lamp",
        category: "Home & Living",
        price: 2200,
        discount: 15,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
        rating: 4.2,
        description: "Modern desk lamp perfect for study and work spaces.",
        stock: 12
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 3500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        description: "Portable Bluetooth speaker with powerful sound quality.",
        stock: 14
    },
    {
        id: 8,
        name: "Denim Jacket",
        category: "Fashion",
        price: 4800,
        discount: 18,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        rating: 4.4,
        description: "Classic denim jacket with a stylish and comfortable fit.",
        stock: 16
    },
    {
        id: 9,
        name: "Running Shoes",
        category: "Shoes",
        price: 6200,
        discount: 15,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        description: "Lightweight running shoes designed for comfort and performance.",
        stock: 13
    },
    {
        id: 10,
        name: "Leather Wallet",
        category: "Accessories",
        price: 1500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
        rating: 4.3,
        description: "Premium leather wallet with a simple and practical design.",
        stock: 30
    },
    {
        id: 11,
        name: "Decorative Vase",
        category: "Home & Living",
        price: 1900,
        discount: 20,
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80",
        rating: 4.1,
        description: "Beautiful decorative vase to enhance your home interior.",
        stock: 9
    },
    {
        id: 12,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 1700,
        discount: 10,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
        rating: 4.4,
        description: "Smooth and comfortable wireless mouse for work and study.",
        stock: 22
    },
    {
        id: 13,
        name: "Women's Watch",
        category: "Accessories",
        price: 2800,
        discount: 15,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        description: "Elegant women's watch with a beautiful modern design.",
        stock: 11
    },
    {
        id: 14,
        name: "Casual T-Shirt",
        category: "Fashion",
        price: 1600,
        discount: 10,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
        rating: 4.2,
        description: "Comfortable casual t-shirt made for everyday wear.",
        stock: 28
    },
    {
        id: 15,
        name: "Table Clock",
        category: "Home & Living",
        price: 1300,
        discount: 5,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80",
        rating: 4.0,
        description: "Simple and stylish table clock for your room or office.",
        stock: 17
    }
];


// ================================
// CART
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ================================
// DISCOUNTED PRICE
// ================================

function getDiscountedPrice(product) {
    return product.price - (product.price * product.discount / 100);
}


// ================================
// SAVE CART
// ================================

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}


// ================================
// CART COUNT
// ================================

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        cartCount.textContent = totalItems;
    }
}


// ================================
// ADD TO CART
// ================================

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }

    const existingItem = cart.find(
        item => item.id === productId
    );

    if (existingItem) {

        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
        } else {
            alert("Maximum available stock reached.");
            return;
        }

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveCart();

    alert(`${product.name} added to cart!`);
}


// ================================
// PRODUCT CARD
// ================================

function createProductCard(product) {

    const discountedPrice = getDiscountedPrice(product);

    return `
        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <p>⭐ ${product.rating}</p>

                <div class="product-price">
                    Rs. ${discountedPrice.toFixed(0)}
                </div>

                <p>
                    <del>Rs. ${product.price}</del>
                    &nbsp; ${product.discount}% OFF
                </p>

                <div class="product-buttons">

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <a
                        href="product-details.html?id=${product.id}"
                        class="details-btn"
                    >
                        View Details
                    </a>

                </div>

            </div>

        </div>
    `;
}


// ================================
// FEATURED PRODUCTS
// ================================

function displayFeaturedProducts() {

    const container =
        document.getElementById("featured-products");

    if (!container) {
        return;
    }

    const featuredProducts = products.slice(0, 8);

    container.innerHTML = featuredProducts
        .map(createProductCard)
        .join("");
}


// ================================
// ALL PRODUCTS
// ================================

function displayProducts(productList = products) {

    const container =
        document.getElementById("products-container");

    if (!container) {
        return;
    }

    if (productList.length === 0) {

        container.innerHTML = `
            <div class="no-products">
                <h2>No products found</h2>
                <p>Try another search or filter.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = productList
        .map(createProductCard)
        .join("");
}


// ================================
// APPLY SEARCH + FILTERS + SORT
// ================================

function applyFilters() {

    const searchInput =
        document.getElementById("product-search");

    const categoryFilter =
        document.getElementById("category-filter");

    const priceFilter =
        document.getElementById("price-filter");

    const sortFilter =
        document.getElementById("sort-filter");

    if (!searchInput || !categoryFilter || !priceFilter || !sortFilter) {
        return;
    }

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const categoryValue =
        categoryFilter.value;

    const priceValue =
        priceFilter.value;

    const sortValue =
        sortFilter.value;


    let filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            product.category === categoryValue;

        let matchesPrice = true;

        const productPrice =
            getDiscountedPrice(product);


        if (priceValue === "0-2000") {
            matchesPrice =
                productPrice <= 2000;
        }

        else if (priceValue === "2000-4000") {
            matchesPrice =
                productPrice >= 2000 &&
                productPrice <= 4000;
        }

        else if (priceValue === "4000-6000") {
            matchesPrice =
                productPrice >= 4000 &&
                productPrice <= 6000;
        }

        else if (priceValue === "6000-10000") {
            matchesPrice =
                productPrice > 6000;
        }


        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice
        );
    });


    // Sorting

    if (sortValue === "low-high") {

        filteredProducts.sort(
            (a, b) =>
                getDiscountedPrice(a) -
                getDiscountedPrice(b)
        );
    }

    else if (sortValue === "high-low") {

        filteredProducts.sort(
            (a, b) =>
                getDiscountedPrice(b) -
                getDiscountedPrice(a)
        );
    }


    displayProducts(filteredProducts);
}


// ================================
// HOME SEARCH
// ================================

function searchFromHome() {

    const searchInput =
        document.getElementById("home-search");

    if (!searchInput) {
        return;
    }

    const searchValue =
        searchInput.value.trim();

    if (searchValue === "") {

        window.location.href =
            "products.html";

        return;
    }

    window.location.href =
        `products.html?search=${encodeURIComponent(searchValue)}`;
}


// ================================
// NEWSLETTER
// ================================

function subscribeNewsletter() {

    const emailInput =
        document.getElementById("newsletter-email");

    if (!emailInput) {
        return;
    }

    const email =
        emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for subscribing!");

    emailInput.value = "";
}


// ================================
// LOAD SEARCH FROM URL
// ================================

function loadSearchFromURL() {

    const searchInput =
        document.getElementById("product-search");

    if (!searchInput) {
        return;
    }

    const params =
        new URLSearchParams(window.location.search);

    const searchValue =
        params.get("search");

    if (searchValue) {

        searchInput.value =
            searchValue;

        applyFilters();

    } else {

        displayProducts();
    }
}


// ================================
// PAGE INITIALIZATION
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayFeaturedProducts();

        loadSearchFromURL();

        updateCartCount();

        const categoryFilter =
            document.getElementById("category-filter");

        const priceFilter =
            document.getElementById("price-filter");

        const sortFilter =
            document.getElementById("sort-filter");

        if (categoryFilter) {
            categoryFilter.addEventListener(
                "change",
                applyFilters
            );
        }

        if (priceFilter) {
            priceFilter.addEventListener(
                "change",
                applyFilters
            );
        }

        if (sortFilter) {
            sortFilter.addEventListener(
                "change",
                applyFilters
            );
        }
    }
);
