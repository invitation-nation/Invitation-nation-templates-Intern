import '../App.css'
import './Bir005-Footer.css'
import fcontact from '../assets/img/Bir005-Footer/footercontact.svg'
import flocation from '../assets/img/Bir005-Footer/footerlocation.svg'
import fschedule from '../assets/img/Bir005-Footer/footerschedule.svg'
import fbear from '../assets/img/Bir005-Footer/footerbear.svg'
function Bir005_Footer() {
  return (
    <>
    <section id='bir005-Footer'>
        <div id='nimbus-container'>
        <div className='bir005-consclo'>
            <div className='bir005-consclo-buttons'>
                <img src={flocation} alt="" />
                <h1>LOCATION</h1>
            </div>
            <div className='bir005-consclo-buttons'>
                <img src={fcontact} alt="" />
                <h1>CONTACT</h1>
            </div>
            <div className='bir005-consclo-buttons'>
                <img src={fschedule} alt="" />
                <h1>SCHEDULE</h1>
            </div>
        </div>
        <div className='bir005-footerbear'>
        <img src={fbear} alt="" />
        </div>
        </div>
    </section>
    </>
  )
}

export default Bir005_Footer