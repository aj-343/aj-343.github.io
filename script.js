function q() {
    var userLang = navigator.language || NavigationPreloadManager.userLanguage;
    console.log(userLang);
}

// 680 by 390 ~ 1.75:1 ratio

function getCssVar(VarName) {
  var val = getComputedStyle(document.querySelector(":root")).getPropertyValue(
    VarName
  );
  if (val.indexOf("px") != -1) {
    return val.substring(0, val.indexOf("px"));
  } else {
    return val;
  }
}

function setCssVar(VarName, newAssignment) {
  document
    .querySelector(":root")
    .style.setProperty(VarName, newAssignment + "px");
}

function sizeBackgroundImage() {
    var bgImg = window.document.getElementById("bgImg");
    var width = window.innerWidth;

    var height = width * (390/680);
    setCssVar("--bgImageHeight", height)
}

window.onload = sizeBackgroundImage();