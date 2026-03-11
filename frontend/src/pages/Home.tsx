import { Link } from "react-router-dom";
import "./Home.css";

// picture
import me from "../assets/3.png";

// import map from "../assets/4.jpg";
// import Button from "../components/Button";

import mail from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Home() {
  return (
    <>
      <div className="homediv">
        <div className="hellodiv">
          <p className="hello">
            Hello <br />i am marijana
          </p>
          <p className="bio">
            Graphic designer evolving into full-stack and UX/UI, combining
            aesthetics and technical thinking.
          </p>
          <div className="info">
            <div className="homeinfo">
              <img src={mail} alt="email" />
              <p>mmuncan17@gmail.com</p>
            </div>

            <Link to="https://www.linkedin.com/in/marijana-mun%C4%87an-2386371b7/">
              <div className="homeinfo">
                <img src={linkedin} alt="Linkedin" />
                <p>Marijana Muncan</p>
              </div>
            </Link>

            <Link to="">
              <div className="homeinfo">
                <img src={github} alt="Github" />
                <p>marijanatrbl</p>
              </div>
            </Link>
          </div>
        </div>
        <p className="biggest">portfolio</p>
        <p>Multidisciplinary designer and emerging full-stack developer</p>
      </div>

      <div className="aboutdiv">
        <h2>About me</h2>
        <div className="history">
          <div className="historytag first">
            <p>freelance designer</p>
          </div>
          <div className="historytag second">
            <p>graphic design bachelorette</p>
          </div>
          <div className="historytag third">
            <p>full-stack development beginner</p>
          </div>
        </div>

        <div className="aboutcards">
          <div className="baseinfo">
            <div className="imagediv">
              <img src={me} alt="Map" className="me" />
            </div>
            <div className="infoContainer">
              <h3>
                Marijana <br />
                Muncan
              </h3>
              <div className="horizontalLine"></div>
              <h4>BASED IN</h4>
              <p>Serbia, Novi Sad</p>
              <div className="horizontalLine"></div>
              <h4>Language</h4>
              <p>Serbian - Native</p>
              <p>English - C1</p>
              <p>Romanian - Beginner</p>
            </div>
          </div>
          <div className="hardskills">
            <div className="cardname">
              <h3>Hard Skills</h3>
            </div>
            <div className="hardskillcard">
              <div className="skillcolumn">
                <h4>2D</h4>
                <p>Adobe Photoshop</p>
                <p>Adobe InDesign</p>
                <p>Adobe Illustrator</p>
                <p>After Effects</p>
              </div>
              <div className="skillcolumn">
                <h4>3D</h4>
                <p>Blender</p>
              </div>
              <div className="skillcolumn">
                <h4>Web Development</h4>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Python</p>
              </div>
            </div>
          </div>
          <div className="softskills">
            <div className="cardname">
              <h3>Soft Skills</h3>
            </div>
            <div className="softskillcard">
              <p>Team collaboration</p>
              <p>Adaptability</p>
              <p>Time management</p>
              <p>Attention to detail</p>
              <p>User-centered thinking</p>
              <p>Initiative</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
