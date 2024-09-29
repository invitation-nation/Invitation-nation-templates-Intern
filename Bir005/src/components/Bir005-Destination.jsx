import '../App.css'
import './bir005-destination.css'
import location_button from '../assets/img/Location.png'
import tamtree from '../assets/img/Bir005-Destination/tamridtree.png'
import desteddy from '../assets/img/Bir005-Destination/destinationteddy.png'
function Bir005_Destination() {
  return (
    <>
     <section id= "bir005-destination">
     <img alt="A cute cartoon bear holding a pink balloon." className="bir005-bear-image" src={desteddy}/>

    <div className="nimbus-container">
    <div className="bir005-descontainer">
   <div className="bir005-image-container">
   <img src={tamtree} alt="" />
   </div>
   <div className="bir005-content-container">
    <h1>
     ✨The Tamarind Tree✨
     
    </h1>
    <p className="bir005-address">
     88, Avalahalli Kanakapura Rd, Royal Park Residency Layout 2,JP Nagar 9th Phase, J. P. Nagar, Bengaluru, Karnataka 560108
    </p>
    <div className="bir005-mapbuttond">
          <img src={location_button} alt="📍" /><span>OPEN IN MAPS</span>
          </div>

   </div>
  </div>
    </div>
    </section>
    </>
  )
}

export default Bir005_Destination