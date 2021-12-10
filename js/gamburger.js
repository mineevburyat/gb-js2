class ParamObj {
  constructor(element) {
    this.value = element.value;
    this.price = +element.dataset.price;
    this.calories = +element.dataset.calories;
  }
}

class Hamburger {
  //size (str) - id of select element for size 
  //stuffing (str) - id of select element of stuffing
  //topping (str) - name of checkboxes 
  constructor(size, stuffing, topping) { 
    this.size = this._getSelectOptions(size); //obj {value: "", text: "", price: num, calories: num}
    this.stuffing = this._getSelectOptions(stuffing); //obj {value: "", text: "", price: num, calories: num}
    this.topping = this._getSelectCheckbox(topping); //array of obj 
  }
  //метод возвращающая объект (value, price, calories) с выбранной опцией 
  _getSelectOptions(id_select) {
    let returnitem;
    [... document.getElementById(id_select).options].forEach((item) => {
    if (item.selected) {
      returnitem = item;
      }
    });
    return new ParamObj(returnitem);
  }
  //метод возвращает массив объектов
  _getSelectCheckbox(name_input) {
    let arr = [... document.querySelectorAll(`input[name=${name_input}]:checked`)]
    let arr_obj = arr.map((item) => {
      let obj = new ParamObj(item);
      return obj;
    });
    return arr_obj;
  }
  _getToppingsStrList() {
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
    return `${this.size.value} гамбургер  содержит ${this.stuffing.value}, ${this._getToppingsStrList()}`;
  }
  //метод изменения тектового содержания элемента с id_element 
  //id_element (str)- id HTML элемента
  //value (num or str) - подставляемое значение
  textInHTMLItem(id_element, value) {
    const item = document.getElementById(id_element);
    item.textContent = value;
  }

  // infoHTML(id_info) {
  //   const info = document.getElementById(id_info);
  //   info.textContent = this.info();
  // }
  // totalHTML(id_totalelement, id_calloryelement) {
  //   const total = document.getElementById(id_totalelement);
  //   // console.log(total);
  //   const callory = document.getElementById(id_calloryelement);
  //   total.textContent = this.calculatePrice();
  //   callory.textContent = this.calculateCalories();
  // }
}

// const bigmac = new Hamburger('big', 'withpotatos');
// bigmac.addTopping('paper');
// bigmac.addTopping('mayonnese');
// bigmac.printstatus();
// bigmac.removeTopping('mayonnese');
// bigmac.printstatus();
