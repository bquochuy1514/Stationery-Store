
import handleAddProducts from "../index.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
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

export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}

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

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
            handleAddProducts()
            handleClickProduct()
            changeQuantityProducts()
            applyCoupon()
        }
    }
}
