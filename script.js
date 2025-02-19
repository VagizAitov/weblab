const email = /^[^\s@]+@[^\s@0-9]+\.[^\s@0-9]+$/;
const phone = /^\+?\d{10,12}$/;

const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputName = document.getElementById("name");

let display = false;

document.querySelector(".btn-order").addEventListener("click", (e) => {
  let dialog = document.querySelector(".dialog");

  let close = document.querySelector(".close");

  const isValide =
    email.test(inputEmail.value) &&
    inputName.value != "" &&
    phone.test(inputPhone);
  console.log(isValide);

  if (!email.test(inputEmail.value)) {
    inputEmail.style.border = "1px solid red";
  } else {
    inputEmail.style.border = "1px solid #DEE2E6";
  }
  if (!phone.test(inputPhone.value)) {
    inputPhone.style.border = "1px solid red";
  } else {
    inputPhone.style.border = "1px solid #DEE2E6";
  }
  if (inputName.value == "") {
    inputName.style.border = "1px solid red";
  } else {
    inputName.style.border = "1px solid #DEE2E6";
  }

  console.log(
    "Email: ",
    inputEmail.value,
    "ФИО: ",
    inputName.value,
    "Номер телефона: ",
    inputPhone.value
  );
  if (!display) {
    dialog.style.display = "inline-block";
    document.querySelector(".footer").style.filter = "blur(2px)";
    document.querySelector(".main").style.filter = "blur(2px)";
    document.querySelector(".nav").style.filter = "blur(2px)";
    dialog.style.filter = "none";

    if (
      email.test(inputEmail.value) &&
      phone.test(inputPhone.value) &&
      inputName.value != ""
    )
      document.querySelector(".dialog-title").textContent = "Все введено верно";
    else
      document.querySelector(".dialog-title").textContent =
        "Некоторые поля введены неверно";
  }
  close.addEventListener("click", (e) => {
    dialog.style.display = "none";
    document.querySelector(".footer").style.filter = "none";
    document.querySelector(".main").style.filter = "none";
    document.querySelector(".nav").style.filter = "none";
  });
});
