const phoneNumber = "22662885039"; // Numéro mis à jour par l'utilisateur

const products = [
    { name: "Royal Oak Gold Edition", price: 185000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=600" },
    { name: "Ocean Deep Silver", price: 95000, rating: 5, category: "Sport", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600" },
    { name: "Executive Precision", price: 75000, rating: 4, category: "Modern", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600" },
    { name: "Classic Heritage Leather", price: 45000, rating: 4, category: "Classic", img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600" },
    { name: "Cosmograph Zenith", price: 145000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600" },
    { name: "Nightshade Stealth", price: 62000, rating: 5, category: "Modern", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=600" },
    { name: "Golden Aura", price: 110000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600" },
    { name: "Marine Master", price: 88000, rating: 4, category: "Sport", img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=600" },
    { name: "Sapphire Horizon", price: 125000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600" },
    { name: "Minimalist Slate", price: 48000, rating: 4, category: "Modern", img: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=600" },
    { name: "Titanium Force", price: 135000, rating: 5, category: "Sport", img: "https://images.unsplash.com/photo-1619134769035-4700d8157e8d?q=80&w=600" },
    { name: "Rose Gold Elegance", price: 92000, rating: 5, category: "Classic", img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=600" },
    { name: "Chrono Sport Blue", price: 55000, rating: 4, category: "Sport", img: "https://images.unsplash.com/photo-1511200064560-639420db4024?q=80&w=600" },
    { name: "Presidential Platinum", price: 198000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1639037687661-301138865d21?q=80&w=600" },
    { name: "Explorer Pro", price: 78000, rating: 4, category: "Classic", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600" },
    { name: "Aero Precision", price: 68000, rating: 5, category: "Sport", img: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=600" },
    { name: "Vanguard Black", price: 115000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=600" },
    { name: "Heritage Brown", price: 42000, rating: 4, category: "Classic", img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=600" },
    { name: "Lunar Eclipse", price: 89000, rating: 5, category: "Modern", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600" },
    { name: "Starlight Ruby", price: 155000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=600" },
    { name: "Oceanic Blue Dial", price: 64000, rating: 4, category: "Sport", img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600" },
    { name: "Stealth Commander", price: 120000, rating: 5, category: "Modern", img: "https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=600" },
    { name: "Classic Gold Link", price: 85000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=600" },
    { name: "Executive Charcoal", price: 58000, rating: 4, category: "Modern", img: "https://images.unsplash.com/photo-1619134769035-4700d8157e8d?q=80&w=600" },
    { name: "Grand Master Skeleton", price: 210000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=600" },
    { name: "Urban Edge Silver", price: 49000, rating: 4, category: "Modern", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600" },
    { name: "Driver's Chrono", price: 72000, rating: 4, category: "Sport", img: "https://images.unsplash.com/photo-1511200064560-639420db4024?q=80&w=600" },
    { name: "Vintage Suede", price: 38000, rating: 4, category: "Classic", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600" },
    { name: "Diamond Orbit", price: 250000, rating: 5, category: "Luxury", img: "https://images.unsplash.com/photo-1639037687661-301138865d21?q=80&w=600" },
    { name: "Legacy Silver Oak", price: 105000, rating: 5, category: "Classic", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=600" }
];

let cart = [];

/**
 * Affiche les produits dans la grille
 * @param {Array} list - Liste des produits à afficher
 */
function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    list.forEach((p, i) => {
        let stars = "";
        for (let s = 0; s < 5; s++) {
            stars += `<i class="${s < p.rating ? "fa-solid" : "fa-regular"} fa-star"></i>`;
        }

        const productIndex = products.indexOf(p); // Important pour l'ajout au panier filtré

        container.innerHTML += `
            <div class="card" style="animation-delay: ${i * 0.05}s">
                <div class="card-img-container">
                    <div class="card-badge">${p.category}</div>
                    <img src="${p.img}" alt="${p.name}" loading="lazy" onclick="openZoom('${p.img}')">
                    <div class="card-overlay">
                        <i class="fa-solid fa-expand" style="color: white; font-size: 1.5rem;"></i>
                    </div>
                </div>
                <div class="card-content">
                    <div>
                        <h3>${p.name}</h3>
                        <div class="rating">${stars}</div>
                        <p class="price">${p.price.toLocaleString()} FCFA</p>
                    </div>
                    <button onclick="addToCart(${productIndex})">
                        <i class="fa-solid fa-cart-plus"></i> Ajouter au Panier
                    </button>
                </div>
            </div>
        `;
    });
}

/**
 * Ajoute un produit au panier
 * @param {number} index - Index du produit dans le tableau global products
 */
function addToCart(index) {
    cart.push(products[index]);
    updateCart();

    // Animation subtile sur l'icône du panier
    const cartIcon = document.querySelector('.fa-crown');
    cartIcon.classList.add('fa-bounce');
    setTimeout(() => cartIcon.classList.remove('fa-bounce'), 1000);
}

/**
 * Met à jour l'affichage du panier et le total
 */
function updateCart() {
    const itemsContainer = document.getElementById("cartItems");
    const countSpan = document.getElementById("cartCount");
    const totalSpan = document.getElementById("totalPrice");

    itemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((p, index) => {
        total += p.price;
        itemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${p.img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                <div class="cart-item-info">
                    <div class="cart-item-name">${p.name}</div>
                    <div class="cart-item-price">${p.price.toLocaleString()} FCFA</div>
                </div>
                <i class="fas fa-trash" style="cursor: pointer; color: #555; font-size: 0.8rem;" onclick="removeFromCart(${index})"></i>
            </div>
        `;
    });

    countSpan.innerText = cart.length;
    totalSpan.innerText = `${total.toLocaleString()} FCFA`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const panel = document.getElementById("cartPanel");
    panel.classList.toggle("active");
}

/**
 * Zoom Image
 */
function openZoom(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modalImg.src = imgSrc;
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Empêche le scroll
}

function closeZoom() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

/**
 * Affiche/Cache le menu mobile
 */
function toggleMobileMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("active");
}

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navbar").classList.remove("active");
    });
});

/**
 * Gestion du Thème (Sombre / Clair)
 */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function filterProducts() {
    const value = document.getElementById("priceFilter").value;

    if (value === "all") {
        displayProducts(products);
        return;
    }

    const maxPrice = parseInt(value);
    const filtered = products.filter(p => p.price <= maxPrice);
    displayProducts(filtered);
}

function orderWhatsApp() {
    if (cart.length === 0) {
        alert("Votre sélection est vide. Explorez notre catalogue pour commencer.");
        return;
    }

    let message = "*%F0%9F%9B%8D%EF%B8%8F NOUVELLE COMMANDE - ADAMS LUXURY*%0A%0A";
    let total = 0;

    cart.forEach(p => {
        message += `%E2%80%A2 *${p.name}* - ${p.price.toLocaleString()} FCFA%0A`;
        total += p.price;
    });

    message += `%0A*TOTAL : ${total.toLocaleString()} FCFA*%0A%0A_Merci de confirmer ma commande._`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
}

window.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
