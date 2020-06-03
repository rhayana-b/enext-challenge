import React from 'react';
import api from '../services/api';

const DogInfo = ({breed, petName, fontColor, fontFamily, image}) => {

  return (
    <div className="comp-wrapper">
      <h2 style={{color: fontColor, fontFamily: fontFamily }}>{petName}</h2>
      {image ? <img src={image} alt="Pet" /> : null}
    </div>
  );
}

export default DogInfo;