// get category attributes [name, ID] from "Category" dropdown-list target-element from the path Defition > Search > Feature > Products/Categories

const element = document.getElementsByClassName("linkmenu2");
const tempList = [];
const catAttributesList = [];

function getCatAttributes() {
  for (var i = 0; i < element.length; i++) {
    tempList.push(element[i].innerHTML.split("&gt;\n"));
  };
  for (var i = 0; i < tempList.length; i++) {
    const elementID = element[i].getAttribute("href").split("=")[2].split(";tmpl")[0];
    catAttributesList.push(`${tempList[i][tempList[i].length - 2]} [${elementID}]`);
  };
  catAttributesList.sort();
  console.log(catAttributesList.join("\n"));
};

getCatAttributes();
