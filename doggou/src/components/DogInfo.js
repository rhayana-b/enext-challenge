import React from 'react';

const DogInfo = ({petName, fontColor, fontFamily, image}) => {

  return (
    <div className="comp-wrapper dog-info">
      <h2 style={{color: fontColor, fontFamily: fontFamily }}>{petName}</h2>
      {image ? <img src={image} alt="Pet" /> : null}
    </div>
  );
}

export default DogInfo;