// get products MPN from "push me to see my products" overlay-balloon for "Y" value only:
// for feature with "Y/N" input type
// path: Defition > Search > Feature > Values
// no need to click "?" to get overlay-balloon visible

const rows = document.getElementsByClassName('main info_bold');
targerRow = rows[rows.length - 4];
targerRow.querySelector('img').click();

function showAll() {
  document.getElementsByClassName('divajax')[0].click();
}

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
  setTimeout(showAll, 5000);
  setTimeout(getMPN, 10000);
}

process();
