import "./aboutDetails.css";
import aboutfence from "../assets/about-section/Frame 351.png";
import aboutdesignright from "../assets/about-section/Union (3).png";
import aboutdesignleft from "../assets/about-section/Union (4).png";
import aboutdesignimage from "../assets/about-section/image 37.png";
import backgroundOverlay from "../assets/about-section/Mask group.png";

const AboutDetails = () => {
  return (
    <div className="aboutDetails">
      <div className="backgroundOverlay"></div>
      <img src={aboutfence} alt="Fence Design" className="aboutFence" />
      <img
        src={aboutdesignleft}
        alt="Left Design"
        className="aboutDesignLeft"
      />
      <img
        src={aboutdesignright}
        alt="Right Design"
        className="aboutDesignRight"
      />

      <div className="aboutDetailsInfoCard">
        <img
          src={aboutdesignimage}
          alt="Engagement Image"
          className="aboutDetailsImage"
        />
        <div className="aboutDetailsInfoCardText">
          <p className="aboutDate">December 23rd 2023</p>
          <h2 className="aboutHeading">The Engagement</h2>
          <p className="aboutDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim, urna ac volutpat ullamcorper, elit ligula fermentum
            velit, non fermentum ipsum nulla sed elit. Ut consequat, eros sed
            cursus cursus, nisl risus vehicula magna, non varius nunc eros vitae
            massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
