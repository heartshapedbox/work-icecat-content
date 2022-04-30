var element = document.querySelectorAll("Manufacturer_Productid");
var arr = [];

function f() {
  for (var i = 0; i < element.length; i++) {
    arr.push(element[i].innerHTML);
  }
  alert(arr.join("\n"));
}

f();