import html from "../core.js";
import { connect } from "../store.js";

import cart from "./cart.js";
import cartAdd from "./cart-add.js";

const connector = connect()

function wrapper({products}) {
    return html `
        ${cart({products})}
        ${cartAdd({products})}
    `
}

export default connector(wrapper)