let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 30){
        document.querySelector('header').classList.add('header-active');
    }
    else{
        document.querySelector('header').classList.remove('header-active');
    }

}

var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay:{
        delay: 9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView: 4,
        },
    },
});

function my()
{
    alert("Your Message is Sent.")
}
let cart = [];
let total = 0;

function addToCart(name, price, image) {
    // Add item to cart
    cart.push({ name, price, image });
    total += price;

    // Update cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountDisplay = document.getElementById('total-amount');

    // Clear existing items
    cartItemsContainer.innerHTML = '';

    // Display cart items
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h4>${item.name}</h4>
                <div class="price">$${item.price.toFixed(2)}</div>
            </div>
            <span class="remove" onclick="removeFromCart(${index})">&times;</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total amount
    totalAmountDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

// let display=document.getElementByClassName('btn')
// display.addEventListener('click',()=>{
//    document.getElementById('cart').style.display="block"
// })
function removeFromCart(index) {
    // Remove item from cart
    const item = cart[index];
    total -= item.price;
    cart.splice(index, 1); // Remove from array

    // Update cart display
    updateCartDisplay();
}

function buyItems() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Clear cart
    cart = [];
    total = 0;
    updateCartDisplay();
    alert("Thank you for your purchase!");
}



