const productName = document.querySelector('.product-hero h1').innerText;
const productCurrentPrice = document.querySelector('#product-price .current-price').innerText;
const productPriceDiscounted = document.querySelector('#product-price .product-price-discounted').innerText;
const productImages = [];

document.querySelectorAll('.gallery-image').forEach((image) => {
  productImages.push(image.src);
});

const productCeurrenImageContainer= [...document.querySelectorAll('.image-container')]
  .find((element) => !element.getAttribute('aria-hidden'));

const productCurrentImage = productCeurrenImageContainer.querySelector('.img').src;
