let save = document.getElementById("saveFile");
let text = document.getElementById("textArea");
let file = document.getElementById("file");

save.onclick = function () {
  console.log(text.value);
};
let sidebar = document.getElementById("sidebar");
let fileImg = document.getElementById("fileImg");
let searchImg = document.getElementById("searchImg");
let sourceImg = document.getElementById("sourceImg");
let runImg = document.getElementById("runImg");
let extImg = document.getElementById("extenImg");

let explorer = document.getElementById("explorer");
let search = document.getElementById("search");
let source = document.getElementById("source");
let run = document.getElementById("run");
let extension = document.getElementById("extension");

function Onload() {
  explorer.style.display = "";
  search.style.display = "none";
  source.style.display = "none";
  run.style.display = "none";
  extension.style.display = "none";
}
Onload();

fileImg.onclick = function () {
  explorer.style.display = "";
  search.style.display = "none";
  source.style.display = "none";
  run.style.display = "none";
  extension.style.display = "none";
};

searchImg.onclick = function () {
  explorer.style.display = "none";
  search.style.display = "";
  source.style.display = "none";
  run.style.display = "none";
  extension.style.display = "none";
};
sourceImg.onclick = function () {
  explorer.style.display = "none";
  search.style.display = "none";
  source.style.display = "";
  run.style.display = "none";
  extension.style.display = "none";
};
runImg.onclick = function () {
  explorer.style.display = "none";
  search.style.display = "none";
  source.style.display = "none";
  run.style.display = "";
  extension.style.display = "none";
};
extImg.onclick = function () {
  explorer.style.display = "none";
  search.style.display = "none";
  source.style.display = "none";
  run.style.display = "none";
  extension.style.display = "";
};
