import html from "../core.js";
import { connect } from "../store.js";
import cartItem from "./cart-item.js";

const connector = connect()

function cart({products}) {
    return html `
            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${products.map((product, index) => cartItem({product, index}))}
                    </tbody>
                </table>
            </section>
    `
}

export default connector(cart)