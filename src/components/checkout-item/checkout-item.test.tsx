/* modules */
import React from "react"
import { configure, shallow, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CheckoutItem } from "./checkout-item.component"

/* interfaces */
import { cartAction } from "../../interfaces/cart"

configure({ adapter: new Adapter() })

describe("CheckoutItem component", () => {
  let wrapper: ShallowWrapper
  let mockClearItem: cartAction
  let mockAddItem: cartAction
  let mockRemoveItem: cartAction

  beforeEach(() => {
    mockClearItem = jest.fn()
    mockAddItem = jest.fn()
    mockRemoveItem = jest.fn()

    const mockProps = {
      cartItem: {
        id: 1,
        imageUrl: "www.test.com",
        price: 1,
        name: "test",
        quantity: 1
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    }

    wrapper = shallow(<CheckoutItem {...mockProps} />)
  })

  it("should render CheckoutItem component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call clearItem when remove button is clicked", () => {
    wrapper.find(".remove-button").simulate("click")
    expect(mockClearItem).toHaveBeenCalled()
  })

  it("should call removeItem when left arrow is clicked", () => {
    wrapper.find(".remove-item").simulate("click")

    expect(mockRemoveItem).toHaveBeenCalled()
  })

  it("should call addItem when right arrow is clicked", () => {
    wrapper.find(".add-item").simulate("click")

    expect(mockAddItem).toHaveBeenCalled()
  })
})
