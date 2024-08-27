"use client"
import InputComponent from "../../../components/InputComponent";

export default function Log() {
    return (

<div className="columns is-centered">
    <div className="column is-6">
        <InputComponent
        value={'Email@example.com'}
        label="Email:"
        onChange={()=> null}
        />

        <InputComponent
        value={'Pasword'}
        label="Password:"
        onChange={()=> null}
        />

        <div className="field py-5">
            <div className="control">
                <label className="checkbox">
                <input type="checkbox"/>
                I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>
        <div className="field is-grouped">
            <button className="button is-link is-fullwidth">Submit</button>
        </div>
    </div>
</div>


    );
}