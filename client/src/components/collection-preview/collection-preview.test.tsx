/* modules */
import React from "react"
import { configure, shallow, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CollectionPreview } from "./collection-preview.component"

configure({ adapter: new Adapter() })

describe("CollectionPreview component", () => {
  let wrapper: ShallowWrapper
  let mockMatch: {
    path: string
  }
  let mockHistory
  const mockRouteName = "watches"

  beforeEach(() => {
    mockMatch = {
      path: "/shop"
    }

    mockHistory = {
      push: jest.fn()
    }

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: "test",
      items: []
    }

    wrapper = shallow(<CollectionPreview {...mockProps} />)
  })

  it("should render CollectionPreview component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call history.push with the right string when title class clicked", () => {
    wrapper.find(".title").simulate("click")

    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    )
  })
})
