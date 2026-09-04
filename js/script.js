const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 12500,
        discount: 20,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
        rating: 4.8,
        description: "Premium wireless headphones with comfortable cushions, clear sound and long-lasting battery life.",
        stock: 18
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        category: "Electronics",
        price: 18900,
        discount: 15,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
        rating: 4.7,
        description: "Modern smartwatch designed for fitness tracking, notifications and everyday convenience.",
        stock: 12
    },
    {
        id: 3,
        name: "Minimal Leather Bag",
        category: "Fashion",
        price: 8500,
        discount: 25,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80",
        rating: 4.9,
        description: "Elegant leather bag with a spacious interior and timeless minimalist design.",
        stock: 25
    },
    {
        id: 4,
        name: "Classic Sneakers",
        category: "Shoes",
        price: 7200,
        discount: 20,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
        rating: 4.6,
        description: "Comfortable everyday sneakers featuring a lightweight design and durable sole.",
        stock: 30
    },
    {
        id: 5,
        name: "Premium Sunglasses",
        category: "Accessories",
        price: 4500,
        discount: 10,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
        rating: 4.5,
        description: "Stylish sunglasses with a modern frame suitable for everyday wear.",
        stock: 40
    },
    {
        id: 6,
        name: "Ceramic Coffee Set",
        category: "Home & Living",
        price: 3900,
        discount: 15,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80",
        rating: 4.7,
        description: "Beautiful ceramic coffee set that brings a sophisticated touch to your kitchen.",
        stock: 20
    },
    {
        id: 7,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 6900,
        discount: 18,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
        rating: 4.6,
        description: "Compact Bluetooth speaker with powerful audio and portable design.",
        stock: 16
    },
    {
        id: 8,
        name: "Cotton Casual Shirt",
        category: "Fashion",
        price: 4200,
        discount: 12,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80",
        rating: 4.4,
        description: "Soft cotton casual shirt designed for comfort and effortless everyday style.",
        stock: 35
    },
    {
        id: 9,
        name: "Running Shoes",
        category: "Shoes",
        price: 9800,
        discount: 22,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
        rating: 4.8,
        description: "Lightweight running shoes with cushioned support for active lifestyles.",
        stock: 22
    },
    {
        id: 10,
        name: "Classic Wrist Watch",
        category: "Accessories",
        price: 7600,
        discount: 17,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
        rating: 4.7,
        description: "Classic wrist watch with a refined design that works for formal and casual outfits.",
        stock: 14
    },
    {
        id: 11,
        name: "Modern Table Lamp",
        category: "Home & Living",
        price: 5500,
        discount: 20,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
        rating: 4.5,
        description: "Modern table lamp offering warm lighting and a clean contemporary look.",
        stock: 19
    },
    {
        id: 12,
        name: "Smartphone Stand",
        category: "Accessories",
        price: 2200,
        discount: 10,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=80",
        rating: 4.3,
        description: "Adjustable smartphone stand perfect for desks, video calls and entertainment.",
        stock: 50
    },
    {
        id: 13,
        name: "Wireless Keyboard",
        category: "Electronics",
        price: 5900,
        discount: 15,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
        rating: 4.6,
        description: "Slim wireless keyboard with comfortable keys and a clean professional design.",
        stock: 28
    },
    {
        id: 14,
        name: "Decorative Cushion",
        category: "Home & Living",
        price: 2800,
        discount: 12,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
        rating: 4.4,
        description: "Soft decorative cushion designed to add comfort and style to your living space.",
        stock: 45
    },
    {
        id: 15,
        name: "Everyday Denim Jacket",
        category: "Fashion",
        price: 8900,
        discount: 20,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
        rating: 4.8,
        description: "Versatile denim jacket with a classic fit and durable everyday construction.",
        stock: 17
    }
];

function discountedPrice(product) {
    return Math.round(product.price - (product.price * product.discount / 100));
}

function formatPrice(price) {
    return "Rs. " + price.toLocaleString("en-PK");
}

function getCart() {
    return JSON.parse(localStorage.getItem("shoporaCart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("shoporaCart", JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.querySelectorAll(".cart-count").forEach(counter => {
        counter.textContent = total;
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const cart = getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity
        });
    }

    saveCart(cart);
    updateCartCount();
    showToast(product.name + " added to cart");
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
    updateCartCount();
}

function changeCartQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart(cart);
    renderCart();
    updateCartCount();
}

