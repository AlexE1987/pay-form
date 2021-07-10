const productListSelect = document.querySelector('.product__list-select');
const infoList = document.querySelector('.info__list');
const btnContinue = document.querySelector('.btn_continue');
const btnSubmite = document.querySelector('.btn_submit');
const discountSafe = document.querySelectorAll('.discount-safe');

const inputsRadio = document.querySelectorAll('input[type="radio"]');

const producInfoUpdate = [];

const btnAdd = document.querySelector('.btn_add');
const formAddProduct = document.querySelector('.form_add-product');
const formInfo = document.querySelector('.form_info');

btnAdd.addEventListener('click', () => {
  formAddProduct.classList.toggle('hide');
  formInfo.classList.toggle('hide');
});

const addInfoElements = (count) => {
  for (let i = 0; i < count; i++) {
    producInfoUpdate.push(i + 1);
  }
};

const removeActive = () => {
  discountSafe.forEach((e) => {
    if (e.classList.contains('discount-safe_active')) {
      e.classList.remove('discount-safe_active');
    }
  });
};

for (let i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener('click', function (e) {
    let count = this.dataset.count;
    let costSumm = this.value;

    removeActive();

    let elementActive = e.target.parentElement.querySelector('.discount-safe');
    elementActive.classList.toggle('discount-safe_active');

    console.log('123', e.target.parentElement.querySelector('p'));

    producInfoUpdate.length = 0;
    addInfoElements(count, costSumm);

    const productListInfo = producInfoUpdate
      .map((product) => {
        const productRender = `
            <li class="info__list-item">
            <img class="image-remove" src="./images/remove-ico.svg" alt="Remove">
              <h2 class="info-title info-title_product">
                Product ${product}
              </h2>
              <p class="info-desc">
                Enter main keyword for the product
              </p>
              <input class="input input_key" type="text" placeholder="for example, sylicon wine cup">

              <p class="info-desc">
                  Enter link to the similar product as a reference
              </p>
              <input class="input input_link" type="text" placeholder="https://...">
            </li>
      `;
        return productRender;
      })
      .join('');

    infoList.innerHTML = productListInfo;
    btnSubmite.innerText = `Submit and Pay ${costSumm} USD`;
  });
}

btnContinue.addEventListener('click', () => {
  for (let i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].checked = false;
  }
  formAddProduct.classList.toggle('hide');
  formInfo.classList.toggle('hide');
});

const btnSubmitInfo = () => {
  let quantityElements = infoList.querySelectorAll('li').length;
  switch (quantityElements) {
    case 0:
      btnSubmite.innerText = 'Please add products';
      // btnSubmite.style = 'cursor: not-allowed';
      break;
    case 1:
      btnSubmite.innerText = 'Submit and Pay 24.99 USD';
      break;
    case 2:
      btnSubmite.innerText = 'Submit and Pay 44 USD';
      break;
    case 3:
      btnSubmite.innerText = 'Submit and Pay 60 USD';
      break;
    case 4:
      btnSubmite.innerText = 'Submit and Pay 72 USD';
      break;
    case 5:
      btnSubmite.innerText = 'Submit and Pay 80 USD';
      break;
  }
};

infoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('image-remove')) {
    let lastElement = e.target.parentElement.parentElement.lastElementChild;
    lastElement.remove();
    btnSubmitInfo();
  }
});
