$(document).ready(function() {

  var count = $(".smallform")[0].length;

  function justSkipIt (catID) {
    for (var i = count - 1; i >= 0; i--) {
      if (($(".smallform")[0][i]).getAttribute("catid") == catID) {
        $(".smallform")[0][i].selected = false;
      } else {$(".smallform")[0][i].selected = true;}
    }
  }
  justSkipIt(СюдаАйДи);
});
