/* modules */
import React, { Component } from 'react'

/* components */
import Spinner from '../spinner/spinner.component'

interface SpinnerProps {
  isLoading: Boolean
  [key: string]: any
}

const WithSpinner = (WrappedComponent: typeof Component) => ({
  isLoading,
  ...otherProps
}: SpinnerProps): JSX.Element => {
  return isLoading ? <Spinner></Spinner> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
