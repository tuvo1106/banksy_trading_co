/* modules */
import React from "react"
import { configure, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { CollectionsOverview } from "./collections-overview.component"

configure({ adapter: new Adapter() })

it("should render CollectionsOverview component", () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot()
})
