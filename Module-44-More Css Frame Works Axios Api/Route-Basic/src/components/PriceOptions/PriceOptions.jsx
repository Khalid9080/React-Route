import Priceoption from "../PriceOption/Priceoption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Gym Membership",
            "features": ["Access to gym equipment", "Locker access"],
            "price": 150
        },
        {
            "id": 2,
            "name": "Standard Gym Membership",
            "features": ["Access to gym equipment", "Locker access", "Group classes"],
            "price": 200
        },
        {
            "id": 3,
            "name": "Premium Gym Membership",
            "features": ["Access to gym equipment", "Locker access", "Personal Trainer", "Nutrition Plan", "Group classes"],
            "price": 300
        },
        {
            "id": 4,
            "name": "Elite Gym Membership",
            "features": ["Access to gym equipment", "Locker access", "Personal Trainer", "Nutrition Plan", "Group classes", "Spa Access", "Swimming pool access"],
            "price": 450
        },
        {
            "id": 5,
            "name": "Ultimate Gym Membership",
            "features": ["Access to gym equipment", "Locker access", "Personal Trainer", "Nutrition Plan", "Group classes", "Spa Access", "Swimming pool access", "Sauna access", "24/7 Gym access"],
            "price": 600
        }
    ];

    return (
        <div>
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid grid-cols-3 gap-5 p-4"> 
                {priceOptions.map(option => (
                    <Priceoption option={option} key={option.id}></Priceoption>
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;
