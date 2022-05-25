import React from 'react';
import "../Styles/FbDietary.css";

function FbDietary() {
  const dietOptions = [
    "Vegetarian",
    "Vegan",
    "Halal",
    "Allergy Friendly",
    "Gluten-Free"
  ];

  const dietOptionsMap = dietOptions.map((option) => {
    return (
      <div className='button-container'>
        <button>{option}</button>
      </div>
    )
  })

  return (
    <div>{dietOptionsMap}<hr/></div>
  )
}

export default FbDietary