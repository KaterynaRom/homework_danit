import Modal from './Modal';
import { render } from '@testing-library/react';
import store from "../../appStore";
import {Provider, useDispatch} from "react-redux";
import {setModalParams, setIsOpenModal} from "../../appStore/actionCreators";

const Component = () => {
  const dispatch = useDispatch();

  dispatch(setModalParams('testCode'));
  dispatch(setIsOpenModal(true));

  return (<Modal />)
}

describe("Modal render", () => {
  test("should modal render", ()=> {
    const {asFragment} = render(
      <Provider store={store}>
        <Component/>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
});

