document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const signupBtn = document.getElementById("signup-btn");
    const formContainer = document.getElementById("form-container");
    const submitBtn = document.getElementById("submit-btn");
    // const successMessage = document.getElementById("success-message");
    const userDetails = document.getElementById("user-details");

    // Create a popup container for user details
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    popupContainer.style.display = "none"; 
    document.body.appendChild(popupContainer);

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault();
        formContainer.style.display = "flex";
        navLinks.classList.remove("active");
    });

    formContainer.addEventListener("click", function (event) {
        if (event.target === formContainer) {
            formContainer.style.display = "none";
        }
    });

    submitBtn.addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let phone = document.getElementById("phone").value.trim();

        if (!name || !email || !password || !phone) {
            alert("Enter all details!");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        // successMessage.textContent = "Successfully Signed Up!";
        formContainer.style.display = "none";

        let maskedPassword = "*".repeat(password.length);

        // Show popup with user details
        popupContainer.innerHTML = `
            <div class="popup-box">
                <h2>User Details</h2>
                <div class="popup-content">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Password:</strong> ${maskedPassword}</p>
                </div>
                <button class="close-popup">Close</button>
            </div>
        `;
        popupContainer.style.display = "flex";

        document.querySelector(".close-popup").addEventListener("click", function () {
            popupContainer.style.display = "none";
        });

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("phone").value = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".banner img");
    const totalImages = images.length;
    const womensFashionButton = document.getElementById("womens-fashion");
    const mensFashionButton = document.getElementById("mens-fashion");
    const ElectronicsButton = document.getElementById("Electronics");

    // Function to show images in the slider
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    // Initially show the first image
    showImage(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(nextImage, 3000);

    // Redirect to Fashion Page on Click
    womensFashionButton.addEventListener("click", function () {
        window.location.href = "Fashion/index1.html";
    });

    mensFashionButton.addEventListener("click", function () {
        window.location.href = "Men fashion/index2.html"; 
    });

    ElectronicsButton.addEventListener("click", function () {
        window.location.href = "Electrical/index3.html"; 
    });

  
});





const products = [
    { name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: "$160", rating: 4, images: ["assets/Frame 611.png", "assets/Frame 612.png"] },
    { name: "AK-900 Wired Keyboard", price: "$960", oldPrice: "$1180", rating: 5, images: ["assets/Frame 612.png", "assets/Frame 613.png"] },
    { name: "IPS LCD Gaming Monitor", price: "$370", oldPrice: "$400", rating: 4, images: ["assets/Frame 613.png", "assets/Frame 614.png"] },
    { name: "S-Series Comfort Chair", price: "$375", oldPrice: "$400", rating: 5, images: ["assets/Frame 614.png", "assets/Frame 604.png"] },
    { name: "CANON EOS DSLR Camera", price: "$375", oldPrice: "$400", rating: 4, images: ["assets/Frame 604.png", "assets/Frame 608.png"] },
    { name: "Jr. Zoom Soccer Cleats", price: "$375", oldPrice: "$400", rating: 5, images: ["assets/Frame 608.png", "assets/Frame 608 (1).png"] },
    { name: "Quilted Satin Jacket", price: "$375", oldPrice: "$400", rating: 4, images: ["assets/Frame 608 (1).png", "assets/Frame 610.png"] },
    { name: "AK-900 Wired Keyboard", price: "$375", oldPrice: "$400", rating: 5, images: ["assets/Frame 610.png", "assets/Frame 611.png"] },
    { name: "The north coat", price: "$260", oldPrice: "$360", rating: 5, images: ["assets/Frame 605.png", "assets/Frame 606.png"] },
    { name: "Gucci duffle bag", price: "$960", oldPrice: "$1160", rating: 5, images: ["assets/Frame 606.png", "assets/Frame 611.png"] }

];

const productContainer = document.getElementById("productContainer");


const allProducts = [...products, ...products]; 


