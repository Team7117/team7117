import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import MainPage from './routes/MainPage';
import WorksPage from './routes/WorksPage';
import ContactPage from './routes/ContactPage';
import Header from '../system/Header';
import Footer from '../system/Footer';


function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Route path="/" exact={true} component={MainPage}></Route>
      <Route path="/WorksPage" exact={true} component={WorksPage}></Route>
      <Route path="/ContactPage" exact={true} component={ContactPage}></Route>
      <Footer></Footer>
    </HashRouter>
  )
}

export default App;
