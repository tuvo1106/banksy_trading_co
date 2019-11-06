/* modules */
import React from 'react'

/* styles */
import './form-input.styles.scss'

interface FormInputProps {
  name: string
  type: string
  label: string
  value: string
  required?: boolean
  onChange?: (event: any) => void
  handleChange?: (event: any) => void
}

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: FormInputProps): JSX.Element => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    ></input>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput
