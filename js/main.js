// lesson2
"use strict";
// Класс описывает товар: название, цена, артикул, картинка(и)
class ProductItem {
    constructor (title, price, img='140x100.png') {
        this.title = title;
        this.price = price;
        this.img = img;
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
    //общая стоимость товара не имеет смысла, если мы не знаем сколько товаров на складе - перенести эту функцию в корзину
}
//Товар в корзине это ProductItem с дополнительным параметром количество однотипных товаров
class BasketGood extends ProductItem {
    constructor(numbergoods=1, goods) {
        let {title, price, img} = goods;
        super(title, price, img);
        this.numbergoods = numbergoods;
    }
    //всего на сумму данного товара в корзине
    totalSum() {
        return(this.numbergoods * this.price)
    }
    //представить товар в виде html карточки
    render() {};
}
//Корзину лучше представить как массив корзинных тваров c дополнительным параметром - id пользователя
//TODO  сделать корзину пока как отдельный класс, т.к. не понятно как работать с user_id и особенностями добавления и удаления товаров в корзине.
class Basket {
    constructor() {
        this.goods = [];
        //корзина для одного пользователя пока
        //this.id = user_id;
    }
    //общая стоимость товаров в корзине
    totalprice() {
        let summ = 0;
        this.goods.forEach((item) => {
            summ += item.totalSum();
        })
        return summ;
    }
    addGoods(goods) {
        this.goods.push(goods);
    }
    removeGoods(goods) {}
    //отрисовать карточки товары в блоке корзины
    render() {};
}


//основная логика
// создать список товаров и заполнить его
let goodList = new ProductsList;
goodList.fetchGoods();
// отобразить список товаров в блоке .products
goodList.render();

const user1_basket = new Basket;
// console.log(goodList[1], goodList[2]);
user1_basket.addGoods(new BasketGood(2, goodList[2]));
user1_basket.addGoods(new BasketGood(3, goodList[0]));
console.log('В корзине следующие товары:')
user1_basket.goods.forEach((item) => {
    console.log(`${item.title} с ценой ${item.price} и количество таких товаров ${item.numbergoods} на общую сумму ${item.totalSum()}`);
})
console.log(`Всего товаров на сумму: ${user1_basket.totalprice()}`);