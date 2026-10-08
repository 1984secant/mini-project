//1
let calcTip = document.getElementById("calcTip");
//2
let calcPay = document.getElementById("calcPay");
//3
let calcGrade = document.getElementById("calcGrade");
//4
let calcGas = document.getElementById("calcGas");

// tipAmount = subTotal * percentage;
// totalBill = subTotal + tipAmount;

// paycheckAmount = hoursWorked * hourlyRate;

// percentGrade = pointsEarned / totalPoints;

// gasCost = tankGallons * perGallon;

document.getElementById("calcTip").addEventListener('click', calculateTip);

function calculateTip(){
  subtotal = document.getElementById("subtotal").value;
  percentage = document.getElementById("percentage").value;
  

  let tipAmt = subtotal * percentage;
  let bill = tipAmt.valueAsNumber + subtotal;

  document.getElementById("tipAmt").textContent = tipAmt;
  document.getElementById("bill").textContent = bill;

}

document.getElementById("calcPay").addEventListener('click', calculatePay);

function calculatePay(){
  hours = document.getElementById("hours").value;
  rate = document.getElementById("rate").value;

  let paycheck = hours * rate;

  document.getElementById("check").textContent = paycheck;
}

document.getElementById("calcGrade").addEventListener('click', calculateGrade);

function calculateGrade(){
  earned = document.getElementById("earned").value;
  total = document.getElementById("total").value;

  let grade = Math.round((earned/total)*100);

  document.getElementById("grade").textContent = grade;
}


document.getElementById("calcGas").addEventListener('click', calculateGas);

function calculateGas(){
  price = document.getElementById("price").value;
  tankSize = document.getElementById("size").value;

  let cost = price * tankSize;

  document.getElementById("fillCost").textContent = cost;
}
