import '../components/invite.css';
import '../App.css'
import flowers from "../assets/img/hou003-Invite/hou003-invite-flowers.svg"
import icons from '../assets/img/hou003-Invite/hou003-invite-icons.svg'
import flowerbloom from '../assets/img/hou003-Invite/hou003-invite-animation.svg'

function Invite() {
    return (
        <>
        <section id='hou003-Invite'>
        <div className='nimbus-container'>
            <div className='hou003-invitation-container'>
                <img src= {flowers} alt='flowers' className='hou003-invitation-flowers'/>
                <div className='hou003-invite'>
                    <h3>We Invite you and your family to join us for the celebration.</h3>
                    <h4>With the blessing of God and all our elders, we have been</h4>
                    <h4>able to fulfill our dream of living in our own cozy little haven</h4>
                </div>
            </div>    
        </div>

        <img src= {icons} alt='triple-icons' className='hou003-invite-icons'/>
        {/* <video src={flowerbloom} className='hou003-invite-flowerbloom'></video> */}
        {/* <img src= {flowerbloom} alt='flower-bloom-animation' className='hou003-invite-flowerbloom'/> */}
        </section>
        </>
    );
}

export default Invite