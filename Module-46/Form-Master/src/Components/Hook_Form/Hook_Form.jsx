


import useInputState from "../../Custome_Hooks/useInputSate";

const Hook_Form = () => {

    // const [name,handleNameChange] = useInputState('Khalid');
    const emailState = useInputState('Khalid');
    console.log();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data', emailState.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start gap-3 mt-10">
                    {/* defaultValue={ } use kore amra age thekei input field a text boshaite pari */}

                    {/* Custome hook er maddhome ekha theke man pabo */}
                    {/* <input type="text" value={name} onChange={handleNameChange} name="name" className="input input-bordered w-full max-w-xs" placeholder="Enter your name"/> */}

                    <input {...emailState} type="email" name="email" className="input input-bordered w-full max-w-xs" placeholder="Enter your email" />
                    <input type="password" name="password" className="input input-bordered w-full max-w-xs" placeholder="Enter your password" />
                    <input type="number" name="phone" className="input input-bordered w-full max-w-xs" placeholder="Enter your phone number" />
                    <input type="submit" value="Submit" className="btn" />

                    {/* {error && <p className="text-red-500">{error}</p>} */}
                </div>
            </form>
        </div>
    );
};

export default Hook_Form;