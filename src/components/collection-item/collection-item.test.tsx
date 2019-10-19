/* modules */
import React from "react"
import { configure, shallow, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CollectionItem } from "./collection-item.component"

/* interfaces */
import { cartAction } from "../../interfaces/cart"

configure({ adapter: new Adapter() })

describe("CollectionItem component", () => {
  let wrapper: ShallowWrapper
  let mockAddItem: cartAction
  const imageUrl = "www.test.com"
  const mockName = "test"
  const mockPrice = 1

  beforeEach(() => {
    mockAddItem = jest.fn()

    const mockProps = {
      item: {
        id: 1,
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    }

    wrapper = shallow(<CollectionItem {...mockProps} />)
  })

  it("should render CollectionItem component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call addItem when AddButton clicked", () => {
    wrapper.find("CustomButton").simulate("click")

    expect(mockAddItem).toHaveBeenCalled()
  })

  it("should render name prop in NameContainer", () => {
    expect(wrapper.find(".name").text()).toBe(mockName)
  })

  it("should render price prop in PriceContainer", () => {
    const price = parseInt(wrapper.find(".price").text())
    expect(price).toBe(mockPrice)
  })
})
