import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/home";
import About from "./components/about";
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <About />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
