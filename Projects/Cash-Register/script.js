const inputEl = document.querySelector("#cash");
const changeDueEl = document.querySelector("#change-due");
const purchaseBtn = document.querySelector("#purchase-btn");

let price = 1;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const currencyValues = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

let changeDue;

const checkPurchase = (val) => {
  if (val < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (val === price) {
    changeDueEl.textContent = "No change due - customer paid with exact cash";
  } else {
    checkDrawer(val);
  }
};

const checkDrawer = (val) => {
  const cashDue = val - price;
  const drawerCash = cid.reduce((acc, item) => item[1] + acc, 0);

  if (cashDue > drawerCash) {
    showStatus("Status: INSUFFICIENT_FUNDS");
  } else {
    returnChange(cashDue);
  }
};

const showStatus = (status) => {
  changeDueEl.textContent = status;
};

const returnChange = (cashDue) => {
  changeDue = [];
  let remainingDue = cashDue;

  cid.toReversed().forEach((item, index) => {
    const name = item[0];
    let cash = item[1];
    const currency = currencyValues[name];

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
    withdrawFromDrawer();
  }
};

const withdrawFromDrawer = () => {
  changeDue.forEach((changeItem) => {
    cid.forEach((cidItem, i) => {
      if (cidItem[0] === changeItem[0]) {
        cid[i][1] -= changeItem[1];
      }
    });
  });

  displayChange();
};

const displayChange = () => {
  const drawerCash = cid.reduce((acc, item) => item[1] + acc, 0);
  changeDueEl.innerHTML = `Status: ${drawerCash > 0 ? "OPEN" : "CLOSED"}`;

  changeDue.forEach((item) => {
    changeDueEl.innerHTML += `<br><span>${item[0]}: $${item[1]}`;
  });
};

purchaseBtn.addEventListener("click", () => {
  const inputValue = parseFloat(inputEl.value);

  checkPurchase(inputValue);
  inputEl.value = "";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    purchaseBtn.click();
  }
});
