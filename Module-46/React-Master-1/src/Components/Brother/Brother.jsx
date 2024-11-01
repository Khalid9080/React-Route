import { useContext } from "react";
import { MoneyContext } from "../Grandpa_Form/Grandpa_Form";


const Brother = () => {
    const money = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>has : {money}</p>
        </div>
    )
}

export default Brother;