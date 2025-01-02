import React, { useState, useEffect, useRef } from 'react';
import './wed007-schedule.css';
import Preloader from './wed007-preloader';
import Monavbar from './wed007-mobnavbar';
import { Link } from 'react-router-dom';
import scheduleline from './assets/img/wed007-schedule/schedule-line.svg';
import wavedesign from './assets/img/wed007-schedule/wavedesign.svg';
import sangeet from './assets/img/wed007-schedule/sangeet-photo.png';
import haldi from './assets/img/wed007-schedule/haldi photo.png';
import mehendi from './assets/img/wed007-schedule/mehendi photo.png';
import previous from './assets/img/wed007-schedule/previous.svg';
import next from './assets/img/wed007-schedule/next.svg';
import bottomdesign from './assets/img/wed007-schedule/bottom-design.svg';

function Schedule() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const eventsContainerRef = useRef(null);
      const [loading, setLoading] = useState(true);
  
      useEffect(() => {
        // Disable scrolling
        document.body.classList.add('no-scroll');
    
        const timer = setTimeout(() => {
          setLoading(false);
          // Enable scrolling
          document.body.classList.remove('no-scroll');
        }, 7000); // Adjust the timeout duration to match the total animation time
    
        return () => clearTimeout(timer);
      }, []);
  const events = [
    {
      title: 'Sangeet Party',
      time: '4:00pm',
      date: '24th Feb',
      description: 'The wedding festivities are in full swing, and we invite you to celebrate love, laughter, and the joy of togetherness at our Sangeet.',
      image: sangeet,
    },
    {
      title: 'Haldi Party',
      time: '10:00am',
      date: '25th Feb',
      description: 'Let’s add a splash of yellow to the celebration! Join us for the Haldi ceremony filled with joy and vibrant traditions.',
      image: haldi,
    },
    {
      title: 'Mehendi Party',
      time: '3:00pm',
      date: '25th Feb',
      description: 'Celebrate intricate beauty and joyful moments as we adorn our hands with Mehendi.',
      image: mehendi,
    },
  ];

  const handleNext = () => {
    if (currentEvent < events.length - 1) {
      setCurrentEvent(currentEvent + 1);
    }
  };

  const handlePrevious = () => {
    if (currentEvent > 0) {
      setCurrentEvent(currentEvent - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = eventsContainerRef.current.scrollLeft;
      const width = eventsContainerRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentEvent(newIndex);
    };

    const container = eventsContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {loading && <Preloader />}
    <section id="wed007-schedule-section">
      <Monavbar />
      <img id="wed007-schedule-top" src={bottomdesign} alt="Bottom Design" />
      <div className="wed007-schedule-navbar">
        <Link to="/">HOME</Link>
        <Link to="/Story">ABOUT</Link>
        <Link to="#">GALLERY</Link>
        <Link to="#">SCHEDULE</Link>
      </div>

      <div className="wed007-schedule-content">
        <img
          id="wed007-previous"
          src={previous}
          alt="Previous"
          onClick={handlePrevious}
          style={{ cursor: currentEvent > 0 ? 'pointer' : 'not-allowed' }}
        />
        <img
          id="wed007-next"
          src={next}
          alt="Next"
          onClick={handleNext}
          style={{ cursor: currentEvent < events.length - 1 ? 'pointer' : 'not-allowed' }}
        />
        <div className="nimbus-container">
          <div className="wed007-schedule-heading">
            <span className="wed007-scheduleday">Schedule for the Day</span>
            <img id="wed007-scheduleline" src={scheduleline} alt="" />
          </div>
          <div className="wed007-schedule-events">
            <div id="wed007-events">
              <div className="wed007-sangeetevent">
                <div className="wed007-sangeetcontent">
                  <div className="wed007-sangeet">
                    <img src={events[currentEvent].image} alt={events[currentEvent].title} />
                  </div>
                  <div className="wed007-sangeetinfo">
                    <div className="wed007-Sangeet-Party">
                      <span>{events[currentEvent].title}</span>
                      <img src={wavedesign} alt="Wave Design" />
                    </div>
                    <div className="wed007-sangeet-schedule">
                      <div className="wed007-time-date">
                        <span className="wed007-time">Time: {events[currentEvent].time}</span>
                        <span className="wed007-date">Date: {events[currentEvent].date}</span>
                      </div>
                      <div className="wed007-description">
                        <span>{events[currentEvent].description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wed007-schedule-mobile" ref={eventsContainerRef}>
            {events.map((event, index) => (
              <div key={index} className="wed007-sangeetevent">
                <div className="wed007-sangeetcontent">
                  <div className="wed007-sangeet">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="wed007-sangeetinfo">
                    <div className="wed007-Sangeet-Party">
                      <span>{event.title}</span>
                      <img src={wavedesign} alt="Wave Design" />
                    </div>
                    <div className="wed007-sangeet-schedule">
                      <div className="wed007-time-date">
                        <span className="wed007-time">Time: {event.time}</span>
                        <span className="wed007-date">Date: {event.date}</span>
                      </div>
                      <div className="wed007-description">
                        <span>{event.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wed007-dots">
            {events.map((_, index) => (
              <span
                key={index}
                className={`wed007-dot ${index === currentEvent ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <img id="wed007-schedule-bottom" src={bottomdesign} alt="Bottom Design" />
    </section>
    </>
  );
}

export default Schedule;
