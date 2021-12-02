// lesson1
const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, title: 'AVR', price: 200},
    {id: 6, title: 'Speacker', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (... item) => {
    let [title, price] = item
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price));
    console.log(... productsList);
    // productsList.array.forEach((element,i) => {
        // document.querySelector('.products').insertAdjacentHTML(i, element)
    // });
    let stringHTML = productsList.join('');
    document.querySelector('.products').innerHTML = stringHTML;
};

renderPage(products);