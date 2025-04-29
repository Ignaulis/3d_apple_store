import React, { useState, useContext } from 'react';
import { ShopContext } from '../../../Context/ShopContext';

const PaymentInformation = ({ onNext, onPrevious, cardDetails, setCardDetails, paymentMethod, setPaymentMethod }) => {
    const { setShowModal, setModalText } = useContext(ShopContext);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCardNumberChange = (event) => {
        let { value } = event.target;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
        setCardDetails(prevDetails => ({
            ...prevDetails,
            cardNumber: value,
        }));
    };

    const handleExpiryDateChange = (event) => {
        let { value } = event.target;
        value = value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        value = value.slice(0, 5);
        setCardDetails(prevDetails => ({
            ...prevDetails,
            expiryDate: value,
        }));
    };

    const handleCVVChange = (event) => {
        let { value } = event.target;
        value = value.replace(/\D/g, '').slice(0, 3);
        setCardDetails(prevDetails => ({
            ...prevDetails,
            cvv: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (paymentMethod === '') {
            setModalText('Please select a payment method.');
            setShowModal(true);
            return;
        }
        if (paymentMethod === 'creditCard') {
            if (!cardDetails.cardNumber) {
                setModalText('Please enter your card number.');
                setShowModal(true);
                return;
            }
            if (cardDetails.cardNumber.replace(/\D/g, '').length < 12 || cardDetails.cardNumber.replace(/\D/g, '').length > 16) {
                setModalText('Please enter a valid card number (12-16 digits).');
                setShowModal(true);
                return;
            }
            if (!cardDetails.expiryDate || cardDetails.expiryDate.length !== 5 || !/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
                setModalText('Please enter the expiry date in MM/YY format.');
                setShowModal(true);
                return;
            }
            const [month, year] = cardDetails.expiryDate.split('/');
            const currentYear = new Date().getFullYear() % 100;
            const currentMonth = new Date().getMonth() + 1;
            const parsedMonth = parseInt(month, 10);
            const parsedYear = parseInt(year, 10);
            if (parsedYear < currentYear || (parsedYear === currentYear && parsedMonth < currentMonth)) {
                setModalText('Please enter a valid expiry date.');
                setShowModal(true);
                return;
            }
            if (!cardDetails.cvv || cardDetails.cvv.length !== 3 || !/^\d{3}$/.test(cardDetails.cvv)) {
                setModalText('Please enter a valid 3-digit CVV code.');
                setShowModal(true);
                return;
            }
        }
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
                                onChange={handleCardNumberChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                    onChange={handleExpiryDateChange}
                                    placeholder="MM/YY"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={cardDetails.cvv}
                                    onChange={handleCVVChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between mt-6 flex-wrap">
                    <button
                        type="button"
                        onClick={onPrevious}
                        className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    >
                        Back to Shipping
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    >
                        Continue to Confirmation
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentInformation;