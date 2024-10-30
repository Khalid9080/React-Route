

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Client = ({client}) => {
    const {id,name,email,phone}=client;
    const clientStyle={
        border: '2px solid yellow',
        borderRadius:'10px',
        margin:'5px',
        padding:'5px',
    }
    
    return (
        <div style={clientStyle}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <Link to={`/client/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

Client.propTypes = {
    client:PropTypes.object.isRequired
}
Link
export default Client;