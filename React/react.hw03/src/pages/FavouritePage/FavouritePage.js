import React from "react";
import Card from "../../components/Card/Card";
import styles from "../HomePage/HomePage.module.scss";

const FavouritePage = (props) => {
  const {products} = props;

  return (
    <div className={styles.wrapper}>
      <h1>dddddddd</h1>
      <div className={styles.cardsContainer}>
        {products && products.map(product =>
          <Card key={product.code} name={product.name} price={product.price} img={product.img}
                color={product.color} code={product.code}
          />)}
      </div>
    </div>

  )

}

export default FavouritePage;