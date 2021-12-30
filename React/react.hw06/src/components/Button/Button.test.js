import Button from "./Button"
import {queryByRole, render} from "@testing-library/react";
const handleClick = jest.fn();

const Component = (props) => (
  <Button {...props}/>)

describe("Button render", () => {
  test("should button render", () => {
    const {asFragment} = render(<Component/>);
    expect(asFragment()).toMatchSnapshot();
  })
})

describe("Button click", () => {
  test("should click on button work", () => {
    const {queryByRole} = render(<Component onClick={handleClick}/>)
    const buttons = queryByRole('button');
    buttons.click();
    expect(handleClick).toBeCalled();
  })
})

