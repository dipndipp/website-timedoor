/* --------------------------- Meeting 9 | CLick and Change Mini Text ------------------------- */
function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll down";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";

  var iconUp = document.getElementsByClassName("icon-up")[0];

  iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
  };
}

/* --------------------------- Meeting 11 | Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }

  this.classList.toggle("red");
}

/* --------------------------- Meeting 12 | Change Jumbotron Image ------------------------- */
function changeImage(element) {
  element.setAttribute(
    "src",
    "https://i0.wp.com/timedooracademy.com/wp-content/uploads/2022/10/Kelapa-Gading.jpeg"
  );
  // element.setAttribute("height", "300")
  // element.setAttribute("class", "jumbotron-img")
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://i0.wp.com/timedoor.net/wp-content/uploads/2021/02/why-us-2-min.jpg?fit=597%2C372&ssl=1"
  );
  // element.setAttribute("height", "300")
}

/* --------------------------- Challenge of Meeting 12 | Change Jumbotron Title ------------------------- */
function changeTitle(element) {
  element.innerHTML = "buat game dan website simpel";
}

function changeTitleBack(element) {
  element.innerHTML = "Get Programming Tips Here!";
}
function dislek() {
  alert("jahat lu tae");
}
function lek() {
  alert("makasih bang😁😁");
}

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  // Check the inputed value
  if (inputValue === "" || inputValue === " ") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }
  // Clear text on the search bar
  document.getElementById("myInput").value = "";
  // Create button close
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");
  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
