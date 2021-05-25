import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Iul4CFAv8Dv4lqVAuYGglfcbCuj2wlm4k8ZmrP7rlkneUVhCowcV8PlKvWf4zpj4yFODLBa7DujXZ8RVZI17EEW00nyelxTNG";

const onToken = token => {
    console.log('token', token);
    alert('Payment Successful')
}
    return (
        <StripeCheckout
        name= 'Au Cozyhome pty ltd'
        label='Pay Now'
        billingAddress
        shippingAddress
        image='https://cozyhomeforrent.com/wp-content/uploads/2020/04/CozyHome-Logo-V.2.0-Green.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;