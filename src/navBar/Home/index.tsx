/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './home.css';

const apiSearchEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const apiFilterEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

const searchForCocktails = async (searchValue: string, searchTerm: string) => {
  const useSearch = searchTerm === 's' ? apiSearchEndpoint : apiFilterEndpoint;
  const endpoint = `${useSearch}${searchTerm}=${searchValue}`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  return responseJson;
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
  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('s');
  const [responseDrinksInfo, setResponseDrinksInfo] = useState<DrinkInfoModel[]>([]);
  return (
    <>
      <div>
        <div className="SearchContainer">
          <input
            className="SearchBar"
            type="search"
            placeholder={searchTerm === 's' ? 'Search for Cocktails' : 'Search for Ingredients'}
            onChange={(event) => {
              setSearchValue(event.currentTarget.value);
            }}
          />
          <button
            className="SearchButton"
            type="submit"
            onClick={() => {
              searchForCocktails(searchValue, searchTerm).then((responseJson) => {
                const { drinks } = responseJson;
                setResponseDrinksInfo(drinks);
              });
            }}
          >
            Search
          </button>
        </div>
        <div className="SwitchingButtonContainer">
          <div
            className={searchTerm === 's' ? 'ActiveButton' : 'InactiveButton'}
            onClick={() => {
              setSearchTerm('s');
            }}
          >
            Cocktails
          </div>
          <div
            className={searchTerm === 'i' ? 'ActiveButton' : 'InactiveButton'}
            onClick={() => {
              setSearchTerm('i');
            }}
          >
            Ingredients
          </div>
        </div>
      </div>
      <div>
        {
          responseDrinksInfo.map(({ strDrink, strInstructions, strDrinkThumb }) => (
            <div>
              {strDrink}
              <br />
              {strInstructions}
              <img src={strDrinkThumb} alt="" />
            </div>
          ))
        }
      </div>
    </>
  );
};
