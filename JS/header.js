var header = document.querySelector("#header");
var footer = document.querySelector("footer");

function updateheaderPosition() {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollPosition = window.innerHeight + window.pageYOffset;
  var footHeight = footer.offsetHeight;

  if (scrollHeight - scrollPosition <= footHeight) {
    // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
    header.style.position = "fixed";
    header.style.bottom = footHeight + "px";
  } else {
    header.style.position = "fixed";
    header.style.bottom = "3rem";
  }
}

function handleScroll() {
  updateheaderPosition();
}

window.addEventListener("scroll", handleScroll);

// ページが読み込まれた時に初期位置を設定する
window.addEventListener("DOMContentLoaded", function () {
  updateheaderPosition();
});

