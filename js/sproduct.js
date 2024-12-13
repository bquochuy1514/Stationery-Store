const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const content = JSON.parse(localStorage.getItem('content'))

const {name, price, image, desc} = content

const imageDiv = document.querySelector('.single-pro-image img')
const nameDiv = document.querySelector('.single-pro-details h4')
const priceDiv = document.querySelector('.single-pro-details h2')
const descDiv = document.querySelector('#prodetails .single-pro-details span')

const formattedDesc = desc.replace(/\n/g, '<br>');

imageDiv.src = image
nameDiv.innerHTML = name
const pricee = parseInt(price)
descDiv.innerHTML = formattedDesc

priceDiv.innerHTML = pricee.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });



