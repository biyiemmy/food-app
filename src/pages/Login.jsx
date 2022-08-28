import "./Login.css";
import LoginR from "../images/Login.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Login = () => {
  return (
    <>
      <div className="register d-flex justify-content-between">
        <div>
          <img src={LoginR} width="764" height="700" alt="" />
        </div>
        <div className="d-flex flex-column w-100 justify-content-center align-items-center">
          <div className="py-4">
            <h3>Welcome Back!</h3>
          </div>
          <Form className="w-75">
            <Form.Group className="mb-3">
              <Form.Control
                style={{ borderColor: "#FBDDBB" }}
                className="register_input"
                type="email"
                placeholder="Your Email address"
              />
            </Form.Group>

            <InputGroup className="mb-3">
              <Form.Control
                style={{ borderColor: "#FBDDBB" }}
                className="register_input form-control"
                placeholder="Your Password"
              />
              <InputGroup.Text
                style={{
                  borderColor: "#FBDDBB",
                  color: "#00302E",
                  backgroundColor: "white",
                }}
              >
                show
              </InputGroup.Text>
            </InputGroup>

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

          <div className="d-flex justify-content-between align-content-center register_text">
            <div className="px-5 ">
              <Link className="text-dark nav_links" to="/login">
                Create an account
              </Link>
            </div>
            <div className="px-5">
              <Link className="text-dark nav_links" to="/">
                Forgot Passoword
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
