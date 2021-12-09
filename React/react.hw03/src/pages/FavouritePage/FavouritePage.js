import React from 'react';
import Card from '../../components/Card/Card';
import styles from '../HomePage/HomePage.module.scss';

const FavouritePage = (props) => {
  const { products, openModal, toggleFav} = props;

  return (
    <div className={styles.wrapper}>
      <h1>Favourite</h1>
      <div className={styles.cardsContainer}>
        {products && products.map(product => {
          if (product.isFavourite) {
            return <Card toggleFav={toggleFav} openModal={openModal} key={product.code} name={product.name}
                         price={product.price} img={product.img} color={product.color} code={product.code}
                         isFavourite={product.isFavourite}/>
          }
        })}
      </div>
    </div>
  )}

export default FavouritePage;