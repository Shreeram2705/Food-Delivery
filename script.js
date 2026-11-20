const dishes = [
  { id: "masala-dosa", name: "Ghee podi masala dosa", restaurant: "Annapoorna Tiffin House", category: "Tiffin", price: 149, oldPrice: 179, rating: "4.9", tag: "BESTSELLER", offer: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=760&q=82", alt: "Golden dosa with chutneys" },
  { id: "idli-vada", name: "Idli, vada & chutney", restaurant: "Malli's Kitchen", category: "Tiffin", price: 99, rating: "4.8", tag: "FRESH PICK", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=760&q=82", alt: "South Indian breakfast platter" },
  { id: "pongal", name: "Ven pongal & sambar", restaurant: "Annapoorna Tiffin House", category: "Tiffin", price: 119, rating: "4.7", image: "https://images.unsplash.com/photo-1626500155537-93690c24099e?auto=format&fit=crop&w=760&q=82", alt: "Comforting Indian rice dish" },
  { id: "poori", name: "Poori masala", restaurant: "Malli's Kitchen", category: "Tiffin", price: 129, rating: "4.8", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=760&q=82", alt: "Freshly made Indian breakfast" },
  { id: "chicken-biryani", name: "Thalappakatti chicken biryani", restaurant: "The Biryani Room", category: "Lunch", price: 269, oldPrice: 299, rating: "4.9", tag: "HOUSE FAVOURITE", offer: true, image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=760&q=82", alt: "Fragrant chicken biryani" },
  { id: "veg-meals", name: "Tamil Nadu veg meals", restaurant: "Malli's Kitchen", category: "Lunch", price: 189, rating: "4.8", tag: "COMFORT FOOD", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=760&q=82", alt: "Traditional Indian thali meal" },
  { id: "fish-meals", name: "Kongu fish curry meals", restaurant: "Namma Ooru Kitchen", category: "Lunch", price: 249, rating: "4.7", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=760&q=82", alt: "Fish curry with rice" },
  { id: "paneer-bowl", name: "Paneer tikka rice bowl", restaurant: "The Curry Leaf", category: "Lunch", price: 219, rating: "4.6", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=760&q=82", alt: "Indian rice bowl with vegetables" },
  { id: "parotta", name: "Kothu parotta", restaurant: "Namma Ooru Kitchen", category: "Dinner", price: 179, rating: "4.8", tag: "LATE NIGHT LOVE", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=760&q=82", alt: "Spiced Indian dinner dish" },
  { id: "butter-chicken", name: "Butter chicken & naan", restaurant: "The Curry Leaf", category: "Dinner", price: 289, rating: "4.9", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=760&q=82", alt: "Butter chicken curry" },
  { id: "paneer-biryani", name: "Dum paneer biryani", restaurant: "The Biryani Room", category: "Dinner", price: 229, rating: "4.7", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=760&q=82", alt: "Vegetarian biryani with herbs" },
  { id: "chicken-65", name: "Chicken 65 bites", restaurant: "Namma Ooru Kitchen", category: "Snacks", price: 189, rating: "4.8", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=760&q=82", alt: "Crispy spiced chicken bites" },
  { id: "samosa", name: "Crispy potato samosa", restaurant: "Chai & Chutney", category: "Snacks", price: 69, rating: "4.6", tag: "TEA-TIME PICK", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=760&q=82", alt: "Golden samosas" },
  { id: "gobi", name: "Gobi 65", restaurant: "The Curry Leaf", category: "Snacks", price: 149, rating: "4.7", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=760&q=82", alt: "Crispy cauliflower bites" },
  { id: "gulab-jamun", name: "Warm gulab jamun", restaurant: "Sweet Story", category: "Desserts", price: 89, rating: "4.9", image: "https://images.unsplash.com/photo-1666190092159-4d7a8eeb322c?auto=format&fit=crop&w=760&q=82", alt: "Gulab jamun dessert" },
  { id: "brownie", name: "Chocolate fudge brownie", restaurant: "Sweet Story", category: "Desserts", price: 129, rating: "4.8", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=760&q=82", alt: "Chocolate brownie" },
  { id: "filter-coffee", name: "Degree filter coffee", restaurant: "Chai & Chutney", category: "Drinks", price: 49, rating: "4.9", tag: "LOCAL FAVOURITE", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=760&q=82", alt: "South Indian filter coffee" },
  { id: "mango-lassi", name: "Mango lassi", restaurant: "The Curry Leaf", category: "Drinks", price: 99, rating: "4.7", image: "https://images.unsplash.com/photo-1527761939622-9111f36e34e1?auto=format&fit=crop&w=760&q=82", alt: "Mango lassi drink" }
];

const readStore = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

let cart = readStore("twiggy-cart", []);
let favorites = new Set(readStore("twiggy-favorites", []));
let activeCategory = "All";
let favoritesOnly = false;
let toastTimer;

const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
const favoritesFilter = document.getElementById("favoritesFilter");
const cartItems = document.getElementById("cartItems");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const toast = document.getElementById("toast");

function persist() {
  try {
    localStorage.setItem("twiggy-cart", JSON.stringify(cart));
    localStorage.setItem("twiggy-favorites", JSON.stringify([...favorites]));
  } catch { /* The page still works when browser storage is unavailable. */ }
}

function money(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function renderMenu() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = dishes.filter((dish) => {
    const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
    const matchesQuery = !query || `${dish.name} ${dish.restaurant} ${dish.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery && (!favoritesOnly || favorites.has(dish.id));
  });

  foodGrid.innerHTML = filtered.map((dish) => `
    <article class="food-card">
      <div class="food-image">
        <img src="${dish.image}" alt="${dish.alt}" loading="lazy">
        ${dish.tag ? `<span class="food-tag${dish.offer ? " offer" : ""}">${dish.tag}</span>` : ""}
        <button class="favorite-button${favorites.has(dish.id) ? " is-favorite" : ""}" type="button" data-favorite="${dish.id}" aria-label="${favorites.has(dish.id) ? "Remove from" : "Add to"} favourites" aria-pressed="${favorites.has(dish.id)}">${favorites.has(dish.id) ? "♥" : "♡"}</button>
      </div>
      <div class="food-info">
        <div class="food-title-row"><h3>${dish.name}</h3><span class="rating-pill">★ ${dish.rating}</span></div>
        <p class="restaurant-name">${dish.restaurant} · ${dish.category}</p>
        <div class="food-bottom"><span class="food-price">${money(dish.price)}${dish.oldPrice ? `<small>${money(dish.oldPrice)}</small>` : ""}</span><button class="add-button" type="button" data-add="${dish.id}" aria-label="Add ${dish.name} to cart">+ Add</button></div>
      </div>
    </article>`).join("");

  resultCount.textContent = query || activeCategory !== "All" || favoritesOnly
    ? `${filtered.length} ${filtered.length === 1 ? "delicious pick" : "delicious picks"} for you`
    : "Our picks, made for you";
  noResults.hidden = filtered.length > 0;
  foodGrid.hidden = filtered.length === 0;
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = count === 0 || subtotal >= 299 ? 0 : 25;
  document.getElementById("cartCount").textContent = count;
  document.getElementById("drawerCartCount").textContent = `(${count})`;
  document.getElementById("cartTotal").textContent = money(subtotal);
  document.getElementById("deliveryFee").textContent = delivery ? money(delivery) : "Free";
  document.getElementById("grandTotal").textContent = money(subtotal + delivery);

  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-cart"><span>♧</span><h3>Your cart is feeling light</h3><p>Add something delicious and we'll take it from here.</p><button class="primary-button" id="browseMenu" type="button">Explore the menu <span>↗</span></button></div>`;
  } else {
    cartItems.innerHTML = cart.map((item) => `
      <div class="cart-row">
        <img src="${item.image}" alt="" loading="lazy">
        <div class="cart-row-copy"><strong>${item.name}</strong><small>${money(item.price)} each</small></div>
        <div class="quantity-control"><button type="button" data-quantity="${item.id}" data-change="-1" aria-label="Remove one ${item.name}">−</button><span>${item.quantity}</span><button type="button" data-quantity="${item.id}" data-change="1" aria-label="Add one ${item.name}">+</button></div>
      </div>`).join("");
  }
  persist();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartBackdrop.hidden = false;
  requestAnimationFrame(() => cartBackdrop.classList.add("is-visible"));
  document.body.classList.add("cart-open");
  document.getElementById("closeCart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.classList.remove("is-visible");
  document.body.classList.remove("cart-open");
  setTimeout(() => { cartBackdrop.hidden = true; }, 250);
  document.getElementById("openCart").focus();
}

document.getElementById("categoryList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);
document.getElementById("clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  favoritesOnly = false;
  searchInput.value = "";
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.category === "All"));
  favoritesFilter.classList.remove("is-active");
  favoritesFilter.innerHTML = "♡ <span>Show favourites</span>";
  renderMenu();
});

favoritesFilter.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  favoritesFilter.classList.toggle("is-active", favoritesOnly);
  favoritesFilter.innerHTML = favoritesOnly ? "♥ <span>Showing favourites</span>" : "♡ <span>Show favourites</span>";
  renderMenu();
});

document.getElementById("favoritesShortcut").addEventListener("click", () => {
  favoritesOnly = true;
  favoritesFilter.classList.add("is-active");
  favoritesFilter.innerHTML = "♥ <span>Showing favourites</span>";
  renderMenu();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

foodGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    persist();
    renderMenu();
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (!addButton) return;
  const dish = dishes.find((item) => item.id === addButton.dataset.add);
  const existing = cart.find((item) => item.id === dish.id);
  existing ? existing.quantity++ : cart.push({ ...dish, quantity: 1 });
  renderCart();
  showToast(`${dish.name} added to your cart`);
});

cartItems.addEventListener("click", (event) => {
  const browseButton = event.target.closest("#browseMenu");
  if (browseButton) {
    closeCart();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    return;
  }
  const control = event.target.closest("[data-quantity]");
  if (!control) return;
  const item = cart.find((entry) => entry.id === control.dataset.quantity);
  if (!item) return;
  item.quantity += Number(control.dataset.change);
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== item.id);
  renderCart();
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) closeCart();
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    showToast("Your cart is ready for something delicious");
    return;
  }
  cart = [];
  renderCart();
  closeCart();
  showToast("Demo order placed! Thanks for choosing TWIGGY ✨");
});

renderMenu();
renderCart();

