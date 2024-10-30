
import proptype from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="flex-row m-5 hover:bg-sky-500 p-2 rounded " key={route.id}>
            <a href={route.path}> {route.name}</a></li>
    );
};

Link.propTypes = {
    route: proptype.object.isRequired
};
export default Link;