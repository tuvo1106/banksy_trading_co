/* modules */
import React from "react"
import { shallow, configure, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CheckoutPage } from "./checkout.component"

configure({ adapter: new Adapter() })

let wrapper: ShallowWrapper
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  }

  wrapper = shallow(<CheckoutPage {...mockProps} />)
})

it("should render CheckoutPage component", () => {
  expect(wrapper).toMatchSnapshot()
})
