import React, { useEffect, useState } from 'react';
import api from '../services/api';

const DogInfo = ({breed, petName, fontColor, fontFamily, onImageChange}) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (breed) {
      api.get(`/breed/${breed}/images/random`).then(response => {
        setImage(response.data.message);
        onImageChange(response.data.message);
      }).catch(error => {
        console.log(error);
      }); 
    }
  }, [breed]);

  return (
    <div className="comp-wrapper">
      <h2 style={{color: fontColor, fontFamily: fontFamily }}>{petName}</h2>
      {image ? <img src={image} alt="Pet" /> : null}
    </div>
  );
}

export default DogInfo;