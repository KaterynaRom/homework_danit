import React, {useEffect, useState} from 'react';
import CardsContainer from './components/CardsContainer/CardsContainer';
import styles from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";
import Header from "./components/Heder/Header";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await fetch('./productsList.json')
        .then(response => response.json());

      setProducts(response);
    })()
  },[])

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header/>
        <Routes products={products}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
