import { useLoaderData } from "react-router-dom";
import Client from "../Client/Client";
import './Clients.css';


const Clients = () => {

    const clients = useLoaderData();
    console.log(clients);

    return (
        //state-->data
        // useEffect() --> loader
        // fetch --> state set --> set state
        // amra useLoaderdata() hook use korbo 
        <div>
            <h2>Our Clients: {clients.length}</h2>
            <p>Fantastic and vodro Clients</p>

            <div className="clients">
                {
                    clients.map((client,id)=><Client key={id} client={client} ></Client>)
                }
            </div>
            
        </div>
    );
};


export default Clients;