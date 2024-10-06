import "./App.css"
import Hero from "./components/Bir005-Hero";
import Mobnav from "./components/Bir005-mobilenavbar";
import Countdown from './components/Bir005-Countdown'
import Banner from "./components/Bir005-Banner";
import Destination from "./components/Bir005-Destination"
import Activity from "./components/Bir005-Activity"
import Wishes from "./components/Bir005-Wishes"
import Gallery from './components/Bir005-Gallery'
import Footer from './components/Bir005-Footer'
function App() {
  return (
    <div>
      <Hero></Hero>
      <Mobnav></Mobnav>
      <Countdown></Countdown>
      <Banner></Banner>
      <Destination></Destination>
      <Activity></Activity>
      <Wishes></Wishes>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App