var countDownDate = new Date("Dec 31, 2021 00:00:00").getTime();

async function fetchTime() {
  var url = "http://worldtimeapi.org/api/timezone/Asia/kolkata";
  var reponse = await fetch(url);
  var reponseJSON = await reponse.json();
  // console.log(reponseJSON.datetime)
}

var countDown = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  fetchTime();
  
  //Calculations for dates
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
}, 1000);


