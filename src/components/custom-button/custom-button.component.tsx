/* modules */
import React from "react"

/* styles */
import "./custom-button.styles.scss"

interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  children: string
  isGoogleSignIn?: boolean
  inverted?: boolean
  onClick?: (event: any) => void
}

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: CustomButtonProps) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}>
    {children}
  </button>
)

export default CustomButton
