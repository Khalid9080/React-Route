


const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault(); // Prevents the page from refreshing
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        // console.log("Form Submitted");
    }
    return (
        /*
        - form tag use kore value gulo nie ashbo
        -
        */
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start gap-3  mt-10">
                    <input type="text" name="name"  className="input input-bordered w-full max-w-xs" placeholder="Enter your name"/> 
                    <input type="email" name="email" id=""  className="input input-bordered w-full max-w-xs" placeholder="Enter your email"/> 
                    <input type="number" name="phone" id=""  className="input input-bordered w-full max-w-xs" placeholder="Enter your phone number"/> 

                    <input  type="submit" value="Submit" className="btn" />
                </div>
            </form>
        </div>
    );
};

export default SimpleForm;