productContainer.innerHTML = allProducts.map((product, index) => {
    const oldPrice = parseFloat(product.oldPrice.replace("$", ""));
    const newPrice = parseFloat(product.price.replace("$", ""));
    const discountPercent = Math.round(((oldPrice - newPrice) / oldPrice) * 100);

    return `
        <div class="product">
            <div class="image-box">
                <img src="${product.images[0]}" alt="${product.name}" id="productImage-${index}" data-index="0">
                 ${discountPercent > 0 ? `<div class="discount">-${discountPercent}%</div>` : ""}
                <div class="icons">
                    <i class="far fa-heart"></i>
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <p class="name">${product.name}</p>
            <p class="price">${product.price} <span class="old-price">${product.oldPrice}</span></p>
            <p class="stars">
                ${Array(5).fill(0).map((_, i) => 
                    `<i class="fas fa-star" style="color: ${i < product.rating ? "gold" : "#ddd"};"></i>`
                ).join("")}
            </p>
        </div>
    `;
}).join("");




let index = 0;
const productWidth = document.querySelector(".product").offsetWidth + 20; 

function slideProducts() {
    index++;
    productContainer.style.transition = "transform 1s ease-in-out"; 
    productContainer.style.transform = `translateX(-${index * productWidth}px)`;

    
    setTimeout(() => {
        if (index >= products.length) {
            productContainer.style.transition = "none";
            
            productContainer.style.transform = `translateX(0)`; 
            index = 0;
        }
    }, 1000);
}


setInterval(slideProducts, 3000);

const categories = [
    { name: "Phones", image: "assets/Category-CellPhone.png" },
    { name: "Computers", image: "assets/Category-Computer.png" },
    { name: "SmartWatch", image: "assets/Category-SmartWatch.png" },
    { name: "Camera", image: "assets/Category-Camera.png", active: true }, 
    { name: "HeadPhones", image: "assets/Category-Headphone.png" },
    { name: "Gaming", image: "assets/Category-Gamepad.png" }
];

const categoryContainer = document.getElementById("categoryContainer");


categoryContainer.innerHTML = categories.map(category => `
    <div class="category ${category.active ? 'active' : ''}" onclick="setActiveCategory(this)">
        <img src="${category.image}" alt="${category.name}">
        <p>${category.name}</p>
    </div>
`).join("");

function setActiveCategory(element) {
    document.querySelectorAll(".category").forEach(cat => cat.classList.remove("active"));
    element.classList.add("active");
}

let scrollAmount = 0;
const scrollContainer = document.querySelector(".categories-wrapper");

document.getElementById("leftArrow").addEventListener("click", () => {
    scrollAmount -= 200;
    scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

document.getElementById("rightArrow").addEventListener("click", () => {
    scrollAmount += 200;
    scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
});


const productList = [
    { name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: "$160", rating: 4, images: "assets/Frame 611.png" }, 
    { name: "AK-900 Wired Keyboard", price: "$960", oldPrice: "$1180", rating: 5, images: "assets/Frame 612.png" }, 
    { name: "IPS LCD Gaming Monitor", price: "$370", oldPrice: "$400", rating: 4, images: "assets/Frame 613.png" }, 
    { name: "S-Series Comfort Chair", price: "$375", oldPrice: "$400", rating: 5, images: "assets/Frame 614.png" }, 
    { name: "CANON EOS DSLR Camera", price: "$375", oldPrice: "$400", rating: 4, images: "assets/Frame 604.png" }, 
    { name: "Jr. Zoom Soccer Cleats", price: "$375", oldPrice: "$400", rating: 5, images: "assets/Frame 608.png" }, 
    { name: "Quilted Satin Jacket", price: "$375", oldPrice: "$400", rating: 4, images: "assets/Frame 608 (1).png" }, 
    { name: "AK-900 Wired Keyboard", price: "$375", oldPrice: "$400", rating: 5, images: "assets/Frame 610.png" }, 
    { name: "The north coat", price: "$260", oldPrice: "$360", rating: 4, images: "assets/Frame 605.png" }, 
    { name: "Gucci duffle bag", price: "$960", oldPrice: "$1160", rating: 5, images: "assets/Frame 606.png" },
    { name: "Small BookSelf", price: "$360", oldPrice: "$1160", rating: 4, images: "assets/Frame 612 (1).png" },
    { name: "ASUS FHD Gaming Laptop", price: "$160", oldPrice: "$1260", rating: 5, images: "assets/Frame 604 (1).png" }

];

let currentIndex = 0; // Start from the first item
const productsPerLoad = 4;
const container = document.getElementById("productContainer1");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function generateStars(rating) {
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
        starsHtml += i < rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    return starsHtml;
}

function loadProducts() {
    // If the last 4 images are displayed, reset to the first 4
    if (currentIndex >= productList.length) {
        currentIndex = 0;
        container.innerHTML = ""; // Clear container
    }

    const nextProducts = productList.slice(currentIndex, currentIndex + productsPerLoad);
    nextProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product1");
        productDiv.innerHTML = `
            <div class="image-box1">
                <div class="icons">
                    <i class="far fa-heart"></i>
                    <i class="far fa-eye"></i>
                </div>
                <img src="${product.images}" alt="${product.name}">
            </div>
            <h3>${product.name}</h3>
            <p><del>${product.oldPrice}</del> <strong>${product.price}</strong></p>
            <p class="stars">${generateStars(product.rating)} <span>(65)</span></p>
        `;
        container.appendChild(productDiv);
    });

    currentIndex += productsPerLoad;
}

// Load the initial 4 products
loadProducts();

loadMoreBtn.addEventListener("click", function () {
    loadProducts();
});


document.getElementById("buyNowBtn").addEventListener("click", function() {
    // Reset input fields before showing the popup
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";

    // Show the first popup
    document.getElementById("popup1").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("buyBtn").addEventListener("click", function() {
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;

    if (productName && productPrice) {
        // Set success message
        document.getElementById("successMessage").innerText = `You have successfully purchased ${productName} for $${productPrice}!`;

        // Close first popup and show the confirmation popup
        closePopup("popup1");
        document.getElementById("popup2").style.display = "block";
    } else {
        alert("Please enter both product name and price.");
    }
});

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

const Products = [
    { name: "Breed Dry Dog Food", price: "$1000", rating: 3, img: "./assets/Frame 604 (3).png" },
    { name: "CANON EOS DSLR Camera", price: "$360", rating: 4, img: "./assets/Frame 604.png" },
    { name: "ASUS FHD Gaming Laptop", price: "$700", rating: 5, img: "./assets/Frame 604 (1).png" },
    { name: "Curology Product Set", price: "$500", rating: 4, img: "./assets/curology-j7pKVQrTUsM-unsplash 1.png" },
    { name: "Kids Electric Car", price: "$960", rating: 5, img: "./assets/Frame 608 (2).png" },
    { name: "Jr. Zoom Soccer Cleats", price: "$1160", rating: 5, img: "./assets/Frame 608.png" },
    { name: "GP11 Shooter USB Gamepad", price: "$660", rating: 4.5, img: "./assets/Frame 608 (3).png" },
    { name: "Quilted Satin Jacket", price: "$600", rating: 4.5, img: "./assets/Frame 608 (1).png" }
];

function generateStars(rating) {
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
        starsHtml += `<i class="fas fa-star ${i <= rating ? 'filled' : ''}"></i>`;
    }
    return starsHtml;
}

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    Products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        <div class="image-box2">
            <div class="icons">
                <i class="far fa-heart"></i>
                <i class="fas fa-eye"></i>
            </div>
            <img src="${product.img}" alt="${product.name}" onclick="openModal(${index})">
            </div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
            <div class="stars">${generateStars(product.rating)}</div>
        `;
        productList.appendChild(productCard);
    });
}

