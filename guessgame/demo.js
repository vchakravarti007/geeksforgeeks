let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let output = document.getElementById("outputText");
let number = Math.floor(Math.random() * 10 + 1);

function checkNumber() {
  let userinput = document.getElementById("userinput").value;
  if (userinput == number) {
    alert("Congrats you Win");
  } else if (userinput < number) {
    alert("No is too Low");
  } else {
    alert("No is too High");
  }
}

submit.addEventListener("click", checkNumber);
reset.addEventListener("click", function () {
  location.reload();
});
console.log("External JavaScript file is working!");
