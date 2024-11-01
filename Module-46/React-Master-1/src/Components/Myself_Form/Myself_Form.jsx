import My_Espesial from "../My_Espesial/My_Espesial";


const Myself_Form = ({asset}) => {
    return (
        <div>
            <h2>Me</h2>

            <section className="flex">
                <My_Espesial asset={asset}></My_Espesial>
            </section>
        </div>
    );
};

export default Myself_Form;