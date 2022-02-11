function getInput(input_id) {
  const inputField = document.getElementById(input_id);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //clear input filed
  inputField.value = "";
  return amountValue;
}

function updateTotalField(inputFieldId, Amount) {
  const totalElement = document.getElementById(inputFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = depositAmount + previousTotal;
}
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositAmount = getInput("deposite-input");

    updateTotalField("deposite-total", depositAmount);
    //update balance total
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  });

document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    const withdrowAmount = getInput(" withdrow-input");
    // update withdrowAmount
    updateTotalField("withdrow-total", withdrowAmount);
    //update balanceTotal
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previouseBalanceTotal - withdrowAmount;
  });
