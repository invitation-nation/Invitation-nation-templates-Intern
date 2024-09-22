import '../src/Component/Preloader.css'
import '../src/Component/FirstPage.css'
import '../src/Component/SecondPage.css'
import '../src/Component/AddFam.css'
import '../src/Component/Rituals.css'
import '../src/Component/Bottom.css'
import '../src/Component/Footer.css'
import Firstpage from './Component/FirstPage'
import AddFam from './Component/AddFam'
import SecondPage from './Component/SecondPage'
import Bottom from './Component/Bottom'
import Rituals from './Component/Rituals'
import Footer from './Component/Footer'
import Preloader from './Component/Preloader'

function App() {

  return (
    <>
      <Preloader/>
      <Firstpage/>
      <SecondPage/>
      <AddFam/>
      <Rituals/>
      <Bottom/>
      <Footer/>
      
    </>
  )
}

export default App
