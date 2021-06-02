import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import React, { useState,useEffect} from 'react'
import Header from "./Header"
import Banner from "./Banner"
import Restaurant from "./Restaurant"
import RestaurantPage from "./RestaurantPage"
import { useParams } from "react-router-dom";



function App() {

  


    return (
        <Router>
        <div className="App">
          <Switch> 
            <Route path="/product/:productId">
              <Header />
              <RestaurantPage
              />
          </Route>
          <Route path="/">
              <Header />
              <Banner />
              <Restaurant />
            </Route>
          </Switch>
        </div>
      </Router>
      
    );
  }
  
  export default App;
