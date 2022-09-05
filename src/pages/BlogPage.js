import { NavLink } from "react-router-dom";
import gem from "../assets/gem.ico";
import Card from "../shared/Card";

function BlogPage() {
  return (
    <div className="Main">
      <p className="Page-Heading">Other than tech </p>
      <p className="Description">
        Not heavy on words, but I like lifting heavy on some thoughts.
      </p>

      <NavLink to={"/blog/1"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "15px" }}
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
              style={{ width: "15px", marginRight: "15px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            Abandon the abundance
          </h4>
        </Card>
      </NavLink>
      <NavLink to={"/blog/3"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "15px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            A monkey with a plan
          </h4>
        </Card>
      </NavLink>
      <NavLink to={"/blog/4"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "15px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            Himalayas - An Observation
          </h4>
        </Card>
      </NavLink>
    </div>
  );
}

export default BlogPage;
