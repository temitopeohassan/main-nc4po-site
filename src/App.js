import React from 'react'; 
import Home  from './pages/index';
import About  from './pages/about';
import Donate  from './pages/donate';
import Candidates  from './pages/candidates';
import Contact  from './pages/contact';
import Participate  from './pages/participate';
import NoMatch  from './pages/nomatch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Copyright from './components/Copyright';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/candidates" element={<Candidates />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/donate" element={<Donate />}/>
          <Route path="/participate" element={<Participate />}/>
          <Route path="/nomatch" element={<NoMatch />}/>
        </Routes>
         <Footer />
          <Copyright />
      </Router>
    </div>
  );
}

export default App;
