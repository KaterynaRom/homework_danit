import React from 'react';
import styles from './CardsContainer.module.scss'
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardsContainer = (props) => {
    const {products} = props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.cardsContainer}>
          {products && products.map(product =>
            <Card key={product.code} name={product.name} price={product.price} img={product.img}
                  color={product.color} code={product.code}
            />)}
        </div>
      </div>

    )
}

CardsContainer.propTypes = {
  products: PropTypes.array,
}

CardsContainer.defaultProps = {
  products: [],
}

export default CardsContainer;
