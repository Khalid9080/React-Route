import PropTypes from 'prop-types';
import { CiCircleCheck } from "react-icons/ci";

const Featurs = ({feature}) => {
    return (
        <div className='items-center text-center justify-center'>
            <p><CiCircleCheck className='ml-16 ' /> {feature}</p>
        </div>
    );
};
Featurs.propTypes = {
    feature: PropTypes.string.isRequired
}
export default Featurs;