import "./App.css";
import About from "./componentes/About";
import ContactMe from "./componentes/ContactMe";
import Home from "./componentes/Homescreen";
import Navbar from "./componentes/Navbar";
import Testimonial from "./componentes/Testimonials";
import Portfolio from "./componentes/Myportfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/ContactMe" element={<ContactMe />}></Route>
              <Route path="/testimonials" element={<Testimonial />} />
              <Route path="/myportfolio" element={<Portfolio />} />
             <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
