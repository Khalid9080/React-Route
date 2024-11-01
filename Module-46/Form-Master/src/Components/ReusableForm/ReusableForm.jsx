
import PropTypes from 'prop-types';

const ReusableForm = ({submitBtnText = 'Submit', handleSubmit, children }) => { //formTitle


    const handleLocalSubmit = e => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            {children}
            {/* <h2 className="text-2xl font-bold mt-8">Sign up Form: {formTitle}</h2> */}
            <form onSubmit={handleLocalSubmit}>
                <div className="flex flex-col items-start gap-3 mt-10">
                    <input type="text" name="name" className="input input-bordered w-full max-w-xs" placeholder="Enter your name" />
                    <input type="email" name="email" className="input input-bordered w-full max-w-xs" placeholder="Enter your email" />
                    <input type="number" name="phone" className="input input-bordered w-full max-w-xs" placeholder="Enter your phone number" />
                    <input type="password" name="password" className="input input-bordered w-full max-w-xs" placeholder="Enter your password" /> {/* Add this line */}
                    <input type="submit" value={submitBtnText} className="btn" />
                </div>
            </form>
        </div>

    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.node
}

export default ReusableForm;