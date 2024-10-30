import { useEffect, useState } from "react";
import axios from "axios";

import { BarChart, Bar, XAxis,YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')

        // Amar caile data gulo fetch kore nijeder moto data bacai kore show korte pari.

        .then(mobileData => {
            const phoneData=mobileData.data.data;
            const mobiles=phoneData.map(phone=>
            {
                /*
                    "slug": "apple_iphone_se_(2020)-10170", etake split korle ["apple", "iphone", "se", "(2020)", "10170"] asbe
                */
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                return obj;
            }
            )
            console.log(mobiles);
            setPhones(mobiles);
        });
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phone Quantity: {phones.length} </h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis  dataKey="name" ></XAxis>
          <YAxis ></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;
