
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import BrowserRange from "./Component/BrowserRange";
import OurProduct from "./Component/OurProduct";
import Inspirations from "./Component/Inspirations";
import Share from "./Component/Share";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Hero />
     <BrowserRange />
     <OurProduct />
     <Inspirations />
     <Share />
     <Footer />
    </div>
  );
}
