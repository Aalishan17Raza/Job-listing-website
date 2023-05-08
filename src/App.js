
import './App.css';
import { Pricing } from './components/Pricing/Pricing';
import { About } from './components/about/About';
import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { Testimonial } from './components/testimonials/Testimonial';
// import { SearchArea } from './components/searchArea/SearchArea';
import { TitleSection } from './components/titleSection/TitleSection';
function App() {
  return (
    <div>
      <TitleSection />
      {/* <SearchArea /> */}
      <Features />
      <About />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
