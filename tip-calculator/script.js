const form = document.getElementById("form");
const calculateButton = document.getElementById("calculate");
const resetButton = document.createElement("button");

function calculateTotal() {
  const billTotal = document.getElementById("amount");
  const serviceQual = document.getElementById("serviceQual");
  const people = document.getElementById("people");
  const billTotalAmount = parseFloat(billTotal.value) * parseFloat(serviceQual.value);
  const split =
    (billTotalAmount + parseFloat(billTotal.value)) / parseFloat(people.value);

  return split;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const label = document.createElement("label");
  const totalInput = document.createElement("input");
  const split = Math.round(calculateTotal() * 100) / 100;
  totalInput.value = split;
  if (!isNaN(split)) {
    label.textContent = "Each Person Owes:";
    form.appendChild(label);
    totalInput.readOnly = true;
    form.appendChild(totalInput);
    form.removeChild(calculateButton);
    resetButton.textContent = "Reset";
    form.appendChild(resetButton);
  } else {
    alert("Please enter number values");
  }
});

resetButton.addEventListener("click", () => {
  window.location.reload();
});
