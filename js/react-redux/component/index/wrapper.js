import html from "../../core.js";
import { connect } from "../../store.js";

import proItem from "./proItem.js";

const connector = connect()

function indexWrapper({featuredProducts}) {
    return html `
        <h2>Featured Products</h2>
        <p>Discover premium-quality stationery designed to enhance your productivity and creativity.</p>
        <div class="pro-container">
            ${featuredProducts.map((featuredProduct, index) => proItem({featuredProduct, index}))}
        </div>
        
    `
}

export default connector(indexWrapper)