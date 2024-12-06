import NavBar from "../Components/Navbar";
import SlideNav from "../Components/Slidernav";
import Footer from "../Components/Footer";
import AboutPages from "../Components/aboutpage";
import AboutHero from "../Components/abouthero";
import AboutDetails from "../Components/aboutDetails";
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
