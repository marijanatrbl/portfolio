// import { Link } from "react-router-dom";
import "./Contact.css";

// import map from "../assets/4.jpg";
// import Button from "../components/Button";

function Contact() {
  return (
    <>
      <div id="forma">
        <h2>CONTACT</h2>
        <form id="formaa">
          <input type="text" name="Name" placeholder="name" />
          <input type="text" name="Company" placeholder="company" />
          <input type="email" name="Email" placeholder="e-mail" />
          <input type="tel" name="Tel" placeholder="phone" />
          <textarea name="Message" placeholder="message"></textarea>
          <button id="openmodal" type="submit">
            send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
