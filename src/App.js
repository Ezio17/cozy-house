import React from 'react';
import './scss/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './componentns/HomePage'
import OurPetsPage from './componentns/OurPetsPage'

const App = () => {
  return (
    <BrowserRouter>
     <div className='page'>
      <Switch>
       <Route path='/pets' component={OurPetsPage} /> 
       <Route exact path='/' component={HomePage} />
      </Switch>
     </div>
    </BrowserRouter>
  );
};

export default App;
