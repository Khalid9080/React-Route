
import Brother from "../Brother/Brother";
import Myself_Form from "../Myself_Form/Myself_Form";
import Sister from "../Sister/Sister";
import './Dad_Form.css';

const Dad_Form = ({asset}) => {
    return (
        <div >
            <h2>Baba</h2>
            <section className="dad-form">
                <Myself_Form asset={asset}></Myself_Form>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad_Form;