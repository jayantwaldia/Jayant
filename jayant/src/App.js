import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Mainview">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <About />
                <Projects />
              </>
            }
          ></Route>
          <Route exact path="/blog" element={<BlogPage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
