/* modules */
import React from "react"
import { shallow, configure, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CollectionPage } from "./collection.component"
import CollectionItem from "../../components/collection-item/collection-item.component"

configure({ adapter: new Adapter() })

describe("CollectionPage", () => {
  let wrapper: ShallowWrapper
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }]
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: "Test"
    }

    wrapper = shallow(<CollectionPage collection={mockCollection} />)
  })

  it("should render the CollectionPage component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should render the same number of CollectionItems as collection array", () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length)
  })
})
