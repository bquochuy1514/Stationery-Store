
import storage from "./util/storage.js";

const init = {
    products: storage.get()
};

const actions = {
    add({ products }, args) {
        const {name, image, price, quantity} = args
        const index = products.findIndex((product, index) => {
            return product.name.trim() === name.trim()
        })
        if(index !== -1) {
            console.log('trung` san pham')
            const pricee = parseInt(products[index].quantity) + parseInt(quantity)
            products[index].quantity = pricee
            storage.set(products)
        }
        else {
            products.push({
                name,
                image,
                price: parseInt(price),
                quantity
            })
            storage.set(products)
        }
    },

    changeQuantity({products}, args) {
        const {index, value } = args
        products[index].quantity = value
        storage.set(products)
    },
    
    remove({products}, index) {
        products.splice(index, 1)
        storage.set(products)
    }
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}

// localStorage.setItem('PRODUCTS', JSON.stringify(
//     [
//         {
//             name: "Thien Long TL-095 Pen",
//             image: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_768/https://vanphong-pham.com/wp-content/uploads/2024/07/095-768x1024.jpg",
//             price: 30000,
//             quantity: 1
//         }
//     ]
// ))
