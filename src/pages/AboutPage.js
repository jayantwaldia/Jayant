import { NavLink } from "react-router-dom";
import Card from "../shared/Card";
import gem from "../assets/gem.ico";

function AboutPage() {
  return (
    <div className="Main">
      <p className="Page-Heading">About me</p>
      <p className="Description">----------</p>

      <Card></Card>
    </div>
  );
}

export default AboutPage;
