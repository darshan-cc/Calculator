const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const clearBtn = document.getElementById("clearBtn");

const resultAdd = document.getElementById("result-add");
const resultSub = document.getElementById("result-sub");
const resultMul = document.getElementById("result-mul");
const resultDiv = document.getElementById("result-div");

function calculate() {
  const val1 = Number(num1Input.value);
  const val2 = Number(num2Input.value);

  resultAdd.innerText = val1 + val2;
  resultSub.innerText = val1 - val2;
  resultMul.innerText = val1 * val2;

  if (val2 === 0) {
    resultDiv.innerText = "Error (÷0)";
  } else {
    resultDiv.innerText = (val1 / val2).toFixed(2);
  }
}

function resetCalculator() {
  num1Input.value = 0;
  num2Input.value = 0;
  resultAdd.innerText = 0;
  resultSub.innerText = 0;
  resultMul.innerText = 0;
  resultDiv.innerText = 0;
}

num1Input.addEventListener("input", calculate);
num2Input.addEventListener("input", calculate);
clearBtn.addEventListener("click", resetCalculator);
