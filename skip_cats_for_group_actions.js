// skip redundant categories in "Product selection" area for group actions

var container = document.getElementsByClassName("smallform")[0]
var element = container.querySelectorAll("option");

function skipCatIDs(catID) {
  for (var i = 0; i < element.length; i++) {
    if (element[i].getAttribute("catid") == catID) {
      element[i].selected = false
    }
    else {
      element[i].selected = true;
    }
  }
}

skipCatIDs(catID)
