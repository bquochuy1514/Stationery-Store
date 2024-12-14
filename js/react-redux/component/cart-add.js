import html from "../core.js";
import { connect } from "../store.js";

const connector = connect()

function cart_add({products, totalSaved}) {
    console.log(totalSaved)
    const total = products.reduce((acc, cur) => {
        acc += cur.price*cur.quantity
        return acc
    }, 0)
    return html `
        <section id="cart-add" class="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon">
                        <button class="normal">Apply</button>
                    </div>
                </div>
    
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>${(total).toLocaleString('vi-VN')}₫</td>
                        </tr>
                        <tr>
                            <td>Coupon Discount</td>
                            <td>${( totalSaved.length === 0) ? 0 : totalSaved.toLocaleString('vi-VN')}
                            ₫</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${(total - totalSaved).toLocaleString('vi-VN')}₫</strong></td>
                        </tr>
                    </table>
                    <button class="normal">Proceed to Checkout</button>
                </div>
            </section>
    `
}

export default connector(cart_add)