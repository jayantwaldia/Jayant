import { NavLink } from "react-router-dom";
import gem from "../assets/gem.ico";
import Card from "../shared/Card";

function BlogPage() {
  return (
    <div className="Main">
      <p className="Page-Heading">Blog </p>
      <p className="Description">
        Not heavy with words, but here are some thoughts I randomly cross by on
        the Internet
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
      <NavLink to={"/blog/1"} className="nav-link">
        <Card>
          <p>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
          </p>
        </Card>
      </NavLink>
      <NavLink to={"/blog/1"} className="nav-link">
        <Card>
          <p>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            A career.
          </p>
        </Card>
      </NavLink>
      <NavLink to={"/blog/1"} className="nav-link">
        <Card>
          <p>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            Being Yourself as a career.
          </p>
        </Card>
      </NavLink>
    </div>
  );
}

export default BlogPage;
