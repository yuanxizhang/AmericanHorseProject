import React from "react";
import { Card } from "react-bootstrap";
import './HorseCard.css'

const HorseCardLarge = (horse) => {
  return (
    <Card className="horse-card horse-card-large">
        {/* This will render the horse image */}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="horse-card-body">
        <Card.Title className="horse-name">{horse.name} </Card.Title>
        <Card.Text className='horse-card-info-container'>
          <div className='horse-card-info'>
            <p>{horse.breed}</p>
          </div>
          <div className='horse-card-info'>
            <p>{horse.age}</p>
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