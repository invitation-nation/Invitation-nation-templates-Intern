import React from 'react'

export default function Footer(){
  return(
    <div id='content'>
         <footer id="footer-section">
        <div className="nimbus-container">
          <div className="footer-container">
            <div className="footer-text-box">
              <span>House Warming Invitation website by</span>
              <a href="https://invitationnation.in">Invitationnation.in</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

var countdownTo = new Date("Novemver 08,2024 10:00:00").getTime();
var int = setInterval(countdown);
function countdown() {
  var curTime = new Date().getTime();
  var timeDiff = countdownTo - curTime;
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
  if (timeDiff < 0) {
    clearInterval(int);
    document.getElementById("count-down-title").innerHTML = "Welcome";
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
  }
}

function animateOnScroll() {
  const listItems_1 = document.querySelectorAll(".info-img");
  const listItems_2 = document.querySelectorAll(".info-title");
  const listItems_3 = document.querySelectorAll(".info-subtitle");
  const listItems_4 = document.querySelectorAll(".info-text");
  const listItems_5 = document.querySelectorAll(".info-location");
  const listItems_6 = document.querySelectorAll(".rituals-time");
  const listItems_7 = document.querySelectorAll(".rituals-title");
  const listItems_8 = document.querySelectorAll(".rituals-img");

  const triggerBottom = window.innerHeight * 0.8;

  listItems_1.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_2.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_3.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_4.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_5.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_6.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_7.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });

  listItems_8.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("appear");
    } else {
      item.classList.remove("appear");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);

window.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader 
  document.getElementById("preloader").style.display = "none";

  // Show the main content
  document.getElementById("content").style.display = "block";

  // Trigger your animation after showing the content
  document.getElementById("hero-section").classList.add("animate");
  document.getElementById("hero-cloud-1").classList.add("animate");
  document.getElementById("hero-cloud-2").classList.add("animate");
  document.getElementById("hero-cloud-3").classList.add("animate");
  document.getElementById("hero-decoration-left").classList.add("animate");
  document.getElementById("hero-decoration-right").classList.add("animate");
  document.getElementById("hero-subtitle").classList.add("animate");
  document.getElementById("hero-info-box").classList.add("animate");
  document.getElementById("hero-img").classList.add("animate");
});
