
const PaymentInformation = ({ onNext, onPrevious, cardDetails, setCardDetails, paymentMethod, setPaymentMethod }) => {

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCardDetailsChange = (event) => {
        const { name, value } = event.target;
        setCardDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Payment Method:', paymentMethod);
        console.log('Card Details:', cardDetails);
        onNext();
    };

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4 mx-2">Payment Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mx-2">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Select Payment Method</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="creditCard"
                            name="paymentMethod"
                            value="creditCard"
                            checked={paymentMethod === 'creditCard'}
                            onChange={handlePaymentMethodChange}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="creditCard" className="text-gray-700 text-sm">Credit Card</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            id="paypal"
                            name="paymentMethod"
                            value="paypal"
                            checked={paymentMethod === 'paypal'}
                            onChange={handlePaymentMethodChange}
                            className="mr-2"
                        />
                        <label htmlFor="paypal" className="text-gray-700 text-sm">PayPal (not yet implemented)</label>
                    </div>
                </div>

                {paymentMethod === 'creditCard' && (
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleCardDetailsChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="flex gap-2">
                            <div className="w-1/2">
                                <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={cardDetails.expiryDate}
                                    onChange={handleCardDetailsChange}
                                    placeholder="MM/YY"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={cardDetails.cvv}
                                    onChange={handleCardDetailsChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between mt-6 flex-wrap">
                    <button
                        type="button"
                        onClick={onPrevious}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Back to Shipping
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={
                            paymentMethod === '' ||
                            (paymentMethod === 'creditCard' &&
                                (cardDetails.cardNumber === '' ||
                                cardDetails.expiryDate === '' ||
                                cardDetails.cvv === ''))
                        }
                    >
                        Continue to Confirmation
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentInformation;
