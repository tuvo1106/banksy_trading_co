/* modules */
import React, { Component } from "react"

/* styles */
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles"

interface SpinnerProps {
  isLoading: Boolean
  [key: string]: any
}

const WithSpinner = (WrappedComponent: typeof Component): Function => {
  const Spinner = ({ isLoading, ...otherProps }: SpinnerProps): JSX.Element => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
