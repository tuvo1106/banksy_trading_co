import React from "react"
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles"

const WithSpinner = (WrappedComponent: any): Function => {
  const Spinner = ({ isLoading, ...otherProps }: any): JSX.Element => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
