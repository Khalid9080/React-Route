import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const Home = () => {
    return (
        <div>
            <Header></Header>
           {/* <h1>This is Home Page</h1>  */}
           <Outlet /> 
           {/*   <Outlet /> --> er moddhe home er shokol route thakbe  */}

            <Footer></Footer>
        </div>
    );
};

export default Home;
