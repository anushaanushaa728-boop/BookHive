console.log("Welcome to BookHive! 🛒");
const SITE_NAME = "BookHive";
const FOUNDED_YEAR = 2026;
const PI = 3.14159;
// let - for values that WILL change
let cartCount = 0;
let totalAmount = 0;
let currentUser = null;
// Print values
console.log(SITE_NAME);
console.log("Founded:", FOUNDED_YEAR);
console.log("Cart count:", cartCount);
// Change let variables
cartCount = 3;
totalAmount = 1497;
console.log("New cart count:", cartCount);
console.log("Total amount: ₹" + totalAmount);
// Try changing a const - will ERROR
// SITE_NAME = "BookStore"; // Error!
const bookTitle = "Wings of Fire";
const author = 'A.P.J. Abdul Kalam'; // single quotes work too
const description = `Bestseller since 1999`; // backticks for template literals
// NUMBER - any number
const price = 299;
const discount = 0.20; // 20%
const rating = 4.8;
const isInStock = true;
const isOnSale = false;
// NULL - intentionally empty
const couponCode = null;
// UNDEFINED - not yet set
let promoMessage; // undefined
// Check the type
console.log(typeof bookTitle); // "string"
console.log(typeof price); // "number"
console.log(typeof isInStock); // "boolean"
console.log(typeof promoMessage); // "undefined"
const message1 = "Hello, " + author + "! Your book '" + bookTitle + "' costs ₹" + 
price;
// NEW way with template literals (backticks + ${})
const message2 = `Hello, ${author}! Your book '${bookTitle}' costs ₹${price}`;
console.log(message1);
console.log(message2);
// Multi-line strings work too
const productCard = `
 <div class="book-card">
 <h3>${bookTitle}</h3>
 <p>by ${author}</p>
 <p>₹${price}</p>
 </div>
`;
console.log(productCard);
const bookPrice = 299;
const quantity = 3;
// Basic math
const subtotal = bookPrice * quantity; // 897
const tax = subtotal * 0.05; // 5% GST
const total = subtotal + tax; // 941.85
const discount = total * 0.10; // 10% off
const finalPrice = total - discount; // 847.665
console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);
console.log("After discount:", finalPrice);
// Round to 2 decimals (for currency)
console.log("Final:", finalPrice.toFixed(2)); // "847.67"
// Math object functions
console.log(Math.round(4.7)); // 5 (rounds to nearest)
console.log(Math.ceil(4.2)); // 5 (always rounds up)
console.log(Math.floor(4.9)); // 4 (always rounds down)
console.log(Math.max(10, 20)); // 20
console.log(Math.min(10, 20)); // 10
console.log(Math.random()); // random 0-1
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");
// 2. Read its current text
console.log("Current title:", heroTitle.textContent);
// 3. CHANGE the text
heroTitle.textContent = "Welcome to BookHive";
// Get current time and personalize
const currentHour = new Date().getHours();
let greeting;
if (currentHour < 12) {
 greeting = "Good Morning! 🛒";
} else if (currentHour < 17) {
 greeting = "Good Afternoon! 🛒";
} else {
 greeting = "Good Evening! 🛒";
}
heroSubtitle.textContent = `${greeting} Find your next great read.`;
const heroTitle = document.getElementById("hero-title");
// 2. By class (multiple)
const allBookCards = document.getElementsByClassName("book-card");
// 3. Modern way - querySelector (uses CSS selectors!)
const firstCard = document.querySelector(".book-card");
const titleByQuery = document.querySelector("#hero-title");
const allCardsQuery = document.querySelectorAll(".book-card");
console.log("Number of book cards:", allCardsQuery.length);
let cartCount = 0;
function updateCartCount() {
 const cartCountElement = document.getElementById("cart-count");
 if (cartCountElement) {
 cartCountElement.textContent = cartCount;
 }
}
// Test it - let's pretend the cart has 3 items
cartCount = 3;
updateCartCount();
// The navbar now shows "🛒 Cart (3)"
function attachAddToCartListeners() {
 const buttons = document.querySelectorAll(".add-to-cart");
 buttons.forEach(button => {
 button.addEventListener("click", function() {
 // Get the book ID from the data-id attribute
 const bookId = parseInt(this.getAttribute("data-id"));
 addToCart(bookId);
 });
 });
}
// Call after rendering books
renderBooks(books);
attachAddToCartListeners();
function showLoader() {
 const container = document.getElementById("books-container");
 if (container) {
 container.innerHTML = '<div class="spinner"></div>';
 }
}
// Simulate loading delay (just for visual effect)
showLoader();
setTimeout(() => {
 renderBooks(books);
 attachAddToCartListeners();
}, 500);