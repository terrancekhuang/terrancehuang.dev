import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <Contact />
      </main>
      <footer className="footer band-coal">
        <div className="wrap">
          <span>Terrance Huang</span>
          <span>terrancehuang.dev</span>
        </div>
      </footer>
    </>
  );
}

export default App;
