


import { useState } from 'react';

const State_Form = () => {
    const [email, setEmail] = useState(null); // State for email
    const [password, setPassword] = useState(null); // State for password
    const [name, setName] = useState(null); // State for name
    const [phone, setPhone] = useState(null); // State for phone
    const [error, setError] = useState(''); // State for error messages

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password && password.length < 6) {
            setError("Password should be at least 6 characters long");
        } else {
            setError('');
            console.log(name, email, password, phone);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start gap-3 mt-10">
                    <input onChange={handleNameChange} type="text" name="name" className="input input-bordered w-full max-w-xs" placeholder="Enter your name"/>
                    <input onChange={handleEmailChange} type="email" name="email" className="input input-bordered w-full max-w-xs" placeholder="Enter your email"/>
                    <input onChange={handlePasswordChange} type="password" name="password" className="input input-bordered w-full max-w-xs" placeholder="Enter your password"/>
                    <input onChange={handlePhoneChange} type="number" name="phone" className="input input-bordered w-full max-w-xs" placeholder="Enter your phone number"/>
                    <input type="submit" value="Submit" className="btn"/>

                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default State_Form;
