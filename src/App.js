//Package imports
import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route, 
  Switch, 
  Link
  } from 'react-router-dom';

//custom css imports
import './ui-toolkit/css/nm-cx/main.css';
//import './custom.css';

//App Imports
import { Home } from './components/home';
import NavigationBar from './containers/navbar';
import CityWeather from './containers/cityWeather';
import AddCity from './containers/addCity';

//Need to use switch to get Add to work: https://reacttraining.com/react-router/web/example/no-match

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="bg-off-white padding-medium">
        <h1 className="padding-bottom-medium">Dojo Weather Forecast</h1>
        <p><Link to="/add">Add a Weather Forecast</Link></p>
        <NavigationBar />
        <div className="card padding-medium">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/add' component={ AddCity } />
            <Route exact path='/:cityName' component={ CityWeather } />            
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
