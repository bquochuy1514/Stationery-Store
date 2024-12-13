
import html from "../core.js";
import { connect } from "../store.js";

const connector = connect()

function cart_item({product, index}) {
    return html `
        <tr class="cart__details" data-index = "${index}">
            <td><i class="fa-regular fa-circle-xmark"></i></td>
            <td><img src="${product.image}" alt=""></td>
            <td>${product.name}</td>
            <td>${(product.price).toLocaleString('vi-VN')}₫</td>
            <td><input type="number" value="${product.quantity}" min="1"></td>
            <td>${(product.price * product.quantity).toLocaleString('vi-VN')}₫</td>
        </tr>
    `
}

export default connector(cart_item)