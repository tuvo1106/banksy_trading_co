/* modules */
import React from "react"
import { shallow, configure, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { SignIn } from "./sign-in.component"

configure({ adapter: new Adapter() })

describe("FormInput component", () => {
  let wrapper: ShallowWrapper
  let mockGoogleSignInStart: (event: any) => void
  let mockEmailSignInStart: Function

  beforeEach(() => {
    mockGoogleSignInStart = jest.fn()
    mockEmailSignInStart = jest.fn()

    const mockProps = {
      googleSignInStart: mockGoogleSignInStart,
      emailSignInStart: mockEmailSignInStart
    }

    wrapper = shallow(<SignIn {...mockProps} />)
  })

  it("should render CustomButton component", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
