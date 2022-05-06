// get products attribute [MPN] from "push me to see my products" overlay-baloon target-element from the path Defition > Search > Feature > Values

const container = document.getElementsByClassName("maintxt")[0];
const element = container.querySelectorAll("a");
const products = [];

function getProducts() {
  for (var i = 0; i < element.length; i++) {
    products.push(element[i].innerHTML);
  };
  console.log(products.join("\n"));
};
getProducts();
