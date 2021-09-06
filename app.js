let arremail = [];

let email = document.getElementById("email-el");
let subscribeButton = document.getElementById("subscribe");

let emailfromlS = JSON.parse(localStorage.getItem("arremail"));

if (emailfromlS) {
  arremail = emailfromlS;
  inputemails();
}

subscribeButton.addEventListener("click", function () {
  if (email.value !== "") {
    arremail.push(email.value);
    email.value = " ";
    localStorage.setItem("email", JSON.stringify(arremail));
    inputemails();
  }
});

function inputemails() {
  let emails = "";
  for (let index = 0; index < arremail.length; index++) {
    emails += arremail[index];
  }
  p;
}
