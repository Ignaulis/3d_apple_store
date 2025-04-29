import React, { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";

const ShippingInformation = ({ onNext, shippingInfo, setShippingInfo }) => {
    const { setShowModal, setModalText } = useContext(ShopContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        let processedValue = value;
        if (name === 'phone') {
            processedValue = value.replace(/[^\d+]/g, '');
        }
        setShippingInfo(prevInfo => ({
            ...prevInfo,
            [name]: processedValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!shippingInfo.firstName) {
            setModalText('Please enter your first name.');
            setShowModal(true);
            return;
        }
        if (!shippingInfo.lastName) {
            setModalText('Please enter your last name.');
            setShowModal(true);
            return;
        }
        if (!isValidEmail(shippingInfo.email)) {
            setModalText('Please enter a valid email address.');
            setShowModal(true);
            return;
        }
        if (shippingInfo.phone && !isValidPhoneNumber(shippingInfo.phone)) {
            setModalText('Phone number can only contain numbers.');
            setShowModal(true);
            return;
        }
        if (!shippingInfo.country) {
            setModalText('Please enter your country.');
            setShowModal(true);
            return;
        }
        if (!shippingInfo.city) {
            setModalText('Please enter your city.');
            setShowModal(true);
            return;
        }
        if (!shippingInfo.postalCode) {
            setModalText('Please enter your postal code.');
            setShowModal(true);
            return;
        }
        if (!shippingInfo.addressLine1) {
            setModalText('Please enter your address.');
            setShowModal(true);
            return;
        }
        console.log('Shipping Info:', shippingInfo);
        onNext();
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^[0-9]*$/;
        return phoneRegex.test(phone);
    };

    return (
        <div className="w-full flex flex-col items-center mx-1">
            <h2 className="text-3xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4 w-2/3 md:w-1/2">
                <div>
                    <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="postalCode" className="block text-gray-700 text-sm font-bold mb-2">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="addressLine1" className="block text-gray-700 text-sm font-bold mb-2">Address Line 1</label>
                    <input
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        value={shippingInfo.addressLine1}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="addressLine2" className="block text-gray-700 text-sm font-bold mb-2">Address Line 2 (optional)</label>
                    <input
                        type="text"
                        id="addressLine2"
                        name="addressLine2"
                        value={shippingInfo.addressLine2}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                >
                    Continue to Payment
                </button>
            </form>
        </div>
    );
};

export default ShippingInformation;
