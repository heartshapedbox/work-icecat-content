// get product id from Product > Search page

const container = document.getElementsByClassName('product-row');
const prodAttributes = {}

function getProductID() {
  for (var i = 0; i < container.length; i++) {
    const element = container[i].querySelectorAll('a')[0];
    const prodMPN = element.innerHTML;
    const prodID = element.getAttribute('href').split('=')[2].split(';')[0];
    prodAttributes[`MPN: ${prodMPN}`] = `ID: ${prodID}`
  };
  console.log(prodAttributes)
};

getProductID()
