const togglePrice = document.querySelector('input[name=toggle]');
const price = document.querySelectorAll('.box__price');

const annualPrices = [199.99, 249.99, 399.99];
const monthPrices = [19.99, 24.99, 39.99];

togglePrice.addEventListener('change', function () {
  for (let i = 0; i < monthPrices.length; i++) {
    if (this.checked) {
      price.forEach(el => {
        el.innerHTML = "<span>&dollar;</span>" + monthPrices[i++] + "";
      });
    } else {
      price.forEach(el => {
        el.innerHTML = "<span>&dollar;</span>" + annualPrices[i++] + "";
      });
    }
  }
});
