import Button from "./Button"
import {queryAllByRole, render} from "@testing-library/react";
const handleClick = jest.fn();

const Component = (props) => (
  <Button {...props}/>)

describe("Button render", () => {
  test("should button render", ()=> {
    const {asFragment} = render(<Component/>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Button click", () => {
  test("should click on button work", () => {
    const {queryAllByRole} = render(<Component onClick={handleClick}/>)
    const buttons = queryAllByRole('button');
    console.log('buttons', buttons)
    // buttons.click();
    // expect(handleClick).toBeCalled();
  })
})

