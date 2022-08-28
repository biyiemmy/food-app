import "./Footer.css";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";
import App from "../icons/App.jpg"
import Google from "../icons/Google.jpg"

const Footer = () => {
  return (
    <>
      <div className="footer pt-5">
        <div className="container d-flex justify-content-between my-2 text-white">
          <div>
            <h3>Company</h3>
            <ul className="list-unstyled pt-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul className="list-unstyled pt-3">
              <li>Help Center</li>
              <li>Safety Center</li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul className="list-unstyled pt-3">
              <li>Cookies Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Dispute Resolution</li>
            </ul>
          </div>

          <div>
            <h3>Install App</h3>
            <div className="pt-3">
              <div>
                <img src={Google} className="store" alt="" />
              </div>
              <div>
                <img src={App} className="store" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-top pt-4 below">
          <div className="container d-flex justify-content-between text-white">
            <p>© 2021 LILIES, All rights reserved</p>
            <div className="">
              <Github className="icons" color="white" size={17.07} />
              <Twitter className="icons" color="white" size={17.07} />
              <Linkedin className="icons" color="white" size={17.07} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
