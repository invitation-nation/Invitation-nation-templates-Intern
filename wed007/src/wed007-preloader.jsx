import './wed007-preloader.css';
import flower from './assets/img/wed007-preloader/flower.svg';
import div1 from './assets/img/wed007-preloader/div1.png';
import div2 from './assets/img/wed007-preloader/div2.png';
function wed007_Preloader() {
  return (
    <>
      <section id="wed007-preloader">
            <img id="wed007-flower1" src={flower} alt="" />
            <img id="wed007-flower2" src={flower} alt="" />
            <img id="wed007-flower3" src={flower} alt="" />
            <img id="wed007-flower4" src={flower} alt="" />
            <img id="wed007-flower5" src={flower} alt="" />
            <img id="wed007-div1" src={div1} alt="" />
            <img id="wed007-div2" src={div2} alt="" />
      </section>
    </>
  );
}

export default wed007_Preloader;