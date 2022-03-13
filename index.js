// Reusable functions

const getHtmlElement = (type, typeValue) => {
  return document.querySelector(`${type === "id" ? "#" : "."}${typeValue}`);
};

const getInputValue = (ele) => {
  return ele.value;
};

const setTextContent = (ele, text) => {
  ele.textContent = text;
};

const setInputValue = (ele, val) => {
  ele.value = val;
};

//Elements
const amountInput = getHtmlElement("id", "amount");
const amountSlider = getHtmlElement("id", "amountRange");
const displayAmount = getHtmlElement("id", "displayAmount");
const totalAmount = getHtmlElement("id", "totalAmount");
//values
let amount = 100000;
let time = 5;
let rate = 10;
// let time = getInputValue();
// let rate = getInputValue();
const calcTotalAmount = () => {
  const total = amount * (1 + rate) ** time;
  setTextContent(totalAmount, total);
  // calculate total
  // call setTextContent fn to set total amount
};

calcTotalAmount();
//Event Listeners
amountInput.addEventListener("change", () => {
  const value = +getInputValue(amountInput);
  setInputValue(amountSlider, value);
  setTextContent(displayAmount, value);
  amount = value;
  calcTotalAmount();
});

amountSlider.addEventListener("change", () => {
  const value = +getInputValue(amountSlider);
  setInputValue(amountInput, value);
  setTextContent(displayAmount, value);
  amount = value;
  calcTotalAmount();
});
