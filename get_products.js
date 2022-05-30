// get products attribute [MPN] from "push me to see my products" overlay-baloon target-element from the path Defition > Search > Feature > Values
document.getElementsByClassName('divajax')[0].click();

function getMPN() {
  const container = document.getElementsByClassName("maintxt")[0];
  const element = container.querySelectorAll("a");
  const products = [];
  for (var i = 0; i < element.length; i++) {
    products.push(element[i].innerHTML);
  };
  console.log(products.join("\n"));
};


function process() {
  setTimeout(getMPN, 10000);
}

process();
