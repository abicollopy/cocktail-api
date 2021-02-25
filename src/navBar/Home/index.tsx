import React, { useState } from 'react';

const apiSearchEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

const searchForCocktail = async (searchValue: string) => {
  const endpoint = `${apiSearchEndpoint}i=${searchValue}`;
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
  const [responseIngredientInfo, setResponseIngredientInfo] = useState<IngredientInfoModel>();
  const {
    strABV = '', strDescription = '', strIngredient = '',
  } = responseIngredientInfo || {};
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        onChange={(event) => {
          setSearchValue(event.currentTarget.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          searchForCocktail(searchValue).then((responseJson) => {
            const { ingredients: [ingredientInfo] } = responseJson;
            setResponseIngredientInfo(ingredientInfo);
          });
        }}
      >
        Search
      </button>
      <div>
        {strIngredient}
        <br />
        It has a ABV of&nbsp;
        {strABV}
        <br />
        {strDescription}
      </div>
    </>
  );
};
