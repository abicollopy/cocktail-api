import React from 'react';
import './navBar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './Home';
import RandomPage from './RandomCocktail';
import IngredientPage from './IngredientList';

const Pages = [
  { url: '/home', title: 'Home', component: HomePage },
  { url: '/random', title: 'Random', component: RandomPage },
  { url: '/ingredients', title: 'Ingredients', component: IngredientPage },
];

export default () => {
  console.log('HI');
  return (
    <Router>
      <div className="NavBar">
        <Link to="/home" className="NavText">Cocktail Generator</Link>
        <div className="NavButtonContainer">
          {
                Pages.map(({ url, title }) => {
                  console.log('HI');
                  return (
                    <Link to={url} className="NavButton">{title}</Link>
                  );
                })
            }
        </div>
      </div>
      <Switch>
        {
            Pages.map(({ url, component: Component }) => {
              console.log('HI');
              return (
                <Route path={url}>
                  <Component />
                </Route>
              );
            })
        }
        <Route path="/">
          <div className="body">Home</div>
        </Route>
      </Switch>
    </Router>
  );
};
