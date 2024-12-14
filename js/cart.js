
import { attach } from "./react-redux/store.js"
import wrapper from "./react-redux/component/cartWrapper.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

attach(wrapper, document.querySelector('.react-redux-wrapper'))

// Hàm xử lí khi thay đổi quantity sản phẩm 
function changeQuantityProducts() {
    const quantityInputs = $$('.react-redux-wrapper #cart tbody td input')

    quantityInputs.forEach(quantityInput => {
        quantityInput.addEventListener('change', (e) => {
            const index = e.target.closest(".cart__details").dataset.index
            const value = e.target.value
            dispatch('changeQuantity', {index, value})
        })
    });

    const removeBtns = $$('.react-redux-wrapper tbody .cart__details td i')
    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', (e) => {
            const index = e.target.closest('.cart__details').dataset.index
            dispatch('remove', index)
        })
    })
}   

changeQuantityProducts()

window.changeQuantityProducts = changeQuantityProducts

export default changeQuantityProducts;

//Handle when apply coupon
function applyCoupon() {
    const couponInput = $('#coupon input')
    const couponBtn = $('#coupon button')
    const couponCode = 'TRAIDEPBANBUT'

    couponBtn.addEventListener('click', (e) => {
        const coupon = couponInput.value
        if (coupon === couponCode) {
            dispatch('applyCoupon')
        } else {
            alert('Invalid coupon code')
        }
    })
}

applyCoupon()


