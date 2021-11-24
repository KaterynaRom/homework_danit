import React, {PureComponent} from "react";
import styles from './CardsContainer.scss'
import Card from "../Card/Card";

class CardsContainer extends PureComponent {
  render() {
    const {products} = this.props;
    // addItem, toggleFav

    return (
      <section className={styles.cardsContainer}>
        <h1 className={styles.title}>grocery store</h1>
        <div className={styles.container}>
          {products && products.map(product =>
            <Card key={product.name} name={product.name} price={product.price} img={product.img}
                  color={product.color} code={product.code}
          // addItem={addItem} toggleFav={toggleFav}
          />)}
        </div>
      </section>
    )
  }
}

export default CardsContainer;