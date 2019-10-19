/* modules */
import React from "react"
import { shallow, ShallowWrapper } from "enzyme"

/* components */
import { CartDropdown } from "./cart-dropdown.component"
import CartItem from "../cart-item/cart-item.component"

/* actions */
import { toggleCartHidden } from "../../redux/cart/cart.actions"

describe("CartDropdown component", () => {
  let wrapper: ShallowWrapper
  let mockHistory: {
    push: Function
  }
  let mockDispatch: Function
  const mockCartItems = [
    { id: 1, name: "a", imageUrl: "test1", price: 1, quantity: 1 },
    { id: 2, name: "b", imageUrl: "test2", price: 2, quantity: 2 },
    { id: 3, name: "c", imageUrl: "test3", price: 3, quantity: 3 }
  ]

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    }

    mockDispatch = jest.fn()

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    }

    wrapper = shallow(<CartDropdown {...mockProps} />)
  })

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call history.push when button is clicked", () => {
    wrapper.find("CustomButton").simulate("click")
    expect(mockHistory.push).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden())
  })

  it("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
  })

  it("should render empty-message if cartItems is empty", () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    }

    const newWrapper = shallow(<CartDropdown {...mockProps} />)
    expect(newWrapper.exists(".empty-message")).toBe(true)
  })
})
