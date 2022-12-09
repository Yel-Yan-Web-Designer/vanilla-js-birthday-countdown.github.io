const days = document.querySelector(".days"),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds");

/*
Problem to solve
Set upcoming birthday date -> data type string(input) -> output should be number turn idate into milliseconds
Get current date by using built in function new Date(), --> note new date always return object type
- Minus upcoming birthday to current date why ? Cux I want to know the difference between those two days
- I will get total milliseconds and turn it to seconds, mins, hours and days
*/

function countBirthday () {
    let birthday = new Date("12 Feb 2023").getTime();
    let today = new Date().getTime();

    let distance = Math.floor((birthday - today) / 1000); // change ms to total seconds

    // Calculate day, hrs, mins , secs
    let day = Math.floor(distance / (60* 60 * 24));
    let hrs = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    let mins = Math.floor((distance % (60 * 60)) / 60);
    let secs = Math.floor(distance % 60);

    days.innerHTML = formatTime(day);
    hours.innerHTML = formatTime(hrs);
    minutes.innerHTML = formatTime(mins);
    seconds.innerHTML = formatTime(secs);

 // If the count down is over, clear interval and write text
 if(distance < 0){
    clearInterval(countBirthday);
 }
}

function formatTime (time) {
    return time < 10 ? `0${time}` : time
}
setInterval(countBirthday, 1000);