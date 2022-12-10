import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Works from './containers/Works';
import Contact from './containers/Contact';
import Error from './containers/Error';
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path = '/portfolio' component = {Home} />
        <Route path = '/about' component = {About}/>
        <Route path = '/skills' component = {Skills}/>
        <Route path = '/works' component = {Works}/>
        <Route path = '/contact' component = {Contact}/>
        <Route component = {Error}/>      
      </Switch>
    </>
  );
}
export default App;