const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Xử lí khi thêm giỏ hàng
import {dispatch} from "./react-redux/store.js"

function handleAddProducts() {
    const addBtns = $$('#product1 .pro-container .pro .cart')
    addBtns.forEach(addBtn => {
        addBtn.addEventListener('click', addProduct)
        addBtn.addEventListener('click', toast)
    })
}

handleAddProducts()

function addProduct(e) {
    const parent = e.target.closest('.pro')
    const name = parent.querySelector('.des h5').innerHTML
    const image = parent.querySelector('img').src
    const price = parent.dataset.price
    dispatch('add', {
        name,
        image,
        price,
        quantity: 1
    }, 'PRODUCTS')
}

export default handleAddProducts;

function toast() {
    const main = document.querySelector('#toast')
    const toastDiv = document.createElement('div')
    toastDiv.classList.add('toast')
    toastDiv.innerHTML = `
        <div class="toast__icon">
            <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">Success</h3>
            <p class="toast__msg">Sản phẩm  vừa được thêm vào giỏ hàng</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
    `
    if(main) {
        main.appendChild(toastDiv)
    }
    setTimeout(function() {
        main.removeChild(toastDiv)
    }, 4000)
}
