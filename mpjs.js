//1
let subTot = document.getElementById("subtotal");
let perc = document.getElementById("percentage");
let calcTip = document.getElementById("calcTip");
let tipAmt = document.getElementById("tipAmt");
let bill = document.getElementById("bill");
//2
let hours = document.getElementById("hours").innerHTML;
let rate = document.getElementById("rate").innerHTML;
let calcPay = document.getElementById("calcPay");
let check = document.getElementById("check").innerHTML;
//3
let ptsEarn = document.getElementById("earned").innerHTML;
let ptsTot = document.getElementById("total").innerHTML;
let calcGrade = document.getElementById("calcGrade");
let grade = document.getElementById("grade").innerHTML;
//4
let size = document.getElementById("size").innerHTML;
let price = document.getElementById("price").innerHTML;
let calcGas = document.getElementById("calcGas");
let cost = document.getElementById("fillCost").innerHTML;

// tipAmount = subTotal * percentage;
// totalBill = subTotal + tipAmount;

// paycheckAmount = hoursWorked * hourlyRate;

// percentGrade = pointsEarned / totalPoints;

// gasCost = tankGallons * perGallon;

calcTip.addEventListener('click', calculateTip);

function calculateTip(){
    tipAmt = subTot * perc;
    bill = subTot + tipAmt;
}

console.log(subTot.value*perc.value)