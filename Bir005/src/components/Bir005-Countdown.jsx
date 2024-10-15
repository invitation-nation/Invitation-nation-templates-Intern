import '../App.css'
import './Bir005-Countdown.css'
import shoutteddy from '../assets/img/Bir005-countdown/countbear.png'
import count_cap from '../assets/img/Bir005-countdown/countcap.png'
function Bir005_Countdown() {
  return (
    <>
        <section id= "bir005-countdown">
        
        
        <div className="nimbus-container">
        <div className='bir005-counttitle'>
          <h2>Event will start in</h2>
          <div className="bir005-countbox">
            <div className="bir005-countcontent">
              <p className="bir005-numb">00</p>
              <p>DAYS</p>
            </div>
            <div className="bir005-countcontent">
              <p className="bir005-numb">00</p>
              <p>HOURS</p>
            </div>
            <div className="bir005-countcontent">
              <p className="bir005-numb">00</p>
              <p>MINUTES</p>
            </div>
            <div id='bir005-last-count' className="bir005-countcontent">
            {/* <div className="bir005-capimg"> */}
              <img id='bir005-capimg' src={count_cap} alt="" />
            {/* </div> */}
              <p className="bir005-numb">00</p>
              <p>SECONDS</p>
              
            </div>
          </div>
            
        </div>
        </div>
        <img className='bir005-teddyimg' src={shoutteddy} alt="" />
      </section>
    </>
  )
}

export default Bir005_Countdown