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

export default () => (
  <Router>
    <div className="NavBar">
      <Link to="/home" className="NavText">Cocktail Generator</Link>
      <div className="NavButtonContainer">
        {
          Pages.map(({ url, title }) => (
            <Link key={title} to={url} className="NavButton">{title}</Link>
          ))
        }
      </div>
    </div>
    <Switch>
      {
        Pages.map(({ url, component: Component }) => (
          <Route key={url} path={url}>
            <Component />
          </Route>
        ))
      }
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
