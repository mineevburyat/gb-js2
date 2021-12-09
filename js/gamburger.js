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
        this.topping.splice(i,1);
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

  printstatus() {
    console.log(`${this.info()} стоит ${this.calculatePrice()} рублей и содержит ${this.calculateCalories()} каллорий`);
  }

  totalHTML(id_totalelement, id_calloryelement) {
    const total = document.getElementById(id_totalelement);
    // console.log(total);
    const callory = document.getElementById(id_calloryelement);
    total.textContent = this.calculatePrice();
    callory.textContent = this.calculateCalories();
  }
}

// const bigmac = new Hamburger('big', 'withpotatos');
// bigmac.addTopping('paper');
// bigmac.addTopping('mayonnese');
// bigmac.printstatus();
// bigmac.removeTopping('mayonnese');
// bigmac.printstatus();
