const CheckoutProgressBar = ({ currentStage }) => {
    const stages = [
        { id: 1, label: 'Delivery Information' },
        { id: 2, label: 'Payment Method' },
        { id: 3, label: 'Order Confirmation' },
    ];
    
    return (
        <div className="w-full flex items-center justify-between mb-10 mx-2">
            {stages.map((stage) => (
                <div key={stage.id} className="flex items-center">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            currentStage >= stage.id ? 'bg-blue-500' : 'bg-gray-300 text-gray-600'
                        }`}
                    >
                        {stage.id}
                    </div>
                    {stage.id < stages.length && (
                        <div className={`h-1 flex-grow ${currentStage > stage.id ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    )}
                    <span className={`ml-2 text-sm ${currentStage >= stage.id ? 'text-gray-800 font-semibold' : 'text-gray-600'}`}>
                        {stage.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default CheckoutProgressBar;