import '../App.css'
import './Bir005-Gallery.css'
import family from '../assets/img/Bir005-Gallery/family.png'
function Bir005_Gallery() {
  return (
    <>
      <section id='bir005-Gallery'>
        <div className='nimbus-container'>
          <div className='bir005-gal-head'>
            <h1>Gallery</h1>
            <div className='bir005-familypic'>
              <img src={family} alt="" />
              <div className="bir005-picbutton">
                <span>OPEN IN MAPS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bir005_Gallery