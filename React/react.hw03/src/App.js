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
  const [currentName, setCurrentName] = useState("");
  const [isAddModal, setIsAddModal] = useState(true);

  useEffect(() => {
    // if (localStorage.getItem('cart')) {
    //   setCart(JSON.parse(localStorage.getItem('cart')))
    // }

    (async() => {
      const response = await fetch('./productsList.json')
        .then(response => response.json());
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
      localStorage.setItem(`favourite${name}`, JSON.stringify(!newState[index].isFavourite));
      // console.log( newState[index].isFavourite)
      // console.log(!newState[index].isFavourite)
      // console.log(products)
      return newState;
    })
  }

  const saveToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));

  }

  // const saveFavToLS = (isFavourite) => {
  //   localStorage.setItem('favourite', JSON.stringify(isFavourite));
  // }

  const openModal = (name, type ='add') => {
    if (type === 'delete') {
      setIsAddModal(false);
    } else {
      setIsAddModal(true);
    }
    setCurrentName(name);
    setIsOpen(true);
  }

  const addToCart = (currentName) => {
    setCart(current => {
      const index = current.findIndex(({ name }) => {
        return currentName === name
      })

      if (index === -1) {
        saveToLS(JSON.stringify([...current, {name: currentName, count: 1}]));
        return [...current, {name: currentName, count: 1}]
      } else {
        const newState = [...current];
        newState[index].count = current[index].count + 1;
        saveToLS(JSON.stringify(newState));
        return newState;
      }
    })
    setIsOpen(false);
  }

  const deleteFromCart = (currentName) => {
    setCart(current => {
      const index = current.findIndex(({ name }) => {
        return currentName === name
      })

      const newState = [...current];
      newState.splice(index,1);
      saveToLS(JSON.stringify(newState));
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
                      addToCart(currentName);
                    } else {
                      deleteFromCart(currentName);
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
