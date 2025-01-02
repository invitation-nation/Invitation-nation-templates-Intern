import React from 'react'
import './wed007-footer.css'
import logo from './assets/img/wed007-footer/image-removebg.png'
function footer() {
  return (
    <section id='wed007-footer-section'>
        <div className='nimbus-container'>
        <div className='wed007-footer'>
        <div className='wed007-website'>
            <span className='wed007-wedding'>Wedding Invitation website by</span>
            <span className='wed007-span'>Invitationnation.in</span>
        </div>
        <div className='wed007-invitation'>
        <img id='wed007-logo' src={logo} alt="" />
        <span className='wed007-span2'>Invitation Nation</span>

        </div>


        </div>

        </div>
    </section>
  )
}

export default footer