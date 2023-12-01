function displayClock() {
  const timeDisplay = document.getElementById('time');
  const time = new Date();
  let hours = time.getHours()
  const minutes = time.getMinutes().toString().padStart(2,0);
  const seconds = time.getSeconds().toString().padStart(2,0);

  hours = hours >= 13 ? hours - 12 : hours;

  timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${isAmOrPM(time.getHours())}`;
}

function isAmOrPM(date){
  date.getHours < 12 ? timeOfDay = 'AM' : timeOfDay = 'PM'; 
  return timeOfDay;
}

const months = [
  "January", 
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

function displayDate() {
  const date = document.getElementById('date');
  const currentDate = new Date();

  date.textContent = `${daysOfTheWeek[currentDate.getDay()]}, ${months[currentDate.getMonth()]} ${getOrdinal(currentDate.getDate())} ${currentDate.getFullYear()}`
}

function getOrdinal(date) {
  let ordinal = "th";
  if (date < 10 || date > 20) {
    switch(date % 10){
      case 1:
        ordinal = "st";
        break;
      case 2: 
        ordinal = "nd";
        break;
      case 3:
        ordinal = "rd";
        break;
     }
  }

   return date + ordinal;
}

displayDate();
displayClock();
setInterval(displayClock, 1000);