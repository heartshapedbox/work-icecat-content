// get category attributes [name, ID] from "Category" dropdown-list target-element from the path Defition > Search > Feature > Values

const container = document.getElementById("search_catid");
const element = container.querySelectorAll("option");
const catAttributesList = [];

function getCatAttributes() {
  for (var i = 1; i < element.length; i++) {
    catAttributesList.push(`${element[i].innerHTML.slice(0, -1)} [${element[i].value}]`);
  };
  console.log(catAttributesList.join("\n"));
};

getCatAttributes();
