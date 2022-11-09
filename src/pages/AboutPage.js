import { FaInstagram } from "react-icons/fa";
import Card from "../shared/Card";
import me from "../assets/Me.png";

function AboutPage() {
  return (
    <div className="Main">
      <p className="Page-Heading">About me</p>

      <div className="profileImg">
        <img src={me} alt="Me sitting on a rock" />
      </div>
      <Card>
        <p className="aboutMe">
          Hello! I'm Jayant Waldia, a Front-end focused developer. I build &
          break stuff, write code, design things, and create content.
          <br></br>
          <br></br>I like to communicate, get things done, and ensure standards
          while striving for developing [mutual clarity, objectives, vibes] =
          [teams, friends, family].
          <br></br>
          <br></br>
          Home :{" "}
          <a
            href="https://goo.gl/maps/Y67kmXTPHr3uCWZD7"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            Pithoragarh
          </a>
          <br></br>
          Currently :{" "}
          <a
            href="https://goo.gl/maps/ceoQHDm8knPdSMh38"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            Noida
          </a>{" "}
          📌
          <br></br>
          <br></br>
        </p>

        <div className="Links">
          <p>For more of me: </p>
          <div className="Link">
            <a
              href={"https://www.instagram.com/jayantwaldia/"}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} color="white" />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;
