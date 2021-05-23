"use strict";

console.log("gopi");

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
var password = document.getElementById("password");
// const showPassword = document.getElementById("show");
const confirmPassword = document.getElementById("confirm-password");

function showPassword() {
  if (password.type === "password") {
    password = "text";
  } else {
    password.type = "password";
  }
}