function openModal(index) {
    const product = Products[index]; // Fix variable name
    document.getElementById("modal-img").src = product.img;
    document.getElementById("modal-name").textContent = product.name;
    document.getElementById("modal-price").textContent = product.price;
    document.getElementById("product-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}

renderProducts();

const images = [
    { 
        src: "./assets/ps5-slim-goedkope-playstation_large 1.png", 
        title: "PlayStation 5", 
        description: "Black and White version of the PS5 coming out on sale.",
        class: "img1"
    },
    { 
        src: "./assets/attractive-woman-wearing-hat-posing-black-background 1.png", 
        title: "Women's Collection", 
        description: "Featured woman collections that give you another vibe.",
        class: "img2"
    },
    { 
        src: "./assets/Frame 707.png", 
        title: "Speakers", 
        description: "Amazon wireless speakers.", 
        class: "img3"
    },
    { 
        src: "./assets/Frame 706.png", 
        title: "Perfume", 
        description: "GUCCI INTENSE OUD EDP.", 
        class: "img4"
    }
];

const gallery = document.getElementById("gallery");

images.forEach((imgObj) => {
    const div = document.createElement("div");
    div.className = `gallery-item ${imgObj.class}`;
    
    const img = document.createElement("img");
    img.src = imgObj.src;
    img.alt = imgObj.title;
    img.onclick = () => openFullscreen(imgObj.src);

    const textOverlay = document.createElement("div");
    textOverlay.className = "text-overlay";
    textOverlay.innerHTML = `
        <h3>${imgObj.title}</h3>
        <p>${imgObj.description}</p>
        <a href="#" class="shop-link">Shop Now</a>
    `;

    div.appendChild(img);
    div.appendChild(textOverlay);
    gallery.appendChild(div);
});

function openFullscreen(src) {
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenImg = document.getElementById("fullscreenImg");
    fullscreenImg.src = src;
    fullscreen.classList.add("active");
}

function closeFullscreen() {
    document.getElementById("fullscreen").classList.remove("active");
}

const services = [
    { 
        icon: `<i class="fas fa-shipping-fast"></i>`, 
        title: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
        
    },
    { 
        icon: `<i class="fas fa-headset"></i>`, 
        title: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
        
    },
    { 
        icon: `<i class="fas fa-check"></i>`, 
        title: "MONEY BACK GUARANTEE",
        description: "We return money within 30 days",
    }
];

const servicesContainer = document.getElementById("services");

services.forEach(service => {
    const serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service-item");

    serviceDiv.innerHTML = `
        <div class="outer-circle">
            <div class="icon-circle" style="background-color: ${service.color};">
                ${service.icon}
            </div>
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;

    servicesContainer.appendChild(serviceDiv);
});

const footerData = [
    {
        title: "Exclusive",
        items: [
            { type: "text", value: "Subscribe", class: "subscribe-title" },
            { type: "text", value: "Get 10% off your first order", class: "subscribe-desc" },
            { type: "input", placeholder: "Enter your email", icon: "fa-paper-plane", class: "subscribe-input" }
        ]
    },
    {
        title: "Support",
        items: [
            { type: "text", value: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." },
            { type: "text", value: "exclusive@gmail.com" },
            { type: "text", value: "+88015-88888-9999" }
        ]
    },
    {
        title: "Account",
        items: [
            { type: "link", value: "My Account" },
            { type: "link", value: "Login / Register" },
            { type: "link", value: "Cart" },
            { type: "link", value: "Wishlist" },
            { type: "link", value: "Shop" }
        ]
    },
    {
        title: "Quick Link",
        items: [
            { type: "link", value: "Privacy Policy" },
            { type: "link", value: "Terms Of Use" },
            { type: "link", value: "FAQ" },
            { type: "link", value: "Contact" }
        ]
    },
    {
        title: "Download App",
        items: [
            { type: "text", value: "Save $3 with App New User Only", class: "app-desc" },
            { type: "image", src: "./assets/Qrcode 1.png", alt: "QR Code" },
            { type: "image", src: "./assets/google play store.png", alt: "Google Play" },
            { type: "image", src: "./assets/download-appstore.png", alt: "App Store" },
            { type: "social", icons: ["facebook", "twitter", "instagram", "linkedin"], class: "social-icons" }
        ]
    }
];

const footerContainer = document.getElementById("footer");

footerData.forEach(section => {
    const div = document.createElement("div");
    div.className = "footer-section";

    const title = document.createElement("h3");
    title.textContent = section.title;
    div.appendChild(title);

    let imageContainer = null;
    let appButtons = null;

    section.items.forEach(item => {
        if (item.type === "text") {
            const p = document.createElement("p");
            p.textContent = item.value;
            if (item.class) p.classList.add(item.class);
            div.appendChild(p);
        } else if (item.type === "input") {
            const inputDiv = document.createElement("div");
            inputDiv.className = "subscribe-box";

            const input = document.createElement("input");
            input.placeholder = item.placeholder;
            input.className = "email-input";
            inputDiv.appendChild(input);

            const icon = document.createElement("i");
            icon.className = `fas ${item.icon} subscribe-icon`;
            inputDiv.appendChild(icon);

            div.appendChild(inputDiv);
        } else if (item.type === "link") {
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = item.value;
            div.appendChild(a);
        } else if (item.type === "image") {
            if (!imageContainer) {
                imageContainer = document.createElement("div");
                imageContainer.className = "app-download";
                div.appendChild(imageContainer);
            }

            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt;

            if (item.alt === "QR Code") {
                img.classList.add("qr-code");
                imageContainer.appendChild(img);
            } else {
                if (!appButtons) {
                    appButtons = document.createElement("div");
                    appButtons.className = "app-buttons";
                    imageContainer.appendChild(appButtons);
                }
                appButtons.appendChild(img);
            }
        } else if (item.type === "social") {
            const socialDiv = document.createElement("div");
            socialDiv.className = "social-icons";
            item.icons.forEach(icon => {
                const i = document.createElement("i");
                i.className = `fab fa-${icon}`;
                socialDiv.appendChild(i);
            });
            div.appendChild(socialDiv);
        }
    });

    footerContainer.appendChild(div);
});
