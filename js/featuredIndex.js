import { attach } from "./react-redux/store.js"
import indexWrapper from "./react-redux/component/index/wrapper.js"


attach(indexWrapper, document.querySelector('#product1'))

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function handleAddProducts() {
    const addBtns = $$('#product1 .pro-container .pro .cart')
    // console.log(addBtns)
    addBtns.forEach(addBtn => {
        addBtn.addEventListener('click', addProduct)
        addBtn.addEventListener('click', toast)
    })
}

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


handleAddProducts()

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

function handleClickProduct() {
    const tests = $$('.pro-container .pro img')
    tests.forEach(test => {
        test.addEventListener('click', saveContent)
    });
}

function saveContent(e) {
    const proDiv = e.target.closest('.pro')
    const index = proDiv.dataset.index
    dispatch('showDetailsProduct', index)
    window.location.href = "sproduct.html";
}

handleClickProduct()

window.handleClickProduct = handleClickProduct

// export default handleClickProduct
