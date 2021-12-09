import React, {useEffect, useState} from 'react';
import Modal from './components/Modal/Modal';
import styles from './App.module.scss';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes/Routes';
import Header from './components/Heder/Header';
import modalContent from './config/modalContent';
import Button from './components/Button/Button';
import buttonModal from './config/buttonModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [currentCode, setCurrentCode] = useState("");
  const [isAddModal, setIsAddModal] = useState(true);

  useEffect(() => {
    (async() => {
      const response = await fetch('./productsList.json')
        .then(response => response.json());

      const favStatus = localStorage.getItem('favourites') || [];
      response.forEach(prod => prod.isFavourite = favStatus.includes(prod.code));
      setProducts(response);

      const cartStatusLS = JSON.parse(localStorage.getItem('cart'));
      if (cartStatusLS) {setCart(cartStatusLS)}
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
    localStorage.setItem('cart', cart);
  }

  const saveFavToLS = () => {
    const newFav = [];
    products.forEach(prod => {
      if (prod.isFavourite) {
        newFav.push(prod.code)
      }
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

  const addToCart = (current) => {
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

  const toggleModalFunctionality = () => {
    if (isAddModal) {
      setCart(addToCart);
      setIsOpen(false);
    } else {
      deleteFromCart(currentCode);
    }
  }

  const changeModalContent = (component) => {
    if (isAddModal) {
      return component[0]
    } else {
      return component[1]
    }
  }

  const titlesModal = modalContent.map(el => el.title)
  const textsModal = modalContent.map(el => el.text)

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header/>
        <Routes toggleFav={toggleFav} cart={cart} products={products} openModal={openModal}/>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={changeModalContent(titlesModal)}
               text={changeModalContent(textsModal)} actions={
              <>
                <Button text={buttonModal[0].text} onClick={toggleModalFunctionality}/>
                <Button onClick={() => setIsOpen(false)} text={buttonModal[1].text}/>
              </>}
        />
      </div>
    </BrowserRouter>
  )
}

export default App;