import Modal from './Modal';
import { render } from '@testing-library/react';
import store from "../../appStore";
import {Provider} from "react-redux";

const Component = () => {

  return (
    <Provider store={store} >
      <Modal />
    </Provider>
  )
}

describe("Modal render", () => {
  test("should modal render", ()=> {
    const {asFragment} = render(<Component/>)
    expect(asFragment()).toMatchSnapshot()
  })
});