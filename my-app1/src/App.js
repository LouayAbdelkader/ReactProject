import './App.css';
import NavBar from './NavBar';
import Home from "./Home.js"
import Projects from "./Projects.js"
import Contact from './Contact.js';
function App() {
  return (
    <div>
      <NavBar />
      <div className='Home'>
        <Home />
      </div>
      <div className='Projects'>
        <Projects />
      </div>
      <Contact />
    </div>

  );
}

export default App;
