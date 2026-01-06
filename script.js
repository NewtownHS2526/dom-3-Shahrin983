console.log("script running");

let totalInCent= 0; 

// TODO: Fix this bug - should select #apple, not #banana!

const stickerButton = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mysteryButton = document.querySelector("#mystery");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

console.log( stickerButton, keychainButton, plushButton, comicButton, mysteryButton, shoppingCart, totalSpan); 



const updateTotal = () => { 
  totalSpan.innerHTML = totalInCent / 100;
}; 

const addSticker = () => {
  shoppingCart.innerHTML += `<p>Sticker</p>`;
  totalInCent += 50; 
  updateTotal();

}; 
stickerButton.addEventListener("click", addSticker); 

const addKeychain = () => {
  shoppingCart.innerHTML += `<p>keychain</p>`;
  totalInCent += 150; 
  updateTotal();

}; 
keychainButton.addEventListener("click", addKeychain); 

const addPlush = () => {
  shoppingCart.innerHTML += `<p>plush</p>`;
  totalInCent += 400; 
  updateTotal();

}; 
plushButton.addEventListener("click", addPlush); 



const addComic = () => {
  shoppingCart.innerHTML += `<p>comic</p>`;
  totalInCent += 275; 
  updateTotal();

}; 

comicButton.addEventListener("click", addComic); 

const addMystery = () => {
  shoppingCart.innerHTML += `<p>mystery</p>`;
  totalInCent += 325; 
  updateTotal();

}; 

mysteryButton.addEventListener("click", addMystery); 
