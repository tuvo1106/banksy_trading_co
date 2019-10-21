/* modules */
import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { Directory } from "./directory.component"

configure({ adapter: new Adapter() })

it("should render Directory component", () => {
  expect(shallow(<Directory sections={[]} />)).toMatchSnapshot()
})
