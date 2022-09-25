// $(document).ready(function () {
//   $(".carousel").carousel({
//     interval: 2000,
//   });
// });

function myFunction() {
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;
  if (un == "mike" && pw == "1234") {
    window.location.href = "home.html";
  } else {
    alert("Invalid User Name and Password");
  }
  console.log(myFunction);
}

// function login(loginForm) {
//   if (loginForm.username.value && loginForm.password.value) {
//     var username = document.getElementById("username").value;
//     document.write("<html><body><h1><center>");
//     document.write("Welcome" + "");
//     document.write("username");
//     document.write("</center></h1></body></html>");
//   } else alert("Please Enter a username and password");
// };

// LIKE AND DISLIKE BUTTON

let likebtn = document.querySelector("#likebtn");
let dislikebtn = document.querySelector("#dislikebtn");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

likebtn.addEventListener("click", () => {
  input1.value = parseInt(input1.value) + 1;
  input1.style.color = "#008000";
});

dislikebtn.addEventListener("click", () => {
  input2.value = parseInt(input2.value) + 1;
  input2.style.color = "#ff0000";
});

// SHARE BUTTON

const link = "https://openjavascript.info/2022/08/22/using-json-in-javascript";
const msg = encodeURIComponent("Awesome article, a must read");
const title = encodeURIComponent(document.querySelector("title").textContent);

console.log([link, msg, title]);

const twitter = document.querySelector(".twitter");
twitter.href = `https://twitter.com/share?url=${link}&text=${msg}&hastags=javascript,programming`;
