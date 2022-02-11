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
  totalElement.innerText = Amount + previousTotal;
}
function balanceTotal(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  //   const balanceTotalText = balanceTotal.innerText;
  //   const previousBalanceTotal = parseFloat(balanceTotalText);
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    // const depositeinput = document.getElementById("deposite-input");
    // const newDepositeAmountText = depositeinput.value;
    // const newDepositeAmount = parseFloat(newDepositeAmountText);

    // deposite balance
    // const depositeTotal = document.getElementById("deposite-total");
    // const priviousDepositeAmountText = depositeTotal.innerText;
    // const priviousDepositeAmount = parseFloat(priviousDepositeAmountText);
    // const newDepositeTotal = priviousDepositeAmount + newDepositeAmount;
    // depositeTotal.innerText = newDepositeTotal;

    //update balance total
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;

    const depositAmount = getInput("deposite-input");
    if (depositAmount > 0) {
      updateTotalField("deposite-total", depositAmount);
      balanceTotal(depositAmount, true);
    } else {
      alert("enter a valid amount");
    }
  });

document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    // const withdrowInput = document.getElementById(" withdrow-input");
    // const withdrawAmountText = withdrowInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);

    // update withdrowAmount
    // const withdrawTotal = document.getElementById("withdrow-total");
    // const priviouseWithdrawText = withdrawTotal.innerText;
    // const priviouseWithdrawTotal = parseFloat(priviouseWithdrawText);
    // const newWithdrawTotal = priviouseWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    //update balanceTotal
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previouseBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previouseBalanceTotal - withdrowAmount;
    const cureentBalance = getCurrentBalance();
    const withdrowAmount = getInput(" withdrow-input");
    if (withdrowAmount > 0 && withdrowAmount < cureentBalance) {
      updateTotalField("withdrow-total", withdrowAmount);
      balanceTotal(withdrowAmount, false);
    } else {
      alert("enter a valid amount");
    }
  });
