"use strict";
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
let url = `${API}/catalogData.json`

async function get(url) {
  let response = await fetch(url);
  console.log(response);
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    console.log('ok');
    let json = await response.json();
    console.log(json);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}

get(url);