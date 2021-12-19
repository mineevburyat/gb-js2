const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
                 this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        console.log(this.allProducts);
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

// let list = new ProductsList();
// console.log(list.allProducts);

class CartItem {
    // {id_product: 123, product_name: 'Ноутбук', price: 45600, quantity: 1}
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.quantity = product.quantity;
    }
    render(){
        return `<div class="cart-item" data-id="cart${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <label>Количество: <input type="number" value="${this.quantity}"></label>
                    <button class="buy-btn">Удалить</button>
                </div>
            </div>`
    }
}

class CartList {
    constructor(container = '.cart'){
        this.container = container;
        this.cart = [];
        this._getCart()
            .then(data => { //data - объект js
                data.contents.forEach((item) => {
                    this.cart.push(new CartItem(item));
                });
                this.render()
            });
    }
    _getCart(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }

    calcSum(){
        return this.cart.reduce((accum, item) => accum += item.price, 0);
    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.cart){
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }

}

// let list = new ProductsList();
// console.log(list.allProducts);

// let cart = new Cart();
// console.log(cart);

// const mycart = new Cart();
// console.log(mycart.calcSum());
