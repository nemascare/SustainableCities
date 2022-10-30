let list = document.querySelector("#dropdown");
let myBtn = document.querySelector("#dropbtn");
let state = 0;
myBtn.onclick = function () {
  if (state == 0) {
    list.style.display = "block";
    state = 1;
  } else {
    list.style.display = "none";
    state = 0;
  }
};
