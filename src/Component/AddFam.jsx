
import torana from "../assets/info-section/torana.svg";
import lflower from "../assets/info-section/flowers-left.svg";
import rflower from "../assets/info-section/flowers-right.svg";
import cow from "../assets/info-section/info-cow-img.svg";
import family from "../assets/info-section/info-family-img.svg";



export default function AddFam() {
    return (
        <>
        <div id='content' >
        <section id="info-section">
        <div className="nimbus-container">
          <div className="info-container">
            <div className="info-decoration">
              <img src={torana} alt="" />
            </div>
            <div className="flowers-left">
              <img
                src={lflower}
                alt=""
              />
            </div>
            <div className="flowers-right">
              <img
                src={rflower}
                alt=""
              />
            </div>

            <div className="info-content-box-1">
              <div className="info-img">
                <img
                  src={cow}
                  alt=""
                />
              </div>
              <div className="info-text-box">
                <h3 className="info-title">Savi Nilaya</h3>
                <span className="info-subtitle">Address</span>
                <p className="info-text">
                  Soonahally, Soonagahalli, Karnataka 571403.
                </p>
                <a
                  href="https://www.google.com/maps/place/12%C2%B030'26.8%22N+76%C2%B057'20.5%22E/@12.5074444,76.9556944,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.5074444!4d76.9556944?entry=ttu"
                  className="info-location"
                  >Open in maps</a
                >
              </div>
            </div>

            <div className="info-content-box-2">
              <div className="info-text-box">
                <h3 className="info-title">Family</h3>
                <span className="info-subtitle">Invited By</span>
                <p className="info-text">
                  Mr Manjunath & Mrs Savitha welcomes you and your family to
                  join the celebration.
                </p>
                <a href="tel:+919986799775" className="info-location">Contact Us</a>
              </div>
              <div className="info-img">
                <img
                  src={family}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        </>
    )
}

var countdownTo = new Date("November 08,2024 10:00:00").getTime();
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
