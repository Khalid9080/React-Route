import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Ops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && (
                    <><p>Page not found</p>
                        <Link to="/"><button>Home</button></Link>
                    </>)
            }
        </div>

    );

};

export default ErrorPage;