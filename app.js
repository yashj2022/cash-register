const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeTable = document.querySelector(".change-table");

const availabeNotes = ["2000", "500", "100", "20", "10", "5", "1"];
changeTable.style.visibility = "hidden";
function validateBillAndCashAmount() {
  changeTable.style.visibility = "visible";
  var billAmountINNum = Number(billAmount.value);
  var cashGivenINNum = Number(cashGiven.value);
  // console.log(billAmountINNum > 0 && cashGivenINNum >= 0);
  hideMessage();

  if (billAmountINNum > 0 && cashGivenINNum >= 0) {
    if (cashGivenINNum > billAmountINNum) {
      const amountToBeReturned = cashGivenINNum - billAmountINNum;
      calculateChange(amountToBeReturned);
    } else if (cashGivenINNum === billAmountINNum) {
      changeTable.style.visibility = "hidden";
      errorMessage.style.display = "block";
      errorMessage.innerText = "do not need to return any amount😀";
    } else {
      changeTable.style.visibility = "hidden";
      showMessage("Do you Wanna wash plates 😄😆");
    }
  } else {
    changeTable.style.visibility = "hidden";
    showMessage("Invalid  Amount");
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availabeNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availabeNotes[i]);

    amountToBeReturned = amountToBeReturned % availabeNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

checkButton.addEventListener("click", validateBillAndCashAmount);