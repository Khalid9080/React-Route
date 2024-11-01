import { useContext } from "react";
import { AssetContext } from "../Grandpa_Form/Grandpa_Form";


const Sister = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Sister</h2>
            <p>has : {gift}</p>
        </div>
    )
}

export default Sister;