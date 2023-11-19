const celcius = document.getElementById('celcius');
const fahrenheit= document.getElementById('fahrenheit');

function convertTemp(event) {
  const tempValue = parseFloat(event.target.value);

  if (event.target.name === 'celcius') {
    fahrenheit.value = ((tempValue * (9/5)) + 32).toFixed(2);
  } 
  if (event.target.name === 'fahrenheit') {
    celcius.value = ((5/9) * (tempValue - 32)).toFixed(2);
  } 
}

celcius.addEventListener('change', convertTemp);
fahrenheit.addEventListener('change', convertTemp);
celcius.addEventListener('keyup', convertTemp);
fahrenheit.addEventListener('keyup', convertTemp);


