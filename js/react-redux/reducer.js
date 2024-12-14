
import storage from "./util/storage.js";

const init = {
    products: storage.get('PRODUCTS'),
    featuredProducts: storage.get('featuredProducts'),
    totalSaved: storage.get('totalSaved'),
    hasAppliedCoupon: false,
};

localStorage.setItem('featuredProducts', JSON.stringify(
    [
        {
            name: "Sổ còng B5 Dash-Caro-lined 100 tờ 100gsm",
            image: "../assets/img/productImages/socong1.1.webp",
            price: 58000,
            quantity: 1,
            desc: `
            Sổ còng, Bìa sổ còng B5 binder còng sắt 8 còng không cấn tay khi viết sổ tay, sổ ghi chép tiện dụng
            Phân loại
            + Combo BC65 Bìa sổ 8 chấu + giấy caro 6x6mm 26 lỗ
            +Combo BC62 Bìa sổ 8 chấu + giấy kẻ ngang chấm 26 lỗ
            +Bìa còng Binder 8 chấu (CHƯA KÈM GIẤY) 
            +Bìa còng Binder 26 chấu (CHƯA KÈM GIẤY) 
            +Ruột giấy 
            + Ruột B5 26 lỗ : 
            - Giấy kẻ ngang MS 533 định lượng 100GSM
            - Giấy Caro MS532 ô 6X6mm định lượng 100GSM 
            Thông tin sản phẩm.
            - Chất liệu bìa: nhựa PVC trong mờ, có độ bền cao, hạn chế trầy xước
            - Kích thước bìa : 21 x 28 cm
            - Kích thước ruột : 17.5 x 25 cm
            Còng sắt bằng hợp kim không gỉ, nhẹ nhưng chắc chắn
            `
        },
        {
            name: "Sổ còng sắt Caro (6x6)mm nét đứt A4 100 tờ 100/76",
            image: "../assets/img/productImages/socong2.1.webp",
            price: 97000,
            quantity: 1,
            desc: `Sổ còng sắt Caro (6x6)mm nét đứt KLONGA4 100 tờ 100/76; MS: 522
            - Kích cỡ ô caro nét đứt: 6x6mm
            - Định lượng: 100 g/m2
            - Độ trắng kem: 76% ISO
            - Số trang: 100 tờ
            - Kích thước: (210 x 297) mm
            - Mã sản phẩm: 522
            - File nhựa PP dày 0,7 mm vân chéo gắn còng sắt chắc chắn, lưu, tháo, thay thế ruột dễ dàng khi sử dụng;
            - File gắn còng sắt mạ Ni - Crom bền chắc chắc và lưu được nhiều giấy hơn (100 tờ tăng 20%)
            - Giấy định lượng 100 g/m² , trắng kem tự nhiên với bề mặt mịn bắt mực và khô nhanh hơn nhưng vẫn không lem, nhòe với phần lớn các loại mực, màu gốc nước; được in kẻ ngang nét đứt tạo thông thoáng dịu mắt thỏa sức ghi chép khoa học, sáng tạo;
            - Dễ dàng tháo, lắp, thay thế, ruột kẻ ngang phù hợp với học tập, làm việc;
            - Ruột sổ có 2 lỗ đường kính 7mm thuận tiện lưu trữ sổ, file có phân trang PP dễ dàng tạo thành các file nhỏ cho nhiều môn học.
            `
        },
        {
            name: "Sổ lò xo A5 ruột kẻ ngang 200 trang, phù hợp ghi chép",
            image: "../assets/img/productImages/socong3.1.webp",
            price: 20000,
            quantity: 1,
            desc: `
            A- THÔNG TIN VÀ THÔNG SỐ KỸ THUẬT SẢN PHẨM
            1. Loại sổ: Gáy xoắn
            2. Số trang: 200 trang
            3. Kích cỡ: A5
            4. Định lượng giấy: 60-80gsm
            5. Xuất xứ: Việt Nam
            B/ MÔ TẢ SẢN PHẨM
            1. Sản phẩm sổ tay Hello Summer đơn giản phù hợp với nhiều đối tượng
            2. Bìa sổ được in bằng công nghệ in offset chất lượng hình ảnh cao, sắc nét. Giấy được sử dụng là giấy trắng tự nhiên chống lóa mắt, giúp mắt không bị mỏi khi nhìn lâu
            3. Gáy sổ được làm bằng chất liệu Inox cao cấp, cự kỳ cứng cáp và không bị hoen, gỉ theo thời gian 
            4. Sổ được thiết kế cứng cáp do sử dụng công nghệ đặc biệt, chống gãy, nát hoặc bị gập khi để sổ trong cặp sách, hoặc sổ bị đè lên chịu lực nhiều
            5. Sổ có giấy kẻ ngang.
            `
        },
        {
            name: "Bút xóa kéo thiết kế hình bàn chân mèo đáng yêu",
            image: "../assets/img/productImages/butxoakeo2.1.webp",
            price: 112000,
            quantity: 1,
            desc: `
            Chất liệu: Nhựa
            Kích thước: 5mm * 6m
            Khối lượng: 20g
            Thiết thực và nhỏ gọn, di động với tay cầm, món quà tuyệt vời cho bạn bè và gia đình của bạn.
            `
        }, 
        {
            name: "M&G Bút Xoá Nước Cute 8/12/18ml Viết Xóa Dụng Cụ Tẩy Xoá 1 Cái Đồ Sinh Viên Màu Ngẫu Nhiên T6072",
            image: "../assets/img/productImages/butxoanuoc1.1.webp",
            price: 12000,
            quantity: 1,
            desc: `
            Militer: 8/12/18ml
            Màu sắc: hồng, xanh dương, xanh lá cây, ngẫu nhiên, không chỉ định màu / mẫu
            Các tính năng:
            (1) Nhanh chóng và sạch sẽ, không cần chờ đợi, bạn có thể nhanh chóng viết lại trên bề mặt nhẵn;
            (2) Thân thiện với môi trường và không có mùi;
            (3) Nhẹ và dễ mang theo;
            (4) Dấu vết sửa đổi sẽ không được hiển thị trên bản sao hoặc bản fax;
            (5) Một số loại băng sửa rất khó viết bằng bút mực, bút chì, bút xóa và bút bi. Tốt nhất là sử dụng bút bi
            `
        },
        {
            name: "Cục Tẩy 4b Bằng Cao Su",
            image: "../assets/img/productImages/tay1.1.webp",
            price: 5000,
            quantity: 1,
            desc: `
            Chất liệu: TPR
            Tên sản phẩm: Cao su
            Trọng lượng: 15g
            Màu sắc: Như trong hình (gửi ngẫu nhiên)
            Kích thước: 2 * 5.5cm
            Mục đích: Chỉnh sửa, sửa đổi
            Bao bì: 1 * Cao su
            Hình dạng: hình chữ nhật
            `
        },
        {
            name: "Bút highlight màu SR035",
            image: "../assets/img/productImages/buthighlight1.webp",
            price: 26000,
            quantity: 1,
            desc: `-Ngồi viết: 1-4mm -Kích thước gói: 13x12cm -Trọng lượng gói: 8g`
        },
        {
            name: "Bút highlight pastel ",
            image: "../assets/img/productImages/buthighlight2.webp",
            price: 53000,
            quantity: 1,
            desc: ` 
            Loại đầu bút: Đầu mềm / Đầu đơn
            Một hộp bút duy nhất bảo vệ mực không bị khô. 
            Một đầu bút có hai cách sử dụng, có thể vẽ dày hoặc mỏng, để đầu nằm dọc thì nét trở nên mỏng hơn và nằm ngang thì nét trở nên dày hơn, bạn có thể vẽ các đường từ 1-3 mm. 
            Mực chất lượng cao không có mùi đặc biệt.`
        },
        {
            name: "Bút Đánh Dấu Dạ Quang Có Nhũ Lấp Lánh Rosy Posy Cameo Shell",
            image: "../assets/img/productImages/buthighlight3.webp",
            price: 85000,
            quantity: 1,
            desc: ` 
            💐 Đóng gói: 4 bút/set

            💐 Kích thước: Đầu highlight 3mm

            💐 Phân loại: Sylvan; Pearl`
        },
        {
            name: "Bút chì kim/ruột ngòi to 2.0mm",
            image: "../assets/img/productImages/butchikimruot1.webp",
            price: 5000,
            quantity: 1,
            desc: ` 
            Chất liệu: Nhựa 
            • Đường kính thân: 10.4mm 
            • Chiều dài bút: 15.0cm / 5.9inches 
            • Đường kính gôm: 2.7mm 
            • Chiều dài gôm: 1cm`
        },
        {
            name: "Bút Chì Kim Bấm + 2 Hộp Ruột Ngòi 0.5 & 0.7mm CREAM RosyPosy",
            image: "../assets/img/productImages/butchikimruot2.webp",
            price: 25000,
            quantity: 1,
            desc: ` 
            - Chất liệu: Nhựa 
            - Kèm Tẩy 
            - Đóng gói: + 1 Bút chì 0.5mm & 1 Bút chì 0.7mm + 1 Hộp ngòi 0.5mm & 1 Hộp ngòi 0.7mm`
        },
        {
            name: "Set bút chì kim panda gấu trúc tặng ruột chì kim LILA BUTCHIKIMCAPY26",
            image: "../assets/img/productImages/butchikim_chiruot3.webp",
            price: 17500,
            quantity: 1,
            desc: `
            kích thước ngòi 0.5mm , chất liệu nhựa , đầu bút ngòi 0.5mm,chì viết êm đều màu
            `
        },
        {
            name: "Bút bi Gel SenCoo",
            image: "../assets/img/productImages/71woLrkWvVL._AC_SL1001_.jpg",
            price: 21000,
            quantity: 1,
            desc: `
            Thiết kế siêu mịn: Ngòi bút 0.35 mm giúp dễ dàng viết và mang lại trải nghiệm viết hoặc vẽ mượt mà; Phù hợp cho văn phòng, kinh doanh, điều hành, sinh viên, nhà văn và bất kỳ ai viết nhiều; Viết trơn tru trên hầu hết các bề mặt, lý tưởng cho việc sử dụng hàng ngày.

            Ống bút trong suốt: Ống bút mực trong suốt có thiết kế độc đáo với vỏ bút trong suốt, bạn có thể dễ dàng thấy lượng mực còn lại; mực chất lượng cao, không bị rò rỉ mực ngay cả khi sử dụng trong thời gian dài.

            Khô nhanh: Mực gel lỏng khô rất nhanh, không bị nhòe, không bị lem, không bị đọng mực; mực chảy tự do, mang lại nét viết mượt mà và sắc nét.

            Ứng dụng rộng rãi: Bút bi dùng để phác thảo, vẽ, tô màu, viết nguệch ngoạc, sáng tạo theo cách vui nhộn và khéo léo; sử dụng cho thiệp chúc mừng, lời mời dự tiệc, viết thư cho bạn bè và gia đình, thủ công mỹ nghệ, trang trí.

            Gói bao gồm: Gồm 12 chiếc bút mực đen, bút bi có đầu siêu mịn (0.35 mm) và mực đen cho nét viết chính xác, nhỏ gọn, tinh tế, thời trang và bền bỉ.
            `
        },
        {
            name: "Bút bi Gel Fiover",
            image: "../assets/img/productImages/61RlF--KWWL._AC_SL1500_.jpg",
            price: 25000,
            quantity: 1,
            desc: `
            Thiết kế Thời trang & Tiện dụng: Bộ 5 bút gel FIOVER với thân bút thanh lịch, phong cách mang lại vẻ ngoài hiện đại và chuyên nghiệp. Đây là công cụ tuyệt vời cho đồ dùng học tập và là một chiếc bút lý tưởng cho công việc cũng như cuộc sống hàng ngày.

            Bút mực khô nhanh 0.5mm: Bút gel bi lăn 0.5mm có mực khô nhanh, chống phai màu, bạn không cần lo lắng về việc mực dính vào tay hoặc bàn, vì mực không bị nhòe, lem hay chảy. Lưu ý: Sau khi sử dụng bút gel, nên để bút nằm ngang hoặc đầu bút hướng lên để bảo vệ ngòi bút.

            Kẹp bút đa năng: Bạn có thể gắn bút bi vào sách hoặc túi, tiện lợi để mang theo và tránh thất lạc. Ngoài ra, khi nhấn vào kẹp, đầu bút sẽ tự động rút lại, giúp tránh làm bẩn sách hoặc túi của bạn.

            Phạm vi sử dụng: Là những chiếc bút tuyệt vời cho văn phòng, phụ kiện học tập dễ thương dành cho nam, nữ, trẻ em trong lớp học, trường học và nơi làm việc. Đây cũng là một ý tưởng quà tặng lý tưởng cho học sinh, các bữa tiệc nghệ thuật, sinh nhật và Giáng sinh.

            Gói bao gồm: 5 bút mực khô nhanh. Đây là những chiếc bút bấm tiện dụng phù hợp cho các đồ dùng học tập thẩm mỹ, văn phòng phẩm, viết nhật ký, ghi chú và lập kế hoạch.
            `
        },
        {
            name: "Bút bi nhấn Muji",
            image: "../assets/img/productImages/7acf6b55516f3ca40b1e0963578ab279_1.jpg",
            price: 20000,
            quantity: 1,
            desc: `
            Có thể sử dụng với mực gel hoặc ruột mực gel viết mượt.
            Thân bút nhẹ, giúp dễ dàng viết trong thời gian dài.
            Lý tưởng để viết nhật ký và ghi chú.
            Cũng là món quà độc đáo dành cho học sinh và bạn bè để vẽ nghệ thuật.
            `
        },
        {
            name: "Ruột bút bi gel Sencoo",
            image: "../assets/img/productImages/41XH9XGKhZL._AC_.jpg",
            price: 8000,
            quantity: 1,
            desc: `
            Chiều dài: 5.1 inch (13 cm).
            Ngòi viết: 0.5 mm.
            Chỉ phù hợp với các loại bút hoạt hình và bút văn phòng của thương hiệu Sencoo, không phù hợp với bút của các thương hiệu khác hoặc bút gel bấm.
            `
        },
        {
            name: "Ruột bút bi nhấn Muji",
            image: "../assets/img/productImages/4550002822873_org.jpg",
            price: 10000,
            quantity: 1,
            desc: `
            Ruột bút bi MUJI 0.5mm được thiết kế dành riêng cho các dòng bút bi của MUJI, đảm bảo sự tương thích và chất lượng cao. Với ngòi bút 0.5mm, sản phẩm mang đến trải nghiệm viết mượt mà, chính xác, không bị lem mực. Mực đen đậm, khô nhanh, phù hợp cho ghi chú, viết lách và làm việc hàng ngày.

            Đây là sự lựa chọn lý tưởng để thay thế cho bút MUJI yêu thích của bạn, giúp kéo dài tuổi thọ và giữ cho công việc luôn suôn sẻ. Ruột bút nhỏ gọn, tiện lợi, dễ dàng mang theo và sử dụng mọi lúc mọi nơi.
            `
        },
        {
            name: "Sổ lò xo Classmate",
            image: "../assets/img/productImages/sotayloxoclassmate.webp",
            price: 46000,
            quantity: 1,
            desc: `
            A5 150 trang 100g sm, lò xo nhựa mềm viết dễ dàng không cấn tay
            `
        },
        {
            name: "Sổ tay bìa da",
            image: "../assets/img/productImages/sotaybiada1.webp",
            price: 59000,
            quantity: 1,
            desc: `
            dày dặn 360 trang, bìa da PU cao cấp A5, có tích hợp khóa từ,không lem, không thấm, thích hợp làm nhật ký học tập, sổ tay kinh doanh
            `
        },
        {
            name: "Sổ Klong dash caro line",
            image: "../assets/img/productImages/socaro01.webp",
            price: 24000,
            quantity: 1,
            desc: `
            Gọn nhẹ, kích thước B5 120 trang 100gsm lò xo và còng nhựa 2 đầu, màu sắc đa dạng, chống thấm,
            `
        },
        {
            name: "Giấy note pastel",
            image: "../assets/img/productImages/pastel1.webp",
            price: 10000,
            quantity: 1,
            desc: `
            Định lượng giấy : 100 gsm
            Tiêu chuẩn ; TCCS 095:2016/TL-GN
            Xuất xứ  :Việt Nam
            Sản xuất : Trung Quốc
            Khuyến cáo :Nhiệt độ: 10 ~ 55º C, Độ ẩm: 55 ~ 95% RH, Tránh xa nguồn nhiệt, dầu mỡ.
            `
        },
        {
            name: "Giấy note vuông trơn",
            image: "../assets/img/productImages/vuongtron1.webp",
            price: 8000,
            quantity: 1,
            desc: `
            Thông tin sản phẩm: Giấy note ghi chú HAKI nhiều màu sắc 100 tờ hình vuông có thể dán dùng để đánh dấu tiện lợi
            - Loại sản phẩm: Giấy ghi chú, giấy note.
            - Chất liệu: Giấy cao cấp
            - Số trang: 100 tờ
            - Kích thước: 7.6cm x 7.6cm
            - Màu Sắc: Nhiều màu
            - Trọng lượng: 50g 
            `
        },
        {
            name: "Giấy note trong suốt ",
            image: "../assets/img/productImages/notetrongsuot1.webp",
            price: 6000,
            quantity: 1,
            desc: `
            Thông tin sản phẩm: Set 50 Tờ Giấy Ghi Chú Trong Suốt Chống Nước Tự Dính Phong Cách Hàn Quốc.
            - Loại sản phẩm: Giấy ghi chú dính trong suốt
            - Chất liệu: Giấy cao cấp.
            - Màu Sắc : Trong suốt
            - Kích thước: 5 x 5 cm
            - Trọng lượng: 30g
            - Số lượng: 50 tờ.
            `
        },
        {
            name: "Bút highlight pastel ",
            image: "../assets/img/productImages/buthighlight2.webp",
            price: 53000,
            quantity: 1,
            desc: ` 
            Loại đầu bút: Đầu mềm / Đầu đơn
            Một hộp bút duy nhất bảo vệ mực không bị khô. 
            Một đầu bút có hai cách sử dụng, có thể vẽ dày hoặc mỏng, để đầu nằm dọc thì nét trở nên mỏng hơn và nằm ngang thì nét trở nên dày hơn, bạn có thể vẽ các đường từ 1-3 mm. 
            Mực chất lượng cao không có mùi đặc biệt.`
        },
    ]
))

