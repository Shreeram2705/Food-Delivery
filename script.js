// ======================================
// FOOD DELIVERY WEBSITE
// ======================================


// Cart array
let cart = [];


// Get elements
const addButtons = document.querySelectorAll(".add-button");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");


// ======================================
// ADD FOOD TO CART
// ======================================

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        button.textContent = "Added ✓";

        setTimeout(function () {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


// ======================================
// UPDATE CART
// ======================================

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    } else {

        cart.forEach(function (item, index) {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <small>₹${item.price}</small>
                </div>

                <button
                    class="remove-item"
                    onclick="removeItem(${index})"
                >
                    ×
                </button>
            `;

            cartItems.appendChild(cartItem);

        });

    }


    // Update count
    cartCount.textContent = cart.length;


    // Calculate total
    let total = 0;

    cart.forEach(function (item) {
        total += item.price;
    });


    cartTotal.textContent = `₹${total}`;
}


// ======================================
// REMOVE ITEM
// ======================================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// ======================================
// CHECKOUT
// ======================================

checkoutButton.addEventListener("click", function () {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Order placed successfully! 🍔\n\n" +
        "Thank you for ordering from Foodie."
    );

    cart = [];

    updateCart();
});


// ======================================
// SEARCH FOOD
// ======================================

const searchInput = document.getElementById("searchInput");
const foodCards = document.querySelectorAll(".food-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    foodCards.forEach(function (card) {

        const foodName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const restaurant =
            card.querySelector(".restaurant")
                .textContent
                .toLowerCase();

        if (
            foodName.includes(searchText) ||
            restaurant.includes(searchText)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});
