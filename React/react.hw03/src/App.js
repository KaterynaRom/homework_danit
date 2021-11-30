import React, {useEffect, useState} from 'react';
import CardsContainer from './components/CardsContainer/CardsContainer';
import styles from './App.module.scss';

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
    <div className={styles.wrapper}>
      <CardsContainer products={products}/>
    </div>
  )
}

export default App;