const actions = {
    add({ products }, ...args) {
        const [{name, image, price, quantity}, keyName] = args
        const index = products.findIndex((product) => {
            return product.name.trim() === name.trim()
        })
        if(index !== -1) {
            const pricee = parseInt(products[index].quantity) + parseInt(quantity)
            products[index].quantity = pricee
            storage.set('PRODUCTS', products)
        }
        else {
            products.push({
                name,
                image,
                price: parseInt(price),
                quantity
            })
            storage.set('PRODUCTS', products)
        }
    },

    changeQuantity(state, args) {
        const {products} = state
        const {index, value} = args
        products[index].quantity = value
        storage.set('PRODUCTS', products)

        // Tính toán lại tổng tiền tiết kiệm
        const newTotalSaved = state.hasAppliedCoupon ? products.reduce((acc, product) => {
            const originalTotal = product.price * product.quantity;
            const discountedTotal = Math.round(product.price * 0.7) * product.quantity;
            return acc + (originalTotal - discountedTotal);
        }, 0) : state.totalSaved;
        
        return {
            ...state,
            totalSaved: newTotalSaved,
            hasAppliedCoupon: state.hasAppliedCoupon
        }
    },
    
    remove({products}, index) {
        products.splice(index, 1)
        storage.set('PRODUCTS', products)
    },
    showDetailsProduct({featuredProducts}, index) {
        const price = featuredProducts[index].price
        const name = featuredProducts[index].name
        const desc = featuredProducts[index].desc
        const image = featuredProducts[index].image
        localStorage.setItem('content', JSON.stringify({
            name,
            price,
            image,
            desc,
        }))
    },
    applyCoupon(state) {
        const { products} = state
        const newTotalSaved = products.reduce((acc, product) => {
            const originalTotal = product.price * product.quantity;
            const discountedTotal = Math.round(product.price * 0.7) * product.quantity;
            return acc + (originalTotal - discountedTotal);
        }, 0);

        return {
            ...state,
            totalSaved: newTotalSaved,
            hasAppliedCoupon: true
        };
    }
};

export default function reducer(state = init, action, args) {
    if (actions[action]) {
        const result = actions[action](state, ...args);
        return result || state;
    }
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
