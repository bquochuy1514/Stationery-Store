const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const content = JSON.parse(localStorage.getItem('content'))

const {name, price, image} = content

const imageDiv = document.querySelector('.single-pro-image img')
const nameDiv = document.querySelector('.single-pro-details h4')
const priceDiv = document.querySelector('.single-pro-details h2')

imageDiv.src = image
nameDiv.innerHTML = name
const pricee = parseInt(price)

priceDiv.innerHTML = pricee.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });



