import React from "react";
import styles from "./HomePage.module.scss";
import Card from "../../components/Card/Card";
import PropTypes from "prop-types";
import {logDOM} from "@testing-library/react";

const HomePage = (props) => {
  const { products, openModal, toggleFav } = props;
  return (
    <div>
      <h1>Home  Page</h1>
      <div className={styles.wrapper}>
        <div className={styles.cardsContainer}>
          {products && products.map(product =>
            <Card toggleFav={toggleFav} openModal={openModal} key={product.code} name={product.name} price={product.price} img={product.img}
                  color={product.color} code={product.code} isFavourite={product.isFavourite}
            />)}
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {
  products: PropTypes.array,
}

HomePage.defaultProps = {
  products: [],
}

export default HomePage;