function productCard(product) {
    const finalPrice = discountedPrice(product);

    return `
        <article class="product-card">
            <a href="product-details.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : ""}
                </div>
            </a>

            <div class="product-info">
                <span class="product-category">${product.category}</span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ★★★★★ <span>(${product.rating})</span>
                </div>

                <div class="price-row">
                    <span class="current-price">${formatPrice(finalPrice)}</span>
                    <span class="old-price">${formatPrice(product.price)}</span>
                </div>

                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                    <a class="btn btn-outline" href="product-details.html?id=${product.id}">
                        Details
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderFeaturedProducts() {
    const container = document.getElementById("featured-products");

    if (!container) return;

    container.innerHTML = products
        .slice(0, 4)
        .map(productCard)
        .join("");
}

function renderProducts(list = products) {
    const container = document.getElementById("all-products");

    if (!container) return;

    const count = document.getElementById("product-count");

    if (count) {
        count.textContent = `Showing ${list.length} of ${products.length} products`;
    }

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <h2>No products found</h2>
                <p>Try changing your search or filters.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(productCard).join("");
}

function applyFilters() {
    let result = [...products];

    const searchInput = document.getElementById("product-search");
    const categoryFilter = document.getElementById("category-filter");
    const priceFilter = document.getElementById("price-filter");
    const sortFilter = document.getElementById("sort-filter");

    const search = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const category = categoryFilter ? categoryFilter.value : "all";
    const maxPrice = priceFilter ? Number(priceFilter.value) : 100000;
    const sort = sortFilter ? sortFilter.value : "default";

    if (search) {
        result = result.filter(product =>
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search)
        );
    }

    if (category !== "all") {
        result = result.filter(product => product.category === category);
    }

    result = result.filter(product => discountedPrice(product) <= maxPrice);

    if (sort === "low") {
        result.sort((a, b) => discountedPrice(a) - discountedPrice(b));
    }

    if (sort === "high") {
        result.sort((a, b) => discountedPrice(b) - discountedPrice(a));
    }

    if (sort === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(result);
}

function resetFilters() {
    const search = document.getElementById("product-search");
    const category = document.getElementById("category-filter");
    const price = document.getElementById("price-filter");
    const sort = document.getElementById("sort-filter");
    const priceValue = document.getElementById("price-value");

    if (search) search.value = "";
    if (category) category.value = "all";
    if (price) price.value = 100000;
    if (sort) sort.value = "default";
    if (priceValue) priceValue.textContent = "Rs. 100,000";

    renderProducts(products);
}

function loadCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    const categoryFilter = document.getElementById("category-filter");

    if (category && categoryFilter) {
        categoryFilter.value = category;
    }
}

function renderProductDetails() {
    const container = document.getElementById("product-detail");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id")) || 1;

    const product = products.find(p => p.id === id);

    if (!product) {
        container.innerHTML = `
            <div class="empty-cart">
                <h2>Product not found</h2>
                <a href="products.html" class="btn btn-primary">Back to Products</a>
            </div>
        `;
        return;
    }

    const finalPrice = discountedPrice(product);

    container.innerHTML = `
        <div class="detail-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="detail-info">
            <span class="product-category">${product.category}</span>

            <h1>${product.name}</h1>

            <div class="rating">
                ★★★★★ (${product.rating})
            </div>

            <div>
                <span class="detail-price">${formatPrice(finalPrice)}</span>
                <span class="detail-old-price">${formatPrice(product.price)}</span>
            </div>

            <p class="stock">
                ${product.stock} items available
            </p>

            <p class="detail-description">
                ${product.description}
            </p>

            <div class="quantity-selector">
                <button onclick="changeDetailQuantity(-1)">−</button>
                <input id="detail-quantity" value="1" min="1" max="${product.stock}" readonly>
                <button onclick="changeDetailQuantity(1)">+</button>
            </div>

            <button class="btn btn-primary"
                onclick="addDetailProductToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    renderRelatedProducts(product);
}

function changeDetailQuantity(change) {
    const input = document.getElementById("detail-quantity");

    if (!input) return;

    let quantity = Number(input.value);
    const max = Number(input.max);

    quantity += change;

    if (quantity < 1) quantity = 1;
    if (quantity > max) quantity = max;

    input.value = quantity;
}

function addDetailProductToCart(productId) {
    const quantityInput = document.getElementById("detail-quantity");
    const quantity = Number(quantityInput ? quantityInput.value : 1);

    addToCart(productId, quantity);
}

function renderRelatedProducts(product) {
    const container = document.getElementById("related-products");

    if (!container) return;

    const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    container.innerHTML = related.map(productCard).join("");
}

function renderCart() {
    const container = document.getElementById("cart-page");

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>You haven't added anything to your shopping cart yet.</p>
                <a href="products.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    let subtotal = 0;
    let totalItems = 0;

    const itemsHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return "";

        const price = discountedPrice(product);
        const itemTotal = price * item.quantity;

        subtotal += itemTotal;
        totalItems += item.quantity;

        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}">

                <div>
                    <h3>${product.name}</h3>
                    <p>${product.category}</p>
                    <p>${formatPrice(price)} each</p>
                </div>

                <div class="cart-quantity">
                    <button onclick="changeCartQuantity(${product.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeCartQuantity(${product.id}, 1)">+</button>
                </div>

                <div>
                    <strong>${formatPrice(itemTotal)}</strong>
                    <br>
                    <button class="remove-btn"
                        onclick="removeFromCart(${product.id})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    }).join("");

    const shipping = subtotal >= 5000 ? 0 : 300;
    const total = subtotal + shipping;

    container.innerHTML = `
        <div class="cart-layout">

            <div class="cart-items">
                ${itemsHTML}
            </div>

            <aside class="summary-card">
                <h2>Order Summary</h2>

                <div class="summary-row">
                    <span>Total Items</span>
                    <span>${totalItems}</span>
                </div>

                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>

                <div class="summary-row">
                    <span>Shipping</span>
                    <span>${shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
                </div>

                <div class="summary-row summary-total">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                </div>

                <a href="checkout.html" class="btn btn-primary">
                    Proceed to Checkout
                </a>
            </aside>

        </div>
    `;
}

