const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 4500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
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
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        rating: 4.4,
        description: "Modern smart watch with stylish design and useful smart features.",
        stock: 10
    },
    {
        id: 3,
        name: "Women Handbag",
        category: "Fashion",
        price: 3200,
        discount: 20,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
        rating: 4.7,
        description: "Elegant women's handbag suitable for everyday use and special occasions.",
        stock: 12
    },
    {
        id: 4,
        name: "Men Sneakers",
        category: "Shoes",
        price: 5500,
        discount: 12,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        rating: 4.6,
        description: "Comfortable and stylish sneakers designed for everyday wear.",
        stock: 20
    },
    {
        id: 5,
        name: "Sunglasses",
        category: "Accessories",
        price: 1800,
        discount: 10,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
        rating: 4.3,
        description: "Trendy sunglasses with a modern frame and comfortable fit.",
        stock: 18
    },
    {
        id: 6,
        name: "Desk Lamp",
        category: "Home & Living",
        price: 2200,
        discount: 15,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
        rating: 4.5,
        description: "Modern desk lamp perfect for study rooms, offices and bedrooms.",
        stock: 14
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 3500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
        rating: 4.6,
        description: "Portable Bluetooth speaker with powerful sound and compact design.",
        stock: 16
    },
    {
        id: 8,
        name: "Denim Jacket",
        category: "Fashion",
        price: 4800,
        discount: 18,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
        rating: 4.4,
        description: "Classic denim jacket with a stylish design for a fashionable look.",
        stock: 9
    },
    {
        id: 9,
        name: "Running Shoes",
        category: "Shoes",
        price: 6200,
        discount: 15,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        rating: 4.7,
        description: "Lightweight running shoes designed for comfort and daily exercise.",
        stock: 13
    },
    {
        id: 10,
        name: "Leather Wallet",
        category: "Accessories",
        price: 1500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
        rating: 4.5,
        description: "Premium leather wallet with multiple compartments for cards and cash.",
        stock: 25
    },
    {
        id: 11,
        name: "Decorative Vase",
        category: "Home & Living",
        price: 1900,
        discount: 20,
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600",
        rating: 4.3,
        description: "Beautiful decorative vase that adds elegance to your home.",
        stock: 11
    },
    {
        id: 12,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 1700,
        discount: 10,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
        rating: 4.4,
        description: "Smooth and responsive wireless mouse suitable for work and study.",
        stock: 22
    },
    {
        id: 13,
        name: "Women's Watch",
        category: "Accessories",
        price: 2800,
        discount: 15,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
        rating: 4.6,
        description: "Elegant women's watch with a stylish design for every occasion.",
        stock: 8
    },
    {
        id: 14,
        name: "Casual T-Shirt",
        category: "Fashion",
        price: 1600,
        discount: 10,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
        rating: 4.2,
        description: "Comfortable casual t-shirt made for everyday wear.",
        stock: 30
    },
    {
        id: 15,
        name: "Table Clock",
        category: "Home & Living",
        price: 1300,
        discount: 5,
        image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600",
        rating: 4.1,
        description: "Simple and elegant table clock for your bedroom or office.",
        stock: 17
    }
];

