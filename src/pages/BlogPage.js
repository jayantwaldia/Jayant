import { NavLink } from "react-router-dom";
import gem from "../assets/gem.ico";
import Card from "../shared/Card";

function BlogPage() {
  return (
    <div className="Main">
      <p className="Page-Heading">Blog </p>
      <p className="Description">
        Not heavy with words, but here are some random thoughts I cross by while
        blaming the interner
      </p>

      <NavLink to={"/blog/1"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            Being Yourself as a career
          </h4>
        </Card>
      </NavLink>
      <NavLink to={"/blog/2"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            Abandon the abundances
          </h4>
        </Card>
      </NavLink>
      <NavLink to={"/blog/3"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            You're just a monkey with a plan
          </h4>
        </Card>
      </NavLink>
    </div>
  );
}

export default BlogPage;
