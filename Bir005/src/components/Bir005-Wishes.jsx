import '../App.css/'
import './Bir005-Wishes.css'
import quotes from "../assets/img/Bir005-Wishes/quotes.svg"
import wishpic1 from "../assets/img/Bir005-Wishes/wishpic1.png"
import wishpic2 from "../assets/img/Bir005-Wishes/wishpic2.png"
import wishpic3 from "../assets/img/Bir005-Wishes/wishpic3.png"
import wishpic4 from "../assets/img/Bir005-Wishes/wishpic4.png"

function Bir005_Wishes() {
  return (
    <>
      <section id='bir005-wishes'>
        <div className='nimbus-container'>
          <div className='bir005-wishmain'>
            <div className="bir005-wish-head">
              <span>Wishes for</span><span id='bame'> ETHAN</span>
              <p>Thank you for being here and adding our joy!</p>
            </div>
            
          </div>
        </div>
        <div className='bir005-wishes-container'>
        <div className='bir005-wish-coll'>
              <div id='b1' className='bir005-wish-box'>
                <img className='bir005-quotpic' src={quotes} alt="" />
                <p>Happy birthday to my favorite 3-year-old. Nothing makes me happier than celebrating this festive milestone with you.</p>
                <img className='bir005-perpic' src={wishpic1} alt="" />
                <p>Aahana</p>
              </div>
              <div id='b2' className='bir005-wish-box'>
                <img className='bir005-quotpic' src={quotes} alt="" />
                <p>My beloved child is full of surprises. You make our lives wonderful. Happy Birthday and many happy returns.</p>
                <img className='bir005-perpic' src={wishpic2} alt="" />
                <p>Barkha</p>
              </div>
              <div id='b3' className='bir005-wish-box'>
                <img className='bir005-quotpic' src={quotes} alt="" />
                <p>We hope your 3rd birthday is three times as awesome as your first two birthday celebrations! Happy 3rd birthday, little one!</p>
                <img className='bir005-perpic' src={wishpic3} alt="" />
                <p>Chaaya</p>
              </div>
              <div id='b4' className='bir005-wish-box'>
                <img className='bir005-quotpic' src={quotes} alt="" />
                <p>We could hardly wait until we had a child of our own, and here you are, already three! Happy birthday. We love you.</p>
                <img className='bir005-perpic' src={wishpic4} alt="" />
                <p>Aradhana</p>
              </div>
            </div>
            </div>
            <div className='bir005-message'>
              <h1>Share your wishes</h1>
              <div id='wishname' className='bir005-wish-entry' ></div>
              <br />
              <div id='wishdetails' className='bir005-wish-entry'></div>
              <button className='bir005-submit'>SEND THE MESSAGE</button>
            </div>
            
      </section>
    </>
  )
}

export default Bir005_Wishes