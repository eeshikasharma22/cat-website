import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import CatGallery from './components/CatGallery.jsx';
import TopBreeds from './components/TopBreeds.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroSection />
        <CatGallery />
        <TopBreeds />
      </main>
      <Footer />
    </div>
  );
}

export default App;
