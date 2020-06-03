import React, { useState, useEffect } from 'react';
import './App.css';
import SelectBreed from './components/SelectBreed';
import NameInput from './components/NameInput';
import SelectColor from './components/SelectColor';
import SelectFont from './components/SelectFont';
import DogInfo from './components/DogInfo';

const App = () => {
  const [breed, setBreed] = useState('');
  const [petName, setPetName] = useState('');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('');
  const [image, setImage] = useState('');
  
  useEffect(() => {
    const storageBreed = localStorage.getItem('breed');
    const storagePetName = localStorage.getItem('petName');
    const storageColor = localStorage.getItem('color');
    const storageFont = localStorage.getItem('font');
    const storageImage = localStorage.getItem('image');

    setBreed(storageBreed ? storageBreed : breed);
    setPetName(storagePetName ? storagePetName : petName);
    setFontColor(storageColor ? storageColor : fontColor); 
    setFontFamily(storageFont ? storageFont : fontFamily);
    setImage(storageImage ? storageImage : image); 
  }, [])

  const savePet =  (breed, petName, color, font, image) => {
    localStorage.setItem('breed', breed);
    localStorage.setItem('petName', petName);
    localStorage.setItem('color', color);
    localStorage.setItem('font', font);
    localStorage.setItem('image', image);
    localStorage.setItem('datetime', new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paw" className="svg-inline--fa fa-paw fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z">
          </path>
        </svg>
        <h1>Doggou</h1>
      </div>

      <div className="main">
        <SelectBreed breed={breed} onBreedChange={(event) => setBreed(event.target.value)} onImageChange={setImage} />
        <NameInput petName={petName} onNameChange={(event) => setPetName(event.target.value)} />
        <SelectColor color={fontColor} onColorChange={(event) => setFontColor(event.target.value)} />
        <SelectFont fontFamily={fontFamily} onFontChange={(event) => setFontFamily(event.target.value)} />
        <DogInfo image={image} breed={breed} petName={petName} fontColor={fontColor} fontFamily={fontFamily}/>

        <button onClick={() => {savePet(breed, petName, fontColor, fontFamily, image)}}>Salvar</button>
      </div>
    </div>
  );
}

export default App;
  