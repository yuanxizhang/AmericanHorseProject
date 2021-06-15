import React from "react";
import { Card } from "react-bootstrap";
import './HorseCard.css'

const HorseCardLarge = () => {
  return (
    <Card className="horse-card horse-card-larger">
        {/* This will render the horse image */}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Horse Name </Card.Title>
        <Card.Text>
          <div>
            <p>Horse Type</p>
          </div>
          <div>
            <p>Horse Age</p>
          </div>
          <div>
            <p>Distance</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HorseCardLarge;