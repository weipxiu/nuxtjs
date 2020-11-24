var win_width = 375;
var setFontSize = function () {
  win_width = window.innerWidth;
  var w_init = 750;
  var pro = 100 * win_width / w_init;
  if (win_width > 767 && win_width < 1000) {
    pro = 30
  }
  if (win_width > 1000) {
    pro = 50
  }
  document.documentElement.style.setProperty("font-size", pro + "px");
}

setFontSize();
window.onresize = function () {
  setFontSize()
}
