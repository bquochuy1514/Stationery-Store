

export default {
    get(name) {
        // Lấy danh sách sản phẩm từ localStorage
        return JSON.parse(localStorage.getItem(name)) || [];
    },
    set(name, products) {
        // Lưu danh sách sản phẩm vào localStorage
        localStorage.setItem(name, JSON.stringify(products));
    },
};
