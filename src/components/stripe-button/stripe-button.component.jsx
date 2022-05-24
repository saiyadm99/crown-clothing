import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51L2FrLGdfbcqeRUy9UtUHi68TWXJveYktHX5Me7s03qwnodAVoNCHmlmQIG92uc10ectT6hnNIFYzNdZ7f1HwsS4003EKR7wPU'

	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}

	return(
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;