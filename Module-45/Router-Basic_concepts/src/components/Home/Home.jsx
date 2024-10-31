import { Outlet, useNavigate,useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Home = () => {
    const navigation = useNavigate();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
           {/* <h1>This is Home Page</h1>  */}

           {
            navigation.state === "loading" ? <p>Loading...</p> : <Outlet />
           }
            
           {/*   <Outlet /> --> er moddhe home er shokol route thakbe  */}

            <Footer></Footer>
        </div>
    );
};

export default Home;
