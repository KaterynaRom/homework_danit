import React from "react";
import styles from "./HomePage.module.scss";
import Card from "../../components/Card/Card";
import PropTypes from "prop-types";

const HomePage = (props) => {
  const { products, openModal } = props;
  return (
    <div>
      <h1>Home  Page</h1>
      <div className={styles.wrapper}>
        <div className={styles.cardsContainer}>
          {products && products.map(product =>
            <Card openModal={openModal} key={product.code} name={product.name} price={product.price} img={product.img}
                  color={product.color} code={product.code}
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