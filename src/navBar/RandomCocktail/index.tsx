import React, { useEffect, useState } from 'react';
import './randomCocktail.css';

const apiRandomEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const searchRandom = async () => {
  const response = await fetch(apiRandomEndpoint);
  const responseJson = await response.json();
  return responseJson;
};

const searchFunction = (stateResetFn:any) => {
  searchRandom().then((responseJson) => {
    const { drinks: [drinkInfo] } = responseJson;
    stateResetFn(drinkInfo);
  });
};

interface DrinkInfoModel {
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

export default () => {
  const [responseDrinkInfo, setResponseDrinkInfo] = useState<DrinkInfoModel>();
  const {
    strDrink = '', strInstructions = '', strDrinkThumb = '',
  } = responseDrinkInfo || {};
  useEffect(() => {
    searchFunction(setResponseDrinkInfo);
  }, []);
  return (
    <div>
      <div>
        {strDrink}
        <br />
        {strInstructions}
        <img src={strDrinkThumb} alt="" />
      </div>
      <div
        className="GenerateNewButton"
        role="button"
        tabIndex={0}
        onClick={() => {
          searchFunction(setResponseDrinkInfo);
        }}
        onKeyDown={() => {
          searchFunction(setResponseDrinkInfo);
        }}
      >
        Generate New
      </div>
    </div>
  );
};
