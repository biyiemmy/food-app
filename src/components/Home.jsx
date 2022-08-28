import "./Home.css";
import Main from "../images/bon-vivant-qom5MPOER-I-unsplash 1.png";
import Google from "../icons/download.png";
import App from "../icons/download3.png";
import CardHome from "./Card";
import Image1 from "../images/bon-vivant-qom5MPOER-I-unsplash 2.png";
import Image2 from "../images/bon-vivant-qom5MPOER-I-unsplash 3.png";
import Image3 from "../images/bon-vivant-qom5MPOER-I-unsplash 4.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="container text-white mt-5">
        <div className="d-flex justify-content-between">
          <div className="home_text">
            <h4>
              Order <span>food</span> anytime, <br /> anywhere
            </h4>
            <p>
              Browse from our list of specials to place your order and have food{" "}
              <br />
              delivered to you in no time. Affordable, tasty and fast!
            </p>
            <div className="d-flex">
              <img src={Google} width="135" height="40" alt="" />
              <img src={App} width="135" height="40" alt="" />
            </div>
          </div>
          <div className="">
            <img src={Main} height="400" width="400" alt="" />
          </div>
        </div>

        <div className="text-center my-5 pt-5 home_middle">
          <h5>Special Meals of the day!</h5>
          <p className="mt-4">
            Check our sepecials of the day and get discounts on all our meals{" "}
            <br />
            and swift delivery to what ever location within Ilorin.
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <CardHome
            image={Image1}
            text={"Stir fry Pasta"}
            subText={"Stir fry pasta yada yada yada because of Sesan"}
          />
          <CardHome
            image={Image2}
            text={"Meat Balls"}
            subText={"Stir fry pasta yada yada yada because of Sesan"}
          />
          <CardHome
            image={Image3}
            text={"Burger Meal"}
            subText={"Stir fry pasta yada yada yada because of Sesan"}
          />
        </div>

        <div className="d-flex justify-content-between my-5 p-5">
          <div>
            <h4>Get notified when we update!</h4>
            <p>
              Get notified when we add new items to our specials menu, <br />{" "}
              update our price list of have promos!
            </p>
          </div>

          <div className="d-flex h-25 mt-4">
            <InputGroup className="px-3">
              <Form.Control
                className="update_text border-0"
                placeholder="ade@gmail.com"
              />
            </InputGroup>
            <Button className="w-50 update_button" variant="outline-secondary">
              Get Notified!
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
