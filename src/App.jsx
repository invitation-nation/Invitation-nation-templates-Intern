import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Countdown from "./components/countdown";
import Invite from "./components/invite";
import About from "./components/about";
import Events from "./components/events"
import Wishes from "./components/wishes";
import WishesForm from "./components/wishesform";
import Facilities from "./components/ammenities";
import Invitation from "./components/invitationnation";
import ImageGrid from "./components/gallerygrid";

function App() {
  return (
    <>
      <Hero/>
      <Countdown/>
      <Invite/>
      <About/>
      <Events/>
      <Wishes/>
      <WishesForm/>
    </>
  );
}

export default App;
