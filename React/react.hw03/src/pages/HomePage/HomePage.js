import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <h1>Home  Page</h1>
      <CardsContainer products={products}/>
    </div>
  )
}

export default HomePage;