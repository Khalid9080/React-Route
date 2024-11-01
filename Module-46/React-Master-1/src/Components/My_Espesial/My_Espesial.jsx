import { AssetContext } from "../Grandpa_Form/Grandpa_Form";
import { useContext } from "react";


const My_Espesial = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>has : {asset}</p>
            <p>Also has : {gift} </p>
        </div>
    );
};

export default My_Espesial;