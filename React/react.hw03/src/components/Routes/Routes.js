import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import FavouritePage from "../../pages/FavouritePage";

const Routes = (props) => {
  const { products } = props;

  return (
    <Switch>
      <Route exact path = '/'>
        <HomePage products={ products } />
      </Route>

      <Route exact path='/cart'>
        <CartPage/>
      </Route>

      <Route exact path='/favourite'>
        <FavouritePage/>
      </Route>
    </Switch>
  )

}
export default Routes;