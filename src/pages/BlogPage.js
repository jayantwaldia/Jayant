import { NavLink } from "react-router-dom";
import gem from "../assets/gem.ico";
import Card from "../shared/Card";

function BlogPage() {
  return (
    <div className="Main">
      <p className="Page-Heading">Blog </p>
      <p className="Description">
        Not heavy on words, but I lift heavy on these thoughts...
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
            Abandon the abundance
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
            A monkey with a plan
          </h4>
        </Card>
      </NavLink>
      <NavLink to={"/blog/4"} className="nav-link">
        <Card>
          <h4>
            <img
              style={{ width: "15px", marginRight: "10px" }}
              src={gem}
              alt="blue-gem"
            ></img>
            Himalayas as my Home
          </h4>
        </Card>
      </NavLink>
    </div>
  );
}

export default BlogPage;
