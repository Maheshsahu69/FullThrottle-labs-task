import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={UserList} exact/>
      <Route path='/userdetail' component={UserDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
