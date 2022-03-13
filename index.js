const principal = document.querySelector("#principal");
const time = document.querySelector("#time");
const rate = document.querySelector("#rate");
const btnHandler = document.querySelector("#btn");
let amountToBeInvested = document.querySelector("#amount");
let timeToBeInvested = document.querySelector("#displayTime");
let returnExpected = document.querySelector("#returnExpected");
let totalRetun = document.querySelector("#total");
const hiddenClass = document.querySelector(".hidden");

const totalReturnValue = (investment, time, rate) => {
  //   console.log(investment, time, rate);
  const calculatePower = Math.pow(1 + +rate, +time);
  //   console.log(calculatePower);
  totalRetun.textContent = +investment * calculatePower;
  console.log(totalRetun.textContent);
};

const principalHandler = () => {
  amountToBeInvested.textContent = principal.value;
  timeToBeInvested.textContent = time.value;
  //   console.log(timeToBeInvested.textContent);
  returnExpected.textContent = rate.value;
  //   console.log(returnExpected.textContent);

  totalReturnValue(
    amountToBeInvested.textContent,
    timeToBeInvested.textContent,
    returnExpected.textContent
  );
};

btnHandler.addEventListener("click", principalHandler);
