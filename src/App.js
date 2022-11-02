import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact/contact";
import Landing from "./Landing/Landing";

function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App