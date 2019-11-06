/* modules */
import React from 'react'
import { shallow, configure, ShallowWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* components */
import FormInput from './form-input.component'

configure({ adapter: new Adapter() })

describe('FormInput component', () => {
  let wrapper: ShallowWrapper
  let mockHandleChange: (event: any) => void

  beforeEach(() => {
    mockHandleChange = jest.fn()

    const mockProps = {
      name: 'test',
      type: 'test',
      label: 'exists',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    }

    wrapper = shallow(<FormInput {...mockProps} />)
  })

  it('should render FormInput component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleChange method when input changes', () => {
    wrapper.find('.form-input').simulate('change')

    expect(mockHandleChange).toHaveBeenCalled()
  })

  it('should render form input label class if there is a label', () => {
    expect(wrapper.exists('.form-input-label')).toBe(true)
  })

  it('should not render form input label class if there is no label', () => {
    const mockNewProps = {
      name: 'test',
      type: 'test',
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    }

    const newWrapper = shallow(<FormInput {...mockNewProps} />)

    expect(newWrapper.exists('.form-input-label')).toBe(false)
  })
})
