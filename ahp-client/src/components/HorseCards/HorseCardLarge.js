import React from "react";
import { Card } from "react-bootstrap";
import './HorseCard.css'

const HorseCardLarge = () => {
  return (
    <Card className="horse-card horse-card-large">
        {/* This will render the horse image */}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="horse-card-body">
        <Card.Title className="horse-name">Horse Name </Card.Title>
        <Card.Text className='horse-card-info-container'>
          <div className='horse-card-info'>
            <p>Horse Type</p>
          </div>
          <div className='horse-card-info'>
            <p>Horse Age</p>
          </div>
          <div className='horse-card-info'>
            <p>Distance</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HorseCardLarge;