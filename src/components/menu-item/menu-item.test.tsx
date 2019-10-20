/* modules */
import React from "react"
import { shallow, configure, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { MenuItem } from "./menu-item.component"

configure({ adapter: new Adapter() })

describe("MenuItem component", () => {
  let wrapper: ShallowWrapper
  let mockMatch: {
    url: string
  }
  let mockHistory: {
    push: Function
  }
  const linkUrl = "/hats"
  const size = "large"
  const imageUrl = "testimage"

  beforeEach(() => {
    mockMatch = {
      url: "/shop"
    }

    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: "watches",
      imageUrl
    }

    wrapper = shallow(<MenuItem {...mockProps} />)
  })

  it("should render MenuItem component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call history.push with the right string when menu item is clicked", () => {
    wrapper.find(".menu-item").simulate("click")

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`)
  })

  it("should pass size to menu item as the prop size", () => {
    expect(wrapper.hasClass("large")).toBe(true)
  })
})
