class paramObj {
  constructor(element) {
    this.value = element.value;
    this.price = +element.dataset.price;
    this.calories = +element.dataset.calories;
  }
}
//функция возвращающая объект с выбранной опцией 
function getSelectOptions(id_select) {
  let returnitem;
  [... document.getElementById(id_select).options].forEach((item) => {
    if (item.selected) {
    returnitem = item;
    }
  });
  let obj = new paramObj(returnitem);
  return obj;
}
//функция возвращает массив объектов
function getSelectCheckbox(name_input) {
  let arr = [... document.querySelectorAll(`input[name=${name_input}]:checked`)]
  let arr_obj = arr.map((item) => {
    let obj = new paramObj(item);
    return obj;
  });
return arr_obj;
}


class Hamburger {
  constructor(size, stuffing, topping = []) { 
    this.size = size; //obj {value: "", text: "", price: num, calories: num}
    this.stuffing = stuffing; //obj {value: "", text: "", price: num, calories: num}
    this.topping = topping; //array of obj 
   }
  
  getToppingsStrList() {
    let str = '';
    if (this.topping.length == 0) {
      str = "без соусов";
    }
    else {
      str = 'соус: ';
      this.topping.forEach((item) => {
        str += item.value + ' ';
    }) }
    return str;
  }
  
  calculatePrice() {
    let summ = this.size.price + this.stuffing.price;
    this.topping.forEach((item) => {
      summ += item.price;
    })
    return summ;
  }

  calculateCalories() {
    let summ = this.size.calories + this.stuffing.calories;;
    this.topping.forEach((item) => {
      summ += item.calories;
    })
    return summ;
  }

  info() {
    return `${this.size.value} гамбургер  содержит ${this.stuffing.value}, ${this.getToppingsStrList()}`;
  }

  infoHTML(id_info) {
    const info = document.getElementById(id_info);
    info.textContent = this.info();
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
