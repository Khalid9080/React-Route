

import { useEffect, useRef } from 'react';

const Ref_Form = () => {

    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const phoneRef=useRef(null);

    // eita korle click korar egei cusor dekhabe input field e
    useEffect(()=>{
        nameRef.current.focus();
    },[]);  



    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(phoneRef.current.value);
      
    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start gap-3 mt-10">
                    {/* defaultValue={ } use kore amra age thekei input field a text boshaite pari */}
                    <input ref={nameRef} type="text" defaultValue={'Khalid'} name="name" className="input input-bordered w-full max-w-xs" placeholder="Enter your name"/>
                    <input ref={emailRef} type="email" name="email" className="input input-bordered w-full max-w-xs" placeholder="Enter your email"/>
                    <input ref={passwordRef} type="password" name="password" className="input input-bordered w-full max-w-xs" placeholder="Enter your password"/>
                    <input ref={phoneRef} type="number" name="phone" className="input input-bordered w-full max-w-xs" placeholder="Enter your phone number"/>
                    <input type="submit" value="Submit" className="btn"/>

                    {/* {error && <p className="text-red-500">{error}</p>} */}
                </div>
            </form>
        </div>
    );
};

export default Ref_Form;