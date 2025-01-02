import React, { useState, useEffect } from 'react';
import './wed007-story.css'
import { Link } from 'react-router-dom';
import Preloader from './wed007-preloader'
import storyline from './assets/img/wed007-story/story-line.svg'
import storyunderline from './assets/img/wed007-story/story-underline.svg'
import storyleaf from './assets/img/wed007-story/story-leaf.svg'
import storyrose from './assets/img/wed007-story/story-rose.svg'
import storyroses from './assets/img/wed007-story/story-roses.svg'
import heart from './assets/img/wed007-story/story-heart.svg'
import meet from './assets/img/wed007-story/meet-img.png'
import ring from './assets/img/wed007-story/story-ring.svg'
import propose from './assets/img/wed007-story/propose-img.png'
import infinite from './assets/img/wed007-story/story-infinite.svg'
import wedding from './assets/img/wed007-story/wedding-img.png'
import Monavbar from './wed007-mobnavbar'
import moline from './assets/img/wed007-story/linemo.svg'
function story() {
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
return (
    <>
    {loading && <Preloader />}
        <section id='wed007-story-section'>
            <div className='wed007-story-navbar'>
                <Link to='/'>HOME</Link>
                <Link to='#'>ABOUT</Link>
                <Link to='#'>GALLERY</Link>
                <Link to='/Schedule'>SCHEDULE</Link>
            </div>
            <Monavbar />
            <div className='nimbus-container'>
                <img className='wed007-storyrose' src={storyrose} alt="" />
                <div className='wed007-story'>
                    <div className='storyheading'>
                        <span className='wed007-heading1'>Our story</span>
                        <span className='wed007-heading2'>With love</span>
                        <img className='wed007-storyunderline' src={storyunderline} alt="" />
                    </div>
                    <div className='wed007-storycontent'>
                        <img id='wed007-storyline' src={storyline} alt="" />
                        <div className='wed007-story1'>
                            <div className='wed007-story-meeting'>
                                <span className='wed007-story-year'>2016</span>
                                <span className='wed007-how'>How we Met</span>
                                <span className='wed007-explain'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</span>
                            </div>
                            <div id='wed007-heart'>
                                <img src={moline} alt="" id='wed007-moline' />
                                <img id='wed007-heart-img' src={heart} alt="" />
                            </div>
                            <div className='wed007-meeting'>
                                <img src={meet} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='wed007-story2'>
                        <div className='wed007-story-propose'>
                            <span className='wed007-story-year'>2020</span>
                            <span className='wed007-how'>He proposed, I said Yes</span>
                            <span className='wed007-explain'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</span>
                        </div>
                        <div id='wed007-ring'>
                            <img src={moline} alt="" id='wed007-moline' />
                            <img id='wed007-ring-img' src={ring} alt="" />
                        </div>
                        <div className='wed007-propose'>
                            <img src={propose} alt="" />
                        </div>
                    </div>

                    <div className='wed007-story3'>
                        <div className='wed007-story-wedding'>
                            <span className='wed007-story-year'>2025</span>
                            <span className='wed007-how'>Our Wedding Day</span>
                            <span className='wed007-explain'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</span>
                        </div>
                        <div id='wed007-infinite'>
                            <img src={moline} alt="" id='wed007-moline' />
                            <img id='wed007-infinite-img' src={infinite} alt="" />
                        </div>
                        <div className='wed007-wed'>
                            <img src={wedding} alt="" />
                        </div>
                    </div>

                    <div id='wed007-storyleaf'></div>
                        <img src={moline} alt="" id='wed007-molines' />
                        <img src={storyleaf} alt="" id='wed007-storyleaf-img' />
                    </div>
                    <div className='wed007-forever'>
                        <span>Forever Begins</span>
                        <img src={storyroses} alt="" />
                    </div>
                </div>
        </section>
    </>
)
}

export default story