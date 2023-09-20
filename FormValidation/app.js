let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");

let password = document.getElementById("password");
let password2 = document.getElementById("password2");
flag = 1;

function validateForm() {
  if (fname.value == "") {
    document.getElementById("fnameError").innerHTML = "First name is empty";
    flag = 0;
  } else if (fname.value.length < 12) {
    document.getElementById("fnameError").innerHTML =
      "First Name limit max 10 char";
    flag = 0;
  } else {
    document.getElementById("fnameError").innerHTML = "";
    flag = 1;
  }

  if (lname.value == "") {
    document.getElementById("lnameError").innerHTML = "Last name is empty";
    flag = 0;
  } else if (lname.value.length < 12) {
    document.getElementById("lnameError").innerHTML =
      "First Name limit max 15 char";
    flag = 0;
  } else {
    document.getElementById("fnameError").innerHTML = "";
    flag = 1;
  }

  if (password.value == "") {
    document.getElementById("passwordError").innerHTML =
      "Password can't be Empty";
    flag = 0;
  } else if (password.value.length < 8) {
    document.getElementById("passwordError").innerHTML =
      "Password is too short";
    flag = 0;
  } else {
    document.getElementById("fnameError").innerHTML = "";

    flag = 1;
  }

  if (password2.value == "") {
    document.getElementById("password2Error").innerHTML =
      "Password can't be Empty";
    flag = 0;
  } else if (password2.value.length < 8) {
    document.getElementById("password2Error").innerHTML =
      "Password is too short";
    flag = 0;
  } else {
    document.getElementById("fnameError").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}

function validateemail(email) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let isValid = emailPattern.test(email);

  if (isValid) {
    document.getElementById("emailError").innerHTML = "";
    flag = 0;
  } else {
    document.getElementById("emailError").innerHTML = " invalid Email";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
