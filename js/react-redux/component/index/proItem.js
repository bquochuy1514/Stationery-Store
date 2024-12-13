import html from "../../core.js";
import { connect } from "../../store.js";

/* <a href="sproduct.html"></a> */
const connector = connect()

function proItem({featuredProduct, index}) {
    return html `
        <div class="pro" data-price = "${featuredProduct.price}" data-index="${index}">
            <img src="${featuredProduct.image}" alt="">
            <div class="des">
                <span>Notebook</span>
                <h5>${featuredProduct.name}</h5>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="pro__price">
                    <h4>${featuredProduct.price.toLocaleString('vi-VN')}</h4><span>₫</span>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping cart"></i>
        </div>
    `
}

export default connector(proItem)