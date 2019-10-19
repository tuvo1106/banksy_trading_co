/* modules */
import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import CartItem from "./cart-item.component"

configure({ adapter: new Adapter() })

it("should render CartItem component", () => {
  const mockItem = {
    id: 1,
    imageUrl: "test",
    price: 1,
    name: "test",
    quantity: 1
  }

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot()
})
