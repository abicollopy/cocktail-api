/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './home.css';

const apiSearchEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

const searchForIngredient = async (searchValue: string, searchTerm: string) => {
  const endpoint = `${apiSearchEndpoint}${searchTerm}=${searchValue}`;
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  return responseJson;
};

interface IngredientInfoModel {
  idIngredient: string;
  strABV: string;
  strAlcohol: string;
  strDescription: string;
  strIngredient: string;
}

export default () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('s');
  const [responseIngredientInfo, setResponseIngredientInfo] = useState<IngredientInfoModel>();
  const {
    strABV = '', strDescription = '', strIngredient = '',
  } = responseIngredientInfo || {};
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
              searchForIngredient(searchValue, searchTerm).then((responseJson) => {
                const { ingredients: [ingredientInfo] } = responseJson;
                setResponseIngredientInfo(ingredientInfo);
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
      {
          responseIngredientInfo && (
            <div>
              {strIngredient}
              <br />
              It has an ABV of&nbsp;
              {strABV}
              <br />
              {strDescription}
            </div>
          )
        }
    </>
  );
};
