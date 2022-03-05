import React, {useState } from 'react';
import './Like.css';

function Like(props) {

    const [count, setCount] = useState(0);
return (
  <div className='likes'>
            <button onClick={() => setCount(count + 1)}>
                   <span role="img" aria-label='thumbs up'>👍</span>
            </button>
            <h3>{count}</h3>
             <button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                   <span role="img" aria-label='thumbs down'>👎</span>
            </button>
    </div> 
    );
}

export default Like;