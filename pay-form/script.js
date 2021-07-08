const form = document.querySelector('.form');
const btnAdd = document.querySelector('.btn_add');
const formAddProduct = document.querySelector('.form_add-product');
const formInfo = document.querySelector('.form_info');

btnAdd.addEventListener('click', () => {
  formAddProduct.classList.toggle('hide');
  formInfo.classList.toggle('hide');
});
