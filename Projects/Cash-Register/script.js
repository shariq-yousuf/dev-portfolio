import {
  cidArr,
  currencyValues,
  isPKR,
  cashInputEl,
  changeDueEl,
  totalAmount,
  calculateAndSaveCid,
  removePrices,
} from "./_user-input.js";

// const cashInputEl = document.querySelector("#cash");
// const changeDueEl = document.querySelector("#change-due");
const purchaseBtn = document.querySelector("#purchase-btn");
// const clearBtn = document.querySelector("#clear-btn");
// const currencyType = document.querySelector("#currency-type");

// let cid = {
//   PKR: [
//     ["ONE", 60],
//     ["TWO", 40],
//     ["FIVE", 70],
//     ["TEN", 330],
//     ["TWENTY", 480],
//     ["FIFTY", 750],
//     ["HUNDRED", 1600],
//     ["FIVE HUNDRED", 2500],
//     ["THOUSAND", 5000],
//     ["FIVE THOUSAND", 10000],
//   ],
//   USD: [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ],
// };

// const currencyValues = [
//   {
//     ONE: 1,
//     TWO: 2,
//     FIVE: 5,
//     TEN: 10,
//     TWENTY: 20,
//     FIFTY: 50,
//     HUNDRED: 100,
//     "FIVE HUNDRED": 500,
//     THOUSAND: 1000,
//     "FIVE THOUSAND": 5000,
//   },
//   {
//     PENNY: 0.01,
//     NICKEL: 0.05,
//     DIME: 0.1,
//     QUARTER: 0.25,
//     ONE: 1,
//     FIVE: 5,
//     TEN: 10,
//     TWENTY: 20,
//     "ONE HUNDRED": 100,
//   },
// ];

// let totalAmount = 52;
// let isPKR = true;
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
  // const cidType = isPKR ? cid.PKR : cid.USD;
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
    const currency = currencyValues[0][name];

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
  calculateAndSaveCid();
  removePrices();
};

const displayChange = (cid) => {
  const drawerCash = cid.reduce((acc, item) => item[1] + acc, 0);
  changeDueEl.innerHTML = `Status: ${drawerCash > 0 ? "OPEN" : "CLOSED"}`;

  changeDue.forEach((item) => {
    changeDueEl.innerHTML += `<span>${item[0]}: ${
      isPKR ? `Rs. ${item[1]}` : `$${item[1]}`
    }`;
  });
};

// const reset = () => {
//   cashInputEl.value = "";
//   changeDueEl.innerHTML = "";
// };

purchaseBtn.addEventListener("click", () => {
  const inputValue = parseFloat(cashInputEl.value);

  checkPurchase(inputValue);
  cashInputEl.value = "";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    purchaseBtn.click();
  }
});

// currencyType.addEventListener("change", () => {
//   isPKR = false;
//   reset();
// });

// clearBtn.addEventListener("click", reset);
