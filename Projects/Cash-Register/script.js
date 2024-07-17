const inputEl = document.querySelector("#cash");
const changeDueEl = document.querySelector("#change-due");
const purchaseBtn = document.querySelector("#purchase-btn");

let price = 1.87;
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

const checkPurchase = (val) => {
  if (val < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (val === price) {
    changeDueEl.textContent = "No change due - custmer paid with exact cash";
  } else {
    returnChange(val);
  }
};

const returnChange = (val) => {
  const changeDue = parseFloat((val - price).toFixed(2));
  console.log(changeDue);
};

purchaseBtn.addEventListener("click", () => {
  const inputValue = parseFloat(inputEl.value);
  //   console.log(typeof inputValue);

  checkPurchase(inputValue);

  inputEl.value = "";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    purchaseBtn.click();
  }
});
