import '../App.css'
import { Link } from 'react-router-dom';
import Footer from './Bir005-Footer'
import './Bir005-special.css'
import Mobnav from "./Bir005-mobilenavbar";

import PhotoGallery from './Bir005-Photogallery';
function Bir005_special() {
  return (
    <>
    <section id='bir005-special'>
      <Mobnav></Mobnav>
            <div className="bir005-navbars">
            <Link to="/">
                Home
            </Link>
            <Link to="/">
                About
            </Link>
            <Link to="/">
                Gallery
            </Link>
            <Link to="/">
                Schedule
            </Link>
            </div>
            <PhotoGallery />
            <Footer></Footer>
    </section>
    </>
  )
}

export default Bir005_special