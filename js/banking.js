document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositeInput = document.getElementById("deposite-input");
    const depositeAmountText = depositeInput.value;
    const depositAmount = parseFloat(depositeAmountText);

    const depositeTotal = document.getElementById("deposite-total");
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositAmount + previousDepositeTotal;

    //update balance total
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    //clear input filed
    depositeInput.value = "";
  });