function renderCheckoutSummary() {
    const container = document.getElementById("checkout-summary");

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <h2>Your cart is empty</h2>
            <p>Add products before checking out.</p>
            <a href="products.html" class="btn btn-primary">Shop Products</a>
        `;
        return;
    }

    let subtotal = 0;

    const itemsHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return "";

        const price = discountedPrice(product);
        const total = price * item.quantity;

        subtotal += total;

        return `
            <div class="summary-row">
                <span>${product.name} × ${item.quantity}</span>
                <strong>${formatPrice(total)}</strong>
            </div>
        `;
    }).join("");

    const shipping = subtotal >= 5000 ? 0 : 300;
    const total = subtotal + shipping;

    container.innerHTML = `
        <h2>Order Summary</h2>

        ${itemsHTML}

        <div class="summary-row">
            <span>Subtotal</span>
            <strong>${formatPrice(subtotal)}</strong>
        </div>

        <div class="summary-row">
            <span>Shipping</span>
            <strong>${shipping === 0 ? "FREE" : formatPrice(shipping)}</strong>
        </div>

        <div class="summary-row summary-total">
            <span>Total</span>
            <strong>${formatPrice(total)}</strong>
        </div>
    `;
}

function handleCheckout(event) {
    event.preventDefault();

    const cart = getCart();

    if (cart.length === 0) {
        showToast("Your cart is empty");
        return;
    }

    const form = event.target;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postal = document.getElementById("postal").value.trim();

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    ).value;

    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);

        if (product) {
            subtotal += discountedPrice(product) * item.quantity;
        }
    });

    const shipping = subtotal >= 5000 ? 0 : 300;
    const total = subtotal + shipping;

    const order = {
        orderNumber: "SH-" + Date.now().toString().slice(-8),
        customer: {
            name,
            email,
            phone,
            address,
            city,
            postal
        },
        payment,
        products: cart,
        total
    };

    localStorage.setItem("shoporaOrder", JSON.stringify(order));

    localStorage.removeItem("shoporaCart");

    form.reset();

    window.location.href = "confirmation.html";
}

function renderConfirmation() {
    const container = document.getElementById("confirmation");

    if (!container) return;

    const order = JSON.parse(localStorage.getItem("shoporaOrder"));

    if (!order) {
        container.innerHTML = `
            <div class="confirmation-card">
                <h1>No order found</h1>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        return;
    }

    const productsHTML = order.products.map(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return "";

        return `
            <p>
                <strong>${product.name}</strong>
                × ${item.quantity}
            </p>
        `;
    }).join("");

    container.innerHTML = `
        <div class="confirmation-card">

            <div class="success-icon">✓</div>

            <p class="eyebrow">ORDER SUCCESSFUL</p>

            <h1>Thank You For Your Order!</h1>

            <p>
                Your order has been successfully placed.
                We will process it shortly.
            </p>

            <div class="order-details">

                <p>
                    <strong>Order Number:</strong>
                    ${order.orderNumber}
                </p>

                <p>
                    <strong>Customer:</strong>
                    ${order.customer.name}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${order.customer.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${order.customer.phone}
                </p>

                <p>
                    <strong>Address:</strong>
                    ${order.customer.address}, ${order.customer.city}
                </p>

                <p>
                    <strong>Payment:</strong>
                    ${order.payment}
                </p>

                <hr>

                <h3>Ordered Products</h3>

                ${productsHTML}

                <p>
                    <strong>Total Amount:</strong>
                    ${formatPrice(order.total)}
                </p>

            </div>

            <a href="products.html" class="btn btn-primary">
                Continue Shopping
            </a>

        </div>
    `;
}

function showToast(message) {
    const oldToast = document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

function subscribeNewsletter(event) {
    event.preventDefault();
    showToast("Thank you for subscribing!");
    event.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

    renderFeaturedProducts();

    loadCategoryFromURL();

    renderProducts();

    renderProductDetails();

    renderCart();

    renderCheckoutSummary();

    renderConfirmation();

    const search = document.getElementById("product-search");
    const category = document.getElementById("category-filter");
    const price = document.getElementById("price-filter");
    const sort = document.getElementById("sort-filter");
    const checkoutForm = document.getElementById("checkout-form");

    if (search) {
        search.addEventListener("input", applyFilters);
    }

    if (category) {
        category.addEventListener("change", applyFilters);
    }

    if (price) {
        price.addEventListener("input", () => {
            const priceValue = document.getElementById("price-value");

            if (priceValue) {
                priceValue.textContent = formatPrice(Number(price.value));
            }

            applyFilters();
        });
    }

    if (sort) {
        sort.addEventListener("change", applyFilters);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleCheckout);
    }
});
