import React from 'react';
const data = require('../metal.json');

// count the number of bands in json data
const bands = data.length;

function Heading(props) {
   // count the number of bands
    // const bands = data.bands.length;
    return (
    <div className='Header'>
        <h1>Merissa Bridgeman</h1>
        <h4>FEW 1.2 Final Assessment</h4>
        <h4>Total Bands: {bands}</h4>
        <h4> Styles </h4>
    </div>  
    );
}

export default Heading;