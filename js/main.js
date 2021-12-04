// lesson2
// Класс описывает товар: название, цена, артикул, картинка(и)
class ProductItem {
    constructor (title, price, img='140x100.png', counter=1) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.counter = this.counter;
    }
    // Метод отображения карточки товара
    render() {
        return `<div class="product-item">
        <h3>${this.title}</h3>
        <img src="img/${this.img}" alt="placeholder">
        <p class="price">${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
    //общая стоимость однотипных товаров
    totalprice() {
        return this.counter * this.price;
    }
}

// Список товаров, с методом получения данных со стороннего источника и формируем список товаров
// class ProductsList {
//     constructor () {
//         this.goods = []
//     }
//     // Получение списка товаров из стороннего источника
//     fetchGoods() {
//         const products = [
//             {id: 1, title: 'Notebook', price: 2000},
//             {id: 2, title: 'Mouse', price: 20},
//             {id: 3, title: 'Keyboard', price: 200},
//             {id: 4, title: 'Gamepad', price: 50},
//             {id: 5, title: 'AVR', price: 200},
//             {id: 6, title: 'Speacker', price: 50},
//         ];
//         let arr = []
//         products.forEach(function(item) {
//             // console.log(item);
//             let itemProduct = new ProductItem(item.title, item.price);
//             // console.log(itemProduct);
//             arr.push(itemProduct);
//         });
//         // console.log(arr);
//         this.goods = arr;
//     }
//     // Формирование списка карточек товара в блоке с классом .products
//     render() {
//         let htmlstr = '';
//         this.goods.forEach(function(item) {
//             htmlstr += item.render()
//         })
//         document.querySelector('.products').innerHTML = htmlstr;
//     }
// }
// Наследуем свойства от объекта массивы
class ProductsList extends Array {
    constructor () {
        super()
    }
    //заполнение массива товаров
    fetchGoods() {
        const products = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'AVR', price: 200},
            {id: 6, title: 'Speacker', price: 50},
        ];
        products.forEach((item) => {
            super.push(new ProductItem(item.title, item.price));
        });
    }
    // Формирование списка карточек товара в блоке с классом .products
    render() {
        super.forEach((item) => {
            document.querySelector('.products').insertAdjacentHTML('beforeend', item.render())
        })
    }
    //общая стоимость товаров на складе
    totalprice() {
        summ = 0;
        super.forEach((item) => {
            summ += item.totalprice();
        })
        return summ;
    }
}

//Корзина ничем не отличается от склада товаров, корзина принадлежит конкретному пользователю. Корзину лучше представить как ProductList c дополнительным параметром - id пользователя
class Basket extends ProductsList {
    constructor(user_id, ... goods) {
        super(goods);
        this.id = user_id;
    }
}


//основная логика
// создать список товаров и заполнить его
let goodList = new ProductsList;
goodList.fetchGoods();
// отобразить список товаров в блоке .products
goodList.render();
