"use client"
import React,{ useState } from "react";
import InputComponent from "../../../components/InputComponent";
import AuthClass from "../../../authClass";


export default function Log() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const onChangeForm = (key, value) => {
        setForm({
            ...form,
            [key]: value,
        });
    }
    const onSendForm= async() =>{
        try {console.log(form)
            if (form.password !== form.confirmPassword) {
                return;
            }
            await AuthClass.register(form)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
<div className="columns is-centered">
    <div className="column is-6">
        <InputComponent
        placeholder="Name"
        value={form.name}
        label="Name:"
        onChange={(v)=> onChangeForm('name',v)}
        />
        <InputComponent
        type="email"
        placeholder="Correo@putita.sex"
        value={form.email}
        label="Email:"
        onChange={(v)=> onChangeForm('email',v)}
        />
        <InputComponent
        type="password"
        placeholder="Password"
        value={form.password}
        label="Password:"
        onChange={(v)=> onChangeForm('password',v)}
        />
        <InputComponent
        type="password"
        placeholder="Confirm password"
        value={form.confirmPassword}
        label="Confirm password:"
        onChange={(v)=> onChangeForm('confirmPassword',v)}
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
            <button onClick={onSendForm} className="button is-link is-fullwidth">Submit</button>
        </div>
    </div>
</div>


    );
}