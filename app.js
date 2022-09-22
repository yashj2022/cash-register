const billAmt = document.querySelector("#bill");
const cashAmt = document.querySelector("#cash");
const button = document.querySelector("#button");
const errMsgDiv = document.querySelector("#messageDiv");
const NoOfNotes = document.querySelectorAll(".NoOfNotes");
const nextBtn = document.querySelector("#next-btn");
const cashGivenDiv = document.querySelector("#cash-given");
const table = document.querySelector("#table");
const caption = document.querySelector("#caption");
const notesArr = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

button.addEventListener("click", () => {
    const billValue = parseInt(billAmt.value);
    const cashValue = parseInt(cashAmt.value);
    hideErrMsg();
    table.style.display = "none";
    if (billValue > 0) {
        if (cashValue >= billValue) {
            const returnAmt = cashValue - billValue;
            console.log(returnAmt);
            calculateAmt(returnAmt);
            table.style.display = "block";
            caption.innerHTML = `<h3>Change to Return : ₹${returnAmt}</h3>`;
        } else {
            errMsgHandler("You need to give more money to pay bill.");
        }
    } else {
        errMsgHandler("Please enter valid bill amount!");
    }
});
nextBtn.addEventListener("click", () => {
    hideErrMsg();
    if (billAmt.value > 0) {
        cashGivenDiv.style.display = "flex";
        nextBtn.style.display = "none";
    } else {
        errMsgHandler("Please enter valid bill amount");
    }
});

function hideErrMsg() {
    errMsgDiv.style.display = "none";
}

function calculateAmt(returnAmt) {
    for (let i = 0; i < notesArr.length; i++) {
        const notes = Math.trunc(returnAmt / notesArr[i]);
        returnAmt = returnAmt % notesArr[i];
        NoOfNotes[i].innerText = notes;

        if (notes > 0) {
            NoOfNotes[i].style.backgroundColor = "#F0F8FF";
            NoOfNotes[i].style.color = "black";
        }
    }
}

//error msg function
function errMsgHandler(msg) {
    errMsgDiv.style.display = "block";
    errMsgDiv.innerText = msg;
}