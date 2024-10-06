let quantity = 1;
let pricePerItem = 29.99;
let cartQuantity = 0;

// Function to update the quantity display and total price
function updateQuantityDisplay() {
    document.querySelector('.quantity').textContent = quantity;
    updateTotalPrice();
}

// Function to calculate and update the total price
function updateTotalPrice() {
    const totalPrice = (pricePerItem * quantity).toFixed(2);
    document.getElementById('total-price').textContent = `$${totalPrice}`;
}

// Event listener for the minus button
document.querySelector('.minus').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
});

// Event listener for the plus button
document.querySelector('.plus').addEventListener('click', () => {
    quantity++;
    updateQuantityDisplay();
});

// Function to add items to the cart
function addToCart() {
    cartQuantity += quantity;
    document.getElementById('cart-status').innerText = `Added ${quantity} item(s) to the cart! Total items: ${cartQuantity}`;
}

// Initial call to set the total price display
updateTotalPrice();

// Slideshow functionality
let slideIndex = 0;
showSlides();

// Function to manage the slideshow
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to navigate slides
function plusSlides(n) {
    slideIndex += n - 1; // Adjust the slide index based on input
    showSlides(); // Show the updated slides
}
