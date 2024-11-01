import Cousine from "../Cousine/Cousine";
import { useContext } from "react";
import { MoneyContext } from "../Grandpa_Form/Grandpa_Form";

const Aunty_Form = () => {
    const[money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>

            <section className="flex">
                <Cousine name={'Mamshad'}></Cousine>
                <Cousine name={'Rubaiya'}></Cousine>
            </section>

            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money+1000) }> Add 1000 tk</button>
        </div>
    );
};

export default Aunty_Form;