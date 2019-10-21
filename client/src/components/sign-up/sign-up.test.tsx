/* modules */
import React from "react"
import { shallow, configure, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { SignUp } from "./sign-up.component"

configure({ adapter: new Adapter() })

describe("SignUp component", () => {
  let wrapper: ShallowWrapper
  let mockSignUpStart: Function

  beforeEach(() => {
    mockSignUpStart = jest.fn()

    const mockProps = {
      signUpStart: mockSignUpStart
    }

    wrapper = shallow(<SignUp {...mockProps} />)
  })

  it("should render SignUp component", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
