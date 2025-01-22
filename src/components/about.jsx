import './about.css'
import topfloraldrop from "../assets/img/hou003-About/hou003-about-floral-drop.svg"
import horizantalflowerbar from "../assets/img/hou003-About/hou003-about-horizantalfloralpattern.svg"
import flowerdesignemblemleft from "../assets/img/hou003-About/hou003-about-floweremblemleft.svg"
import familydetails from "../assets/img/hou003-About/hou003-about-familyphoto.svg"
import openmaps from "../assets/img/hou003-About/hou003-about-openinmaps.svg"
import middleflowerdrop from "../assets/img/hou003-About/hou003-about-middleflowerdrop.svg"
import mapimage from "../assets/img/hou003-About/hou003-about-address.svg"
import flowerdesignemblemright from "../assets/img/hou003-About/hou003-about-floweremblemright.svg"
import floraldropend from "../assets/img/hou003-About/hou003-about-floraldropend.svg"

function About() {

    const openMap = () => {
        const latitude = '13.046163'; 
        const longitude = '77.543279'; 
        window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
      };

    return (
        <>
        <section id='hou003-About'>

            <img src= {topfloraldrop} alt='flower-hanging' className='hou003-about-topfloraldrop'/>

            <div className='nimbus-container'>
                <div className='hou003-about-firsthalf'>
                    
                    <div className='hou003-about-familydetails'>

                        <img src= {familydetails} alt='family-photo' className='hou003-about-familyphoto'/>

                        <h3>Family Details</h3>
                        
                    </div>

                    <div className='hou003-about-welcoming-text'>
                        <h2>Mr. Aryan Singh & Family</h2>
                        <h5>Welcome You and your family</h5>
                        <h5>to join the celebration</h5>

                        <img src= {openmaps} alt='map-button' className='hou003-about-openmaps' onClick={openMap}/>

                    </div>

                </div>

            </div>

            <img src= {flowerdesignemblemleft} alt='flower-emblem' className='hou003-about-floweremblem' />

            <img src= {horizantalflowerbar} alt='flower-bar' className='hou003-about-flowerbar' />

            <img src= {middleflowerdrop} alt='flower-hanging' className='hou003-about-middleflowerdrop' />

            <div className='nimbus-container'>
                <div className='hou003-about-secondhalf'>

                    <div className='hou003-about-addressdetails-text'>

                        <h2>Address</h2>
                        <h5>Abc, Bangalore 571403</h5>

                        <img src= {openmaps} alt='map-button' className='hou003-about-openmaps' onClick={openMap} />
                    </div>

                    <div className='hou003-about-addressdetails-image'>

                        <img src= {mapimage} alt='location-in-map' className='hou003-about-mapimage' />

                        <h3>Sagar Villa</h3>

                    </div>

                </div>
            </div>

            <img src= {flowerdesignemblemright} alt='flower-emblem' className='hou003-about-floweremblemright' />

            <img src= {horizantalflowerbar} alt='flower-bar' className='hou003-about-flowerbarsecond' />
            
            <img src= {floraldropend} alt='floral-drop' className='hou003-about-floraldropend'/>
        </section>
        </>
    );
}

export default About