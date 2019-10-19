/* modules */
import React from "react"
import { configure, shallow, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CartIcon } from "./cart-icon.component"

configure({ adapter: new Adapter() })

describe("CartIcon component", () => {
  let wrapper: ShallowWrapper
  let mockToggleCartHidden: (event: any) => void

  beforeEach(() => {
    mockToggleCartHidden = jest.fn()
    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    }

    wrapper = shallow(<CartIcon {...mockProps} />)
  })

  it("should render CartIcon component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call toggleCartHidden when icon is clicked", () => {
    wrapper.find(".cart-icon").simulate("click")
    expect(mockToggleCartHidden).toHaveBeenCalled()
  })

  it("should render the item count as the text", () => {
    const itemCount = parseInt(wrapper.find(".item-count").text())
    expect(itemCount).toBe(0)
  })
})
