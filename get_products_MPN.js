// get products MPN from "push me to see my products" overlay-balloon:
// for feature with any input type
// path: Defition > Search > Feature > Values
// click "?" to get overlay-balloon visible

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
  setTimeout(getMPN, 3000);
};

process();
