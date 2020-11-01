import '../assets/css/App.css';

import Navbar from "./navbar.js"
import Welcome from "./welcome.js"
import About from "./about.js"
import Experience from "./experience.js"
import Education from "./education.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="flex w-full justify-center">
        <div class="lg:w-3/4">
          <Welcome/>
          <About/>
          <Experience/>
          <Education/>
        </div>
      </div>
    </div>
  );
}

export default App;