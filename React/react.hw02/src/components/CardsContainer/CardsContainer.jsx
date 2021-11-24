import React, {PureComponent} from "react";
import styles from './CardsContainer.module.scss'
import Card from "../Card/Card";

class CardsContainer extends PureComponent {

  render() {
    const {products} = this.props;
    // addItem, toggleFav

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>grocery store</h1>
        <div className={styles.cardsContainer}>
          {products && products.map(product =>
            <Card key={product.code} name={product.name} price={product.price} img={product.img}
                  color={product.color} code={product.code}
              // addItem={addItem} toggleFav={toggleFav}
            />)}
        </div>
      </div>

    )
  }
}

export default CardsContainer;
