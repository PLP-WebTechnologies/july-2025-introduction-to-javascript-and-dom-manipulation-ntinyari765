// Part 1: Basics
function greetUser() {
let name = document.getElementById("username").value;
if(name) {
    document.getElementById("greeting").innerText = "Hello," + name + "!";
}
else {
    document.getElementById("greeting").innerText = "Please enter your name!"; 
    console.log("No name was entered.");
}
}

// Part 2: Functions
function addNumbers(a, b) {
 return a + b;
}

function showSum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = addNumbers(num1, num2);
  document.getElementById("sumResult").innerText = "The sum is: " + result;
}

// Part 3 : Loops
function countDown() {
  let list = document.getElementById("countList");
  list.innerHTML = ""; // clear previous list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}
// Part 4: DOM Manipulation
// Toggle message visibility
document.getElementById("toggleBtn").addEventListener("click", function() {
  let msg = document.getElementById("toggleMessage");
  msg.classList.toggle("hidden");
});

// Add new list item dynamically
let itemCount = 0;
function addListItem() {
  itemCount++;
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "Item " + itemCount;
  list.appendChild(li);
}
