// Random Number for Rock, Paper, Scissors by Computer.

switch (Math.floor(Math.random() * 9)) {
  case 0:
    value = "Rock";
    break;
  case 1:
    value = "Rock";
    break;
  case 2:
     value = "Rock";
    break;
  case 3:
    value = "Paper";
    break;
  case 4:
    value = "Paper";
    break;
  case 5:
    value = "Paper";
    break;
  case 6:
    value = "Scissors";
    break;
  case 7:
    value = "Scissors";
    break;
  case 8:
    value = "Scissors";
    break;
}

// User choice of Rock, Paper, or Scissors.

value2 = prompt("Please enter Rock, Paper, or Scissors:");

console.log(value);
document.writeln("The Random choice is: " + value + "<br>");
console.log(value2);
document.writeln("My Choice is: " + value2 + "<br>");

// Scissors cuts Paper
// System Wins
if (value === "Scissors" && value2 === "Paper") {
  console.log(value + " cuts " + value2 + "\n");
  document.writeln("System Wins! " + value + " cuts " + value2 + "<br>");
}
// User Wins
if (value === "Paper" && value2 === "Scissors") {
  console.log(value2 + " cuts " + value + "\n");
  document.writeln("User Wins! " + value2 + " cuts " + value + "<br>");
}

// Paper covers Rock
// System Wins
if (value === "Paper" && value2 === "Rock") {
  console.log(value + " covers " + value2 + "\n");
  document.writeln("System Wins! " + value + " covers " + value2 + "<br>");
}
// User Wins
if (value === "Rock" && value2 === "Paper") {
  console.log(value2 + " covers " + value + "\n");
  document.writeln("User Wins! " + value2 + " covers " + value + "<br>");
}


// Rock crushes Scissors
// System Wins
if (value === "Rock" && value2 ==="Scissors") {
  console.log(value + " crushes " + value2 + "\n");
  document.writeln("System Wins! " + value + " crushes " + value2 +"<br>");
}

// User Wins
if (value === "Scissors" && value2 ==="Rock") {
  console.log(value2 + " crushes " + value + "\n");
  document.writeln("User Wins! " + value2 + " crushes " + value + "<br>");
}

// No Winner

if (value === value2) {
  console.log(value + " and " + value2 + " are equal. No Winner." + "\n");
  document.writeln(value + " and " + value2 + " are equal. No Winner." + "<br>");
}