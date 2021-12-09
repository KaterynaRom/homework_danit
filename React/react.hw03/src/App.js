import React, {useEffect, useState} from 'react';
import Modal from "./components/Modal/Modal";
import styles from './App.module.scss';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";
import Header from "./components/Heder/Header";
import modalContent from "./config/modalContent";
import Button from "./components/Button/Button";
import buttonModal from "./config/buttonModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  // const [currentName, setCurrentName] = useState("");
  const [currentCode, setCurrentCode] = useState("");
  const [isAddModal, setIsAddModal] = useState(true);

  useEffect(() => {
    (async() => {
      const response = await fetch('./productsList.json')
        .then(response => response.json());
      const favStatus = localStorage.getItem('favourites') || [];
      response.forEach(prod => prod.isFavourite = favStatus.includes(prod.code));
      setProducts(response);
    })()
  },[]);


  const toggleFav = (name) => {
    const index = products.findIndex(({name: arrayName}) => {
      return name === arrayName;
    })
    setProducts(current => {
      const newState = [...current];
      newState[index].isFavourite = !newState[index].isFavourite;
      saveFavToLS();
      return newState;
    })
  }

  const saveCartToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const saveFavToLS = () => {
    const newFav = [];
    products.forEach(prod => {
      if (prod.isFavourite) newFav.push(prod.code);
    });
    localStorage.setItem('favourites', JSON.stringify(newFav));
  }

  const openModal = (code, type ='add') => {
    if (type === 'delete') {
      setIsAddModal(false);
    } else {
      setIsAddModal(true);
    }
    setCurrentCode(code);
    setIsOpen(true);
  }

  const addToCart = (currentCode) => {
    setCart(current => {
      const index = current.findIndex(({ code }) => {
        return currentCode === code
      })

      if (index === -1) {
        saveCartToLS(JSON.stringify([...current, {code: currentCode, count: 1}]));
        return [...current, {code: currentCode, count: 1}]
      } else {
        const newState = [...current];
        newState[index].count = current[index].count + 1;

        saveCartToLS(JSON.stringify(newState));
        return newState;
      }
    })
    setIsOpen(false);
  }

  const deleteFromCart = (currentCode) => {
    setCart(current => {
      const index = current.findIndex(({ code }) => {
        return currentCode === code
      })

      const newState = [...current];
      newState.splice(index,1);
      saveCartToLS(JSON.stringify(newState));
      return newState;
    })
    setIsOpen(false);
  }

  const changeModalTitle = () => {
    if (isAddModal) {
      return modalContent[0].title
    } else {
      return modalContent[1].title
    }
  }

  const changeModalText = () => {
    if (isAddModal) {
      return modalContent[0].text
    } else {
      return modalContent[1].text
    }
  }


  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header/>
        <Routes toggleFav={toggleFav} cart={cart} products={products} openModal={openModal}/>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}
               title={changeModalTitle()} text={changeModalText()} actions={
          <>
            <Button text={buttonModal[0].text}
                    onClick={() => {
                      if (isAddModal) {
                        addToCart(currentCode);
                      } else {
                        deleteFromCart(currentCode);
                      }}}/>
            <Button
              onClick={() => setIsOpen(false)}
              text={buttonModal[1].text}/>
          </>}
        />
      </div>
    </BrowserRouter>
  )
}

export default App;
