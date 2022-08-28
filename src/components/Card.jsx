import Card from "react-bootstrap/Card";
import "./Card.css";

const CardHome = ({ image, text, subText }) => {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: "#00302E" }}
      className="text-center border-0"
    >
      <Card.Img src={image} width="250px" height="250px" />
      <Card.Body className="">
        <Card.Title className="card_text">{text}</Card.Title>
        <Card.Text className="card_subtext">{subText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardHome;
