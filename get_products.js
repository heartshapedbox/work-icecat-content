var container = document.getElementsByClassName("maintxt")[0];
var element = container.querySelectorAll("a");
var products = [];

function getProducts() {
  for (var i = 0; i < element.length; i++) {
    products.push(element[i].innerHTML)
  };
  console.log(products.join("\n"));
};
getProducts()
