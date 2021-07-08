const products = [
  { count: 5, cost: 16, summ: 80, discount: 36 },
  { count: 4, cost: 18, summ: 72, discount: 28 },
  { count: 3, cost: 20, summ: 60, discount: 20 },
  { count: 2, cost: 22, summ: 44, discount: 12 },
  { count: 1, cost: 0, summ: 24.99 },
];

const productChose = document.querySelector('.product-chose__container');

const productList = products
  .map((product) => {
    let i = product;
    const productRender = `
  <div class="radio-item">
    <input class="input-radio" type="radio" id="ritema${product.count}" name="ritem" value="ropt${product.count}">
    <label for="ritema${product.count}">
      <div class="discount__container">
        <h4 class="discount-title">${product.count} products for ${product.summ} usd / ${product.cost}$ for each</h4>
        <p class="discount-safe">You safe ${product.discount}% on each patent check</p>
      </div>
  </label>
  </div>
        `;
    return productRender;
  })
  .join('');
productChose.innerHTML = productList;

let test = document.createElement('div');
test.innerHTML = `
        <h2 class="info-title info-title_product">
          Product 1
        </h2>
        <p class="info-desc">
          Enter main keyword for the product
        </p>
        <input class="input input_key" type="text" placeholder="for example, sylicon wine cup">
        `;
let inputsRadio = document.querySelectorAll('input[type="radio"]');

const producInfoUpdateArr = [];

function addElements(count) {
  for (let i = 0; i <= count; i++) {
    producInfoUpdateArr.push(test);
    console.log('test', producInfoUpdateArr);
  }
  console.log('11', count);
}

for (let i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener('click', function () {
    let radioBtnValue = this.value.slice(-1);
    // let countElements = radioBtnValue.
    addElements(i);
    console.log(+radioBtnValue);
    console.log(typeof radioBtnValue);
  });
}
