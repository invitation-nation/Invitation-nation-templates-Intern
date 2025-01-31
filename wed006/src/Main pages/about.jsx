import NavBar from "../Components/wed006-Navbar";
import SlideNav from "../Components/wed006-Slidernav";
import Footer from "../Components/wed006-Footer";
import AboutPages from "../Components/wed006-aboutpage";
import AboutHero from "../Components/wed006-abouthero";
import AboutDetails from "../Components/wed006-aboutDetails";
export default function About() {
  return (
    <>
      <NavBar />
      <AboutHero />
      <AboutDetails />
      <AboutPages />
      <SlideNav />
      <Footer />
    </>
  );
}
