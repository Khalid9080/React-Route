import Dad_Form from "../Dad_Form/Dad_Form";
import Uncle_Form from "../Uncle_Form/Uncle_Form";
import Aunty_Form from "../Aunty_Form/Aunty_Form";
import './Grandpa_Form.css';
import { createContext } from "react";
import { useState } from "react";

// Context api
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa_Form = () => {
    const [money,setMoney] = useState(1000);

    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <h2>Dada - Kamal Box </h2>
            <p>Net money : {money}</p>

            <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value="gold" >
                    <section className="flex">
                        <Dad_Form asset={asset}></Dad_Form>
                        <Uncle_Form></Uncle_Form>
                        <Aunty_Form></Aunty_Form>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>


        </div>
    );
};

export default Grandpa_Form;