import React from 'react';
import './Band.css';
import Like from './Like';

function Band(props) {
    const { band_name, formed, origin, fans, split, style } = props;
return (
    <>
  <div className='Band'>
      <h2>{band_name}</h2> 
      <h4>Origin: {origin}</h4>
      <h4>Fans: {fans.toLocaleString('en')} </h4>
      <h4>Formed: {formed}</h4>
      <h4>Style: {style}</h4>
      { split === '-' ? <Like /> : <h3>split: {split}</h3>}
  </div>
  </>
  );
}

export default Band;