function getDiscountedPrice(product) {
    return product.price - (product.price * product.discount / 100);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = count;
    }
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) {
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        if (existingProduct.quantity < product.stock) {
            existingProduct.quantity++;
        } else {
            alert("Sorry, stock limit reached.");
            return;
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: getDiscountedPrice(product),
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Product added to cart!");
}

function createProductCard(product) {
    const discountedPrice = getDiscountedPrice(product);

    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <div class="price">
                    <span class="discounted-price">Rs. ${discountedPrice.toFixed(0)}</span>
                    <span class="old-price">Rs. ${product.price}</span>
                </div>
                <p class="rating">★ ${product.rating}</p>
                <div class="product-buttons">
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                    <a href="product-details.html?id=${product.id}">View Details</a>
                </div>
            </div>
        </div>
    `;
}

function displayProducts(productList = products) {
    const container = document.getElementById("products-container");

    if (!container) {
        return;
    }

    if (productList.length === 0) {
        container.innerHTML = "<p class='no-products'>No products found.</p>";
        return;
    }

    container.innerHTML = productList.map(createProductCard).join("");
}

function displayFeaturedProducts() {
    const container = document.getElementById("featured-products");

    if (!container) {
        return;
    }

    const featuredProducts = products.slice(0, 6);

    container.innerHTML = featuredProducts.map(createProductCard).join("");
}

function applyFilters() {
    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const priceFilter = document.getElementById("price-filter");
    const sortFilter = document.getElementById("sort-filter");

    if (!categoryFilter || !priceFilter || !sortFilter) {
        return;
    }

    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    const sort = sortFilter.value;

    let filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "all" || product.category === category;

        let matchesPrice = true;

        if (priceRange === "under-2000") {
            matchesPrice = product.price < 2000;
        } else if (priceRange === "2000-4000") {
            matchesPrice = product.price >= 2000 && product.price <= 4000;
        } else if (priceRange === "4000-6000") {
            matchesPrice = product.price > 4000 && product.price <= 6000;
        } else if (priceRange === "above-6000") {
            matchesPrice = product.price > 6000;
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "low-high") {
        filteredProducts.sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));
    }

    if (sort === "high-low") {
        filteredProducts.sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));
    }

    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchInput = document.getElementById("search-input");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        window.location.href = "products.html";
        return;
    }

    window.location.href = "products.html?search=" + encodeURIComponent(searchText);
}

function loadSearchFromURL() {
    const params = new URLSearchParams(window.location.search);
    const searchText = params.get("search");

    if (!searchText) {
        return;
    }

    const productSearch = document.getElementById("product-search");

    if (productSearch) {
        productSearch.value = searchText;
        applyFilters();
    }
}

function displayProductDetails() {
    const container = document.getElementById("product-details");

    if (!container) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    const product = products.find(item => item.id === productId);

    if (!product) {
        container.innerHTML = `
            <div class="no-products">
                <h2>Product not found</h2>
                <a href="products.html">Back to Products</a>
            </div>
        `;
        return;
    }

    const discountedPrice = getDiscountedPrice(product);

    container.innerHTML = `
        <div class="details-container">
            <div class="details-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="details-info">
                <p class="category">${product.category}</p>
                <h1>${product.name}</h1>

                <p class="rating">★ ${product.rating} / 5</p>

                <div class="details-price">
                    <span class="discounted-price">Rs. ${discountedPrice.toFixed(0)}</span>
                    <span class="old-price">Rs. ${product.price}</span>
                    <span class="discount">${product.discount}% OFF</span>
                </div>

                <p class="description">${product.description}</p>

                <p class="stock">
                    <strong>Stock:</strong> ${product.stock} available
                </p>

                <div class="quantity-box">
                    <button onclick="changeDetailQuantity(-1)">−</button>
                    <input type="number" id="detail-quantity" value="1" min="1" max="${product.stock}">
                    <button onclick="changeDetailQuantity(1)">+</button>
                </div>

                <button class="add-cart-detail" onclick="addDetailProductToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>

        <div class="related-products">
            <h2>Related Products</h2>
            <div class="products-grid" id="related-products-container"></div>
        </div>
    `;

    displayRelatedProducts(product);
}

function changeDetailQuantity(change) {
    const quantityInput = document.getElementById("detail-quantity");

    if (!quantityInput) {
        return;
    }

    let quantity = Number(quantityInput.value) + change;
    const max = Number(quantityInput.max);

    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > max) {
        quantity = max;
    }

    quantityInput.value = quantity;
}

function addDetailProductToCart(productId) {
    const product = products.find(item => item.id === productId);
    const quantityInput = document.getElementById("detail-quantity");

    if (!product || !quantityInput) {
        return;
    }

    const quantity = Number(quantityInput.value);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        if (existingProduct.quantity + quantity > product.stock) {
            alert("Sorry, stock limit reached.");
            return;
        }

        existingProduct.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: getDiscountedPrice(product),
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Product added to cart!");
}

function displayRelatedProducts(product) {
    const container = document.getElementById("related-products-container");

    if (!container) {
        return;
    }

    const relatedProducts = products
        .filter(item => item.category === product.category && item.id !== product.id)
        .slice(0, 4);

    container.innerHTML = relatedProducts.map(createProductCard).join("");
}

function handleNewsletter() {
    const newsletterForm = document.getElementById("newsletter-form");

    if (!newsletterForm) {
        return;
    }

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input[type='email']");

        if (emailInput && emailInput.value.trim() !== "") {
            alert("Thank you for subscribing!");
            emailInput.value = "";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
    displayFeaturedProducts();
    displayProducts();
    loadSearchFromURL();
    displayProductDetails();
    handleNewsletter();

    const applyButton = document.getElementById("apply-filters");

    if (applyButton) {
        applyButton.addEventListener("click", applyFilters);
    }

    const productSearch = document.getElementById("product-search");

    if (productSearch) {
        productSearch.addEventListener("input", applyFilters);
    }

    const categoryFilter = document.getElementById("category-filter");

    if (categoryFilter) {
        categoryFilter.addEventListener("change", applyFilters);
    }

    const priceFilter = document.getElementById("price-filter");

    if (priceFilter) {
        priceFilter.addEventListener("change", applyFilters);
    }

    const sortFilter = document.getElementById("sort-filter");

    if (sortFilter) {
        sortFilter.addEventListener("change", applyFilters);
    }
});
