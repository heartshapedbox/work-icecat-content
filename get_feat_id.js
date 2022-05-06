// get origin feature id by its category_feature_id from the path Defition > Search > Category > Specs

const container = document.getElementsByClassName("main info_bold");

function get_feat_id(cat_feat_id) {
  for (var i = 0; i < container.length; i++) {
    if (container[i].innerHTML == cat_feat_id) {
      var feat_id = container[i + 9].innerHTML.split("=")[4].split(";")[0];
      console.log(`Origin (global) feature ID: ${feat_id}`);
    };
  };
};

get_feat_id(cat_feat_id);
