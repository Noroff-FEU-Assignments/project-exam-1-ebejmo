import { displayHtml } from "./functions/displayHtml.js";

const form = document.querySelector(".contact-form");

const fullName = document.querySelector(".full-name");
const nameError = document.querySelector("#full-name-error");
const email = document.querySelector(".email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector(".subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector(".message");
const messageError = document.querySelector("#mess-error");
const successMessage = document.querySelector(".form-success");

function formValidation(event) {
  event.preventDefault();

  if (minLength(fullName.value, 4)) {
    nameError.style.display = "none";
    fullName.style.border = "1px solid green";
  } else {
    nameError.style.display = "block";
    fullName.style.border = "1px solid #b60112";
  }

  if (minLength(subject.value, 14)) {
    subjectError.style.display = "none";
    subject.style.border = "1px solid green";
  } else {
    subjectError.style.display = "block";
    subject.style.border = "1px solid #b60112";
  }

  if (minLength(message.value, 24)) {
    messageError.style.display = "none";
    message.style.border = "1px solid green";
  } else {
    messageError.style.display = "block";
    message.style.border = "1px solid #b60112";
  }

  if (emailValidation(email.value)) {
    emailError.style.display = "none";
    email.style.border = "1px solid green";
  } else {
    emailError.style.display = "block";
    email.style.border = "1px solid #b60112";
  }

  function submitForm() {
    if (
      minLength(fullName.value, 4) &&
      minLength(subject.value, 14) &&
      minLength(message.value, 24) &&
      emailValidation(email.value)
    ) {
      successMessage.innerHTML = `<div class="success">Message recievied, you will here from us shortly.</div>`;
      successMessage.style.display = "block";
      form.reset();
    } else {
      successMessage.innerHTML = "";
    }
  }
  submitForm();
}

function minLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}

form.addEventListener("submit", formValidation);
setTimeout(displayHtml, 2000);
