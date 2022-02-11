function getInput() {
  const depositeInput = document.getElementById("deposite-input");
  const depositeAmountText = depositeInput.value;
  const depositAmount = parseFloat(depositeAmountText);
  //clear input filed
  depositeInput.value = "";
  return depositAmount;
}

document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    // const depositeInput = document.getElementById("deposite-input");
    // const depositeAmountText = depositeInput.value;
    // const depositAmount = parseFloat(depositeAmountText);
    const depositAmount = getInput();

    const depositeTotal = document.getElementById("deposite-total");
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositAmount + previousDepositeTotal;

    //update balance total
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  });

document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    const withdrowINput = document.getElementById(" withdrow-input");
    const withdrowAmountText = withdrowINput.value;
    const withdrowAmount = parseFloat(withdrowAmountText);

    // update withdrowAmount
    const withdrowTotal = document.getElementById("withdrow-total");
    const previousWithdrowTotalTExt = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalTExt);
    withdrowTotal.innerText = previousWithdrowTotal + withdrowAmount;

    //update balanceTotal
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previouseBalanceTotal - withdrowAmount;

    //clear input filed
    withdrowINput.value = "";
  });
