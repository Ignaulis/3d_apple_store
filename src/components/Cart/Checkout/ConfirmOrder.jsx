import { useContext } from 'react';
import { ShopContext } from '../../../Context/ShopContext';

const ConfirmOrder = ({ onPrevious, onSubmit, shippingInfo, cardDetails, paymentMethod }) => {
    const { order } = useContext(ShopContext);


    const total = order.reduce((sum, item) => sum + item.price, 0);

    const handlePlaceOrder = () => {

        console.log('Order placed!', { order, shippingInfo, paymentMethod });
        onSubmit();
    };

    return (
        <div className='flex flex-col mx-2'>
            <h2 className="text-3xl font-semibold mb-4">Confirm Your Order</h2>

            <div className="mb-6 border p-4 rounded">
                <h3 className="font-semibold mb-2">Shipping Information</h3>
                <p>Name: {shippingInfo.firstName} {shippingInfo.lastName}</p>
                <p>Email: {shippingInfo.email}</p>
                <p>Phone: {shippingInfo.phone}</p>
                <p>Country: {shippingInfo.country}</p>
                <p>City: {shippingInfo.city}, {shippingInfo.postalCode}</p>
                <p>Address: {shippingInfo.addressLine1} {shippingInfo.addressLine2}</p>
            </div>

            <div className="mb-6 border p-4 rounded">
                <h3 className="font-semibold mb-2">Payment Information</h3>
                <p>Payment Method: {paymentMethod}</p>
                {paymentMethod === 'Credit Card' && (
                    <>
                        <p>Card Number: {cardDetails.cardNumber}</p>
                        <p>Expiry Date: {cardDetails.expiryDate}</p>
                    </>
                )}
            </div>

            <div className="mb-6 border p-4 rounded">
                <h3 className="font-semibold mb-2">Ordered Items</h3>
                {order.length > 0 ? (
                    <ul>
                        {order.map((item) => (
                            <li key={item.id} className="flex justify-between py-2 border-b">
                                <span>{item.title}</span>
                                <span>${item.price}</span>
                            </li>
                        ))}
                        <li className="flex justify-between py-2 font-semibold">
                            <span>Total</span>
                            <span>${total}</span>
                        </li>
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={onPrevious}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Back to Payment
                </button>
                <button
                    onClick={handlePlaceOrder}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default ConfirmOrder;
