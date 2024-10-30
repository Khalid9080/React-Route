

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const client = useLoaderData();
    const {name, email, phone, website} = client;
    return (
        <div>
            <h1>Details about user</h1>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;