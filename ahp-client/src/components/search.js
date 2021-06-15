import React from 'react';
import PropTypes from 'prop-types';
 
const Search = () => {
    function getDistanceOneToOne(lat1, lng1, lat2, lng2)
    {
       const Location1Str = lat1 + "," + lng1;
       const Location2Str = lat2 + "," + lng2;

       let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";

       let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${GOOGLE_API_KEY}`; // you need to get a key
       let mapApiURL = `${ApiURL}${encodeURI(params)}`;

       let fetchResult =  await fetch(mapApiURL); // call API
       let Result =  await fetchResult.json(); // extract json

       return Result.rows[0].elements[0].distance;
    }
    return (
        <div>
            Search
        </div>
    );
}
 
Search.propTypes = {};
 
export default Search;