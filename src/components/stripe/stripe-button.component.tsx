import React from "react"
import StripeCheckout from "react-stripe-checkout"

interface StripeCheckoutButtonProps {
  price: number
}

interface token {
  card: any
  client_ip: string
  created: number
  email: string
  id: string
  livemode: boolean
  object: string
  type: string
  used: boolean
}

const StripeCheckoutButton = ({
  price
}: StripeCheckoutButtonProps): JSX.Element => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_Bh7isiPZWQD9oNPnCObg8iqE00qUmRi4VF"

  // pass to backend later
  const onToken = (token: token): void => {
    console.log(token)
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Banksy Trading Co.'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
