import { useContext, useState } from 'react';
import CheckoutProgressBar from './CheckoutProgressBar';
import ShippingInformation from './ShippingInformation';
import PaymentInformation from './PaymentInformation';
import ConfirmOrder from './ConfirmOrder';
import { ShopContext } from '../../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const {setOrder} = useContext(ShopContext)
    const [checkoutStage, setCheckoutStage] = useState(1);
    const [shippingInfo, setShippingInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        postalCode: '',
        addressLine1: '',
        addressLine2: '',
    });
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('');

    const nextStage = () => {
        if (checkoutStage < 3) {
            setCheckoutStage(prevStage => prevStage + 1);
        }
    };

    const prevStage = () => {
        if (checkoutStage > 1) {
            setCheckoutStage(prevStage => prevStage - 1);
        }
    };

    const navigate = useNavigate()

    const handleSubmitOrder = () => {
        alert('Approved!');
        setCheckoutStage(1);
        setOrder([])
        navigate('/')
    };

    return (
        <div className="container mx-auto mt-10 mb-10">
            <h1 className="font-bold mb-10 text-4xl mx-2">Checkout</h1>
            <CheckoutProgressBar currentStage={checkoutStage} />

            {checkoutStage === 1 && (
                <div>
                    <ShippingInformation shippingInfo={shippingInfo} setShippingInfo={setShippingInfo} onNext={nextStage} />
                </div>
            )}

            {checkoutStage === 2 && (
                <div>
                    <PaymentInformation paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} cardDetails={cardDetails} setCardDetails={setCardDetails} onNext={nextStage} onPrevious={prevStage} />
                </div>
            )}

            {checkoutStage === 3 && (
                <div>
                    <ConfirmOrder paymentMethod={paymentMethod} shippingInfo={shippingInfo} cardDetails={cardDetails} onPrevious={prevStage} onSubmit={handleSubmitOrder} />
                </div>
            )}
        </div>
    );
}