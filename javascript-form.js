function hide() {
  row2.style.visibility='hidden';
  row3.style.visibility='hidden';
  row4.style.visibility='hidden';
  row5.style.visibility='hidden';
  row6.style.visibility='hidden';
  row7.style.visibility='hidden';
  row8.style.visibility='hidden';
  row9.style.visibility='hidden';
  row10.style.visibility='hidden';
}
function one() {
  var x = firstName.value;
  if (x.length != 0 && /^[a-zA-Z]+$/.test(x)) {
    row2.style.visibility='visible';
  } else {
    row2.style.visibility='hidden';
    row3.style.visibility='hidden';
    row4.style.visibility='hidden';
    row5.style.visibility='hidden';
    row6.style.visibility='hidden';
    row7.style.visibility='hidden';
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function two() {
  var x = lastName.value;
  if (x.length != 0 && /^[a-zA-Z]+$/.test(x)) {
    row3.style.visibility='visible';
  } else {
    row3.style.visibility='hidden';
    row4.style.visibility='hidden';
    row5.style.visibility='hidden';
    row6.style.visibility='hidden';
    row7.style.visibility='hidden';
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function three() {
  var x = email.value;
  if (forEmail(x) && x.length != 0) {
    row4.style.visibility='visible';
  } else {
    row4.style.visibility='hidden';
    row5.style.visibility='hidden';
    row6.style.visibility='hidden';
    row7.style.visibility='hidden';
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function four() {
  var x = pass.value;
  if (!/^[a-zA-Z0-9]+$/.test(x) && x.length >= 6) {
    row5.style.visibility='visible';
  } else {
    row5.style.visibility='hidden';
    row6.style.visibility='hidden';
    row7.style.visibility='hidden';
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function five() {
  var x = pass2.value;
  if (x == pass.value) {
    row6.style.visibility='visible';
  } else {
    row6.style.visibility='hidden';
    row7.style.visibility='hidden';
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function six() {
  var x = age.value;
  if (x >= 16 && x.length != 0) {
    row7.style.visibility='visible';
  } else {
    row7.style.visibility='hidden';
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function seven() {
  var x = phoneNumber.value;
  if ((x.substring(0, 1) == 0) && (x.length == 11)) {
    row8.style.visibility='visible';
  } else {
    row8.style.visibility='hidden';
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function eight() {
  var x = gender.value.toLowerCase();
  if ((x == "male" || x == "female") && (x.length != 0)) {
    row9.style.visibility='visible';
  } else {
    row9.style.visibility='hidden';
    row10.style.visibility='hidden';
  }
}
function nine() {
  var x = username.value;
  if (hasNumber(x) && x.length >= 6) {
    row10.style.visibility='visible';
  } else {
    row10.style.visibility='hidden';
  }
}
function ten() {
  var x = title.value.toLowerCase();
  if ((x == "mr") || (x == "miss") || (x == "mrs")) {
    alert("Congratulations! Your account has been created");
  } else {
    alert("Some requirements haven't been met!");
  }
}
function forEmail(anyEmail) {
  var ex = /^[a-zA-Z]+@xmail.com/g;
  return ex.test(anyEmail);
}
function hasNumber(anyString) {
  return /\d/.test(anyString);
}
