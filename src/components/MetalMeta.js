import React from 'react';
import data from '../metal.json';
import Band from './Band';
import './MetalMeta.css';

function MetalMeta(props) {
    // get the length of bands
    // map each band to a Band component
    // return the Band components
    const bands = data.map((band, i) => {
        return <Band key={i} {...band} />
    })


return (
<div className="metal-meta">
    {bands}
</div>
  );
}

export default MetalMeta;