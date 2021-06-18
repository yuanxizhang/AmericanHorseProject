// This page will house the horse listing and search capabilites
import React from 'react';
import HorseCard from './Horsecard' 

const HorseListing = ({ horses }) => {
    return (
        <div className="card-grid">
            {horses.map(horse => {
                return <HorseCard horses = {horse} key={horse.id} />
            })}
        </div>
    );
}
 
export default HorseListing;