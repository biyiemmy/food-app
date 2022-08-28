import "./Register.css";
import RegisterW from "../images/Register.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <>
      <div className="register d-flex justify-content-between">
        <div>
          <img src={RegisterW} width="764" height="700" alt="" />
        </div>
        <div className="d-flex flex-column w-100 justify-content-center align-items-center">
          <div className="py-4">
            <h3>Welcome to Lilies!</h3>
          </div>
          <Form className="w-75">
            <Form.Group className="mb-3">
              <Form.Control
                style={{ borderColor: "#FBDDBB" }}
                className="register_input"
                type="email"
                placeholder="Your First Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                style={{ borderColor: "#FBDDBB" }}
                className="register_input form-control"
                type="password"
                placeholder="Your Email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                style={{ borderColor: "#FBDDBB" }}
                className="register_input"
                type="password"
                placeholder="Your Password"
              />
            </Form.Group>

            <div className="text-center h-50 my-3">
              <Link className="" to="/login">
                <button
                  className="w-100 register_button my-3"
                  variant="primary"
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </Form>
          <p className="register_text">
            Already have an account. <span> LOGIN</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
