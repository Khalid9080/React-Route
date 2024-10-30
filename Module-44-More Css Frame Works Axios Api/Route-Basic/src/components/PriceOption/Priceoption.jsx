import Featurs from '../Features/Featurs';
import PropTypes from 'prop-types';

const Priceoption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=' '>
            <div className='bg-lime-500 space-y-4 rounded-xl'>
                <h2>
                    <span className='text-3xl font-extrabold'>{price}</span>
                    <span>/mon</span>
                </h2>

                <h3 className='font-semibold text-xl'>{name}</h3>
                <div className='gap-0'>
                    {
                        features.map((feature, idx) => <Featurs key={idx} feature={feature} />)
                    }
                </div>

                <button className='bg-sky-500 text-white p-2 rounded w-full font-semibold m-5'>Buy Now</button>

            </div>
        </div>
    );
};

Priceoption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        features: PropTypes.array.isRequired
    }).isRequired
}

export default Priceoption;
