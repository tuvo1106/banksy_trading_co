/* modules */
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

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
  const publishableKey = 'pk_test_Bh7isiPZWQD9oNPnCObg8iqE00qUmRi4VF'

  const onToken = (token: token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful')
      })
      .catch(error => {
        console.log('Payment error: ' + error)
        alert('There was am issue with your payment.')
      })
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Banksy Trading Co."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
