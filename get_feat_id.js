// get origin feature id by its category_feature_id
// path Defition > Search > Category > Specs

const container = document.getElementsByClassName("main info_bold");

function getFeatID(catFeatID) {
  for (var i = 0; i < container.length; i++) {
    if (container[i].innerHTML == catFeatID) {
      var featID = container[i + 9].innerHTML.split("=")[4].split(";")[0];
      console.log(`Origin (global) feature ID: ${featID}`);
    };
  };
};

getFeatID(catFeatID);
