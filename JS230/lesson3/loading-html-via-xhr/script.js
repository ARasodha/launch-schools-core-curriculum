document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');

  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', event => store.innerHTML = request.response);
  request.send();

  store.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName !== 'A') return;

    event.preventDefault();
  
    let request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send();
  });

  store.addEventListener('submit', event => {
    event.preventDefault();

    let form = event.target;
    console.log(event.target);
    let data = new FormData(form);
    let request = new XMLHttpRequest();

    request.open('POST', `https://ls-230-web-store-demo.herokuapp.com${form.getAttribute('action')}`);
    
    request.addEventListener('load', event => store.innerHTML = request.response);
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
    request.send(data);
  });

});


function createProduct(productData) {
  let json = JSON.stringify(productData);
  let request = new XMLHttpRequest();

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  request.addEventListener('load', () => {
    console.log(`This product was added: ${request.responseText}`);
  });

  request.send(json);
}

createProduct({
  name: 'HB pencil',
  sku: 'hbp100',
  price: 50,
});