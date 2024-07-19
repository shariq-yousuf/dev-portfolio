import {
  cidArr,
  currencyValues,
  isPKR,
  cashInputEl,
  changeDueEl,
  totalAmount,
  calculateAndSaveCid,
  removePrices,
  getCid,
} from "./_user-input.js";

const calculateBtn = document.querySelector("#calculate-btn");
let changeDue;

const checkPurchase = (val) => {
  if (val < totalAmount) {
    alert("Customer does not have enough money to purchase the item");
  } else if (val === totalAmount) {
    changeDueEl.textContent = "No change due - customer paid with exact cash";
    removePrices();
  } else {
    checkDrawer(val);
  }
};

const checkDrawer = (val) => {
  const cashDue = val - totalAmount;
  const cidType = cidArr;
  const drawerCash = cidType.reduce((acc, item) => item[1] + acc, 0);

  if (cashDue > drawerCash) {
    showStatus("Status: INSUFFICIENT_FUNDS");
  } else {
    returnChange(cashDue, cidType);
  }
};

const showStatus = (status) => {
  changeDueEl.textContent = status;
};

const returnChange = (cashDue, cid) => {
  changeDue = [];
  let remainingDue = cashDue;

  cid.toReversed().forEach((item, index) => {
    const name = item[0];
    let cash = item[1];
    const currency = isPKR ? currencyValues[0][name] : currencyValues[1][name];

    while (parseFloat(remainingDue.toFixed(2)) >= currency && cash > 0) {
      changeDue[index]
        ? (changeDue[index] = [name, changeDue[index][1] + currency])
        : (changeDue[index] = [name, currency]);
      remainingDue -= currency;
      cash -= currency;
    }
  });

  if (remainingDue >= 0.01) {
    showStatus("Status: INSUFFICIENT_FUNDS");
  } else {
    withdrawFromDrawer(cid);
  }
};

const withdrawFromDrawer = (cid) => {
  changeDue.forEach((changeItem) => {
    cid.forEach((cidItem, i) => {
      if (cidItem[0] === changeItem[0]) {
        cid[i][1] -= changeItem[1];
      }
    });
  });

  displayChange(cid);
  getCid();
  removePrices();
};

const displayChange = (cid) => {
  const drawerCash = cid.reduce((acc, item) => item[1] + acc, 0);
  changeDueEl.innerHTML = `Status: ${drawerCash > 0 ? "OPEN" : "CLOSED"}`;

  changeDue.forEach((item, index) => {
    setTimeout(() => {
      changeDueEl.innerHTML += `
          <div class="flex-between">
          <span>${item[0]}:</span>
          <span>${isPKR ? "Rs. " : "$ "}${item[1].toFixed(2)}</span>
          </div>
        `;
    }, index * 100);
  });
};

calculateBtn.addEventListener("click", () => {
  const inputValue = parseFloat(cashInputEl.value);

  checkPurchase(inputValue);
  cashInputEl.value = "";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculateBtn.click();
  }
});
