// get category attributes [name, ID] from "Category" dropdown-list target-element from the path Defition > Search > Feature > Values

var container = document.getElementById("search_catid");
var element = container.querySelectorAll("option");
var catAttributesList = [];

function getCatAttributes() {
  for (var i = 1; i < element.length; i++) {
    catAttributesList.push(`${element[i].innerHTML.slice(0, -2)} [${element[i].value}]`);
  }
  console.log(catAttributesList.join("\n"));
}

getCatAttributes();
