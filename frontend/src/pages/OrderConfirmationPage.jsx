import React from 'react'

const checkout = {
    _id: "12323",
    status: "processing", // can be 'reported', 'processing', 'accepted', 'rejected'
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Scaler DSA in Java, DBMS, OS, CN Low and High Level System Design",
            reward: "100₹ - 500₹",
            submits: 0,
            brand: "Scaler",
            image: [
                {
                    url: "https://system32.ink/attachments/1736586223189-webp.178/",
                    altText: "Scaler DSA and Algo course",
                },
            ],
        },   
    ],
    reportInfo: {
        link: "https://system32.ink/threads/scaler-academy-full-stack-advanced-course.387/",
        resourcesLink: "drive.google.com",
        description: "This website contains your product illegally",
        upiId: "abc@sbi"
    }
}

const statusStages = [
    { id: 1, name: 'Reported', status: 'reported' },
    { id: 2, name: 'Processing', status: 'processing' },
    { id: 3, name: 'Rejected/Accepted', status: 'completed' },
]

const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
}

const getStatusIndex = (status) => {
    switch (status) {
        case 'reported': return 0
        case 'processing': return 1
        case 'accepted':
        case 'rejected': return 2
        default: return 0
    }
}

const ProgressBar = ({ currentStatus }) => {
    const currentIndex = getStatusIndex(currentStatus)
    
    return (
        <div className="w-full mb-8">
            <div className="flex justify-between items-center relative">
                {statusStages.map((stage, index) => (
                    <React.Fragment key={stage.id}>
                        <div className="flex flex-col items-center z-10">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                                ${index <= currentIndex ? 'bg-emerald-600' : 'bg-gray-300'}`}>
                                {index < currentIndex ? (
                                    <span className="text-white">✓</span>
                                ) : index === currentIndex ? (
                                    <span className="text-white">{index + 1}</span>
                                ) : (
                                    <span className="text-gray-600">{index + 1}</span>
                                )}
                            </div>
                            <span className={`text-sm mt-2 ${index <= currentIndex ? 'text-emerald-600' : 'text-gray-400'}`}>
                                {stage.name}
                            </span>
                            {currentStatus === 'rejected' && index === 2 && (
                                <span className="text-red-600 text-sm">✕</span>
                            )}
                            {currentStatus === 'accepted' && index === 2 && (
                                <span className="text-emerald-600 text-sm">✓</span>
                            )}
                        </div>
                        {index < statusStages.length - 1 && (
                            <div className={`absolute top-4 left-1/4 right-1/4 h-1 
                                ${index < currentIndex ? 'bg-emerald-600' : 'bg-gray-300'}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            
            <div className="mt-4 text-center">
                <p className="text-emerald-600 font-semibold">
                    {currentStatus === 'reported' && 'Report submitted successfully!'}
                    {currentStatus === 'processing' && 'Your report is under processing'}
                    {currentStatus === 'accepted' && 'Report accepted! Reward will be processed soon'}
                    {currentStatus === 'rejected' && 'Report rejected. Please check submission guidelines'}
                </p>
            </div>
        </div>
    )
}

const OrderConfirmationPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
            Thanks for Helping Us To Protect Content
        </h1>
        {checkout && (
            <div className='p-6 rounded-lg border'>
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="text-xl font-semibold">
                            Report ID: {checkout._id}
                        </h2>
                        <p className="text-gray-500">
                            Report date: {new Date(checkout.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div>
                        <p className='text-emerald-700 text-sm'>
                            Estimated Confirmation: {calculateEstimatedDelivery(checkout.createdAt)}
                        </p>
                    </div>
                </div>

                <ProgressBar currentStatus={checkout.status} />

                <div className='mb-20'>
                    {checkout.checkoutItems.map((item) => (
                        <div key={item.productId} className="flex items-center mb-4">
                            <img 
                                src={item.image[0]?.url} 
                                alt={item.name} 
                                className="w-16 h-16 object-cover rounded-md mr-4" 
                            />
                            <div className="max-w-xs">
                                <h4 className="text-md font-semibold whitespace-normal break-words">
                                    {item.name}
                                </h4>
                            </div>
                            <div className='ml-auto text-right'>
                                <p className='text-md'>{item.reward}</p>
                                <p className="text-sm text-gray-500">Submitted: {item.submits}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  )
}

export default OrderConfirmationPage