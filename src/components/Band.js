import React, {useState} from 'react';
import './Band.css';

function Band(props) {
    const { band_name, formed, origin, fans, split, style } = props;
    const [count, setCount] = useState(0);
return (
  <div className='Band'>
      <h2>{band_name}</h2> 
      <h4>Origin: {origin}</h4>
      <h4>Fans: {fans} </h4>
      <h3>Formed: {formed}</h3>
      { // if split == - 
      split === '-' ? <div className='likes'>
            <button classname="like-status"onClick={() => setCount(count + 1)}>
                   <span role="img" aria-label='thumbs up'>👍</span>
            </button>
            <h3>{count}</h3>
             <button onClick={() => setCount(count - 1)}>
                   <span role="img" aria-label='thumbs down'>👎</span>
            </button>
      </div> : <h3>Split: {split}</h3>}
  </div>
  );
}

export default Band;