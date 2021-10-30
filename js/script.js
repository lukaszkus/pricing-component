const togglePrice = document.querySelector('input[name=toggle]');
const price = document.querySelectorAll('.box__price');

const annualPrices = [199.99, 249.99, 399.99];
const monthPrices = [19.99, 24.99, 39.99];


function annual() {
  for (let i = 0; i < annualPrices.length; i++){
    price.forEach(el => {
      el.innerHTML = "<span>&dollar;</span> "+ annualPrices[i++] +" ";
    });
  }
}
annual();

function month() {
  for (let i = 0; i < monthPrices.length; i++){
    price.forEach(el => {
    el.innerHTML = "<span>&dollar;</span> "+ monthPrices[i++] +" ";
  });
  }
}

togglePrice.addEventListener('change', function() {
  this.checked ? month() : annual();
});
