class Hamburger {
  constructor(size, stuffing, topping = []) { 
    this.size = size; //'big' or 'small'
    this.stuffing = stuffing; //'withchees', 'withsald', 'withpotatos'
    this.topping = topping; //'paper','mayonnese', 'mustard' and other 
   }
  addTopping(topping) {    
    this.topping.push(topping)
  }
  removeTopping(topping) {
    this.topping.forEach((item, i) => {
      if (item == topping) {
        item.splice(i,1);
      }
    })
  }
  getToppings(topping) {
    return this.topping
  }
  getSize() {
    return this.size;
  }
  getStuffing() {
    return this.stuffing
  }
  calculatePrice() {
    let summ = 0;
    if (this.size == 'big') {
      summ += 100;
    } else {
      summ += 50;
    }
    if (this.stuffing == 'withchees') {
      summ += 10;
    } else if (this.stuffing == 'withsald' ) {
      summ += 20;
    } else if (this.stuffing == 'withpotatos') {
      summ += 15;
    }
    this.topping.forEach((item) => {
      if (item == 'paper') {
        summ += 15;
      } else if (item == 'mayonnese') {
        summ += 20;
      }
    })
    return summ;
  }
  calculateCalories() {
    let summ = 0;
    if (this.size == 'big') {
      summ += 40;
    } else {
      summ += 20;
    }
    if (this.stuffing == 'withchees') {
      summ += 20;
    } else if (this.stuffing == 'withsald' ) {
      summ += 5;
    } else if (this.stuffing == 'withpotatos') {
      summ += 10;
    }
    this.topping.forEach((item) => {
      if (item == 'paper') {
        summ += 0;
      } else if (item == 'mayonnese') {
        summ += 5;
      }
    })
    return summ;
  }
  info() {
    return `Гамбургер ${this.size} с ${this.stuffing} и сверху ${this.topping}`;
  }
}

const bigmac = new Hamburger('big', 'withpotatos');
bigmac.addTopping('paper');
bigmac.addTopping('mayonnese');
console.log(`${bigmac.info()} стоит ${bigmac.calculatePrice()} рублей и содержит ${bigmac.calculateCalories()} каллорий`);