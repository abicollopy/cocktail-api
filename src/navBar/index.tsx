import React from 'react';
import './navBar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const Pages = [
  { url: '/home', title: 'Home' },
  { url: '/random', title: 'Random' },
  { url: '/ingredients', title: 'Ingredients' },
];

export default () => {
  console.log('HI');
  return (
    <Router>
      <div className="NavBar">
        <Link to="/home" className="NavText">New Website!</Link>
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
            Pages.map(({ url, title }) => {
              console.log('HI');
              return (
                <Route path={url}>
                  <div className="body">{title}</div>
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
