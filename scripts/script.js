"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
var password = document.getElementById("password");
// const showPassword = document.getElementById("show");
const confirmPassword = document.getElementById("confirm-password");

const inputArr = [username, email, password, confirmPassword];
//functions

//show error
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control  error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
//show success function
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

//valid email function
const validEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
};

//checkEmail
const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase().trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

//check input function
const checkInputs = function (inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `${message(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

//min&max function
const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${message(input)} at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${message(input)} below the ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const verifyPasswordsMatch = function (input1, input2) {
  if(input1.value !== '' && input2.value !==''{
    if (input1.value !== input2.value) {
      showError(input1, "password is not matched");
      showError(input2, "password is not matched");
    } else {
      showSuccess(input1);
      showSuccess(input2);
    }
  })
};

//message function
const message = function (input) {
  var errorMessage = input.id.replace(/-p/, " P");
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};
//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs(inputArr);
  checkLength(username, 3, 12);
  checkEmail(email);
  checkLength(password, 5, 12);
  verifyPasswordsMatch(password, confirmPassword);
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   if (username.value === "") {
//     showError(username, "username required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!validEmail(email.value)) {
//     showError(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }
//   if (confirmPassword.value === "") {
//     showError(confirmPassword, "confirmPassword is required");
//   } else {
//     showSuccess(confirmPassword);
//   }
// });
