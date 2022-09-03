import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";
import BlogPage4 from "./pages/BlogPage4";

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
          <Route exact path="/blog/1" element={<BlogPage1 />}></Route>
          <Route exact path="/blog/2" element={<BlogPage2 />}></Route>
          <Route exact path="/blog/3" element={<BlogPage3 />}></Route>
          <Route exact path="/blog/4" element={<BlogPage4 />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
