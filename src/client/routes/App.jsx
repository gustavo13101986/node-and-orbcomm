import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Actions from '../containers/Actions';
import Home from '../containers/Home'
import Login from '../containers/Login'


const App = () => {
  const initialState = useInitialState();
  return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/barco" component={Actions} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>

  );
}

export default App;