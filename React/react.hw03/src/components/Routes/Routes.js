import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import FavouritePage from "../../pages/FavouritePage";

const Routes = (props) => {
  const { products, openModal, cart, toggleFav, isFavourite } = props;

  return (
    <Switch>
      <Route exact path = '/'>
        <HomePage isFavourite={isFavourite} toggleFav={toggleFav} openModal={openModal} products={ products } />
      </Route>

      <Route exact path='/cart'>
        <CartPage cart={cart} openModal={openModal} products={ products }/>
      </Route>

      <Route exact path='/favourite'>
        <FavouritePage/>
      </Route>
    </Switch>
  )

}
export default Routes;