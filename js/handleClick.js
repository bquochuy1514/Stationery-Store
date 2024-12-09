const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



function handleClickProduct() {
    const tests = $$('.pro-container .pro a img')
    tests.forEach(test => {
        test.addEventListener('click', saveContent)
    });
}

function saveContent(e) {
    console.log(e)
    const proDiv = e.target.closest('.pro')
    const price = proDiv.dataset.price
    const name = proDiv.querySelector('.des h5').innerHTML
    const image = proDiv.querySelector('a img').src
    console.log(price, name, image)
    localStorage.setItem('content', JSON.stringify({
        name: name,
        price: price,
        image: image
    }))
}

handleClickProduct()