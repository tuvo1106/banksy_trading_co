/* modules */
import React from "react"
import { shallow, configure, ShallowWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

/* components */
import { Header } from "./header.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

configure({ adapter: new Adapter() })

describe("Header component", () => {
  let wrapper: ShallowWrapper
  let mockSignOutStart: (event: any) => void

  beforeEach(() => {
    mockSignOutStart = jest.fn()

    const mockProps = {
      hidden: true,
      currentUser: {
        id: "1",
        email: "test@gmail.com",
        displayName: "test"
      },
      signOutStart: mockSignOutStart
    }

    wrapper = shallow(<Header {...mockProps} />)
  })

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe("if currentUser is present", () => {
    it("should render sign out link", () => {
      expect(
        wrapper
          .find(".option")
          .at(1)
          .text()
      ).toBe("Sign Out")
    })

    it("should call signOutStart method when link is clicked", () => {
      wrapper
        .find(".option")
        .at(1)
        .simulate("click")

      expect(mockSignOutStart).toHaveBeenCalled()
    })
  })

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      }

      const newWrapper = shallow(<Header {...mockProps} />)

      expect(
        newWrapper
          .find(".option")
          .at(1)
          .text()
      ).toBe("Sign In")
    })
  })

  describe("if hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false)
    })
  })

  describe("if currentUser is null", () => {
    it("should render CartDropdown", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      }

      const newWrapper = shallow(<Header {...mockProps} />)

      expect(newWrapper.exists(CartDropdown)).toBe(true)
    })
  })
})
