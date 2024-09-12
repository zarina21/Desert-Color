"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importar el hook useRouter
import InputComponent from "../../../components/InputComponent";
import AuthClass from "../../../authClass"; // Importa tu clase de autenticación

export default function Log() {
    const router = useRouter(); // Inicializar el router
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(''); // Estado para mostrar errores

    const onChangeForm = (key, value) => {
        setForm({
            ...form,
            [key]: value,
        });
    }

    const onSendForm = async () => {
        setError(''); // Limpiar error previo
        try {
            await AuthClass.login(form); // Intentar iniciar sesión
            router.push('/'); // Redirigir a la página de Home al iniciar sesión exitosamente
        } catch (e) {
            setError("Invalid email or password. Please try again."); // Mostrar mensaje de error
        }
    };

    return (
        <div className="columns is-centered">
            <div className="column is-6">
                <InputComponent
                    value={form.email}
                    label="Email:"
                    onChange={(v) => onChangeForm('email', v)}
                />
                <InputComponent
                    type="password"
                    value={form.password}
                    label="Password:"
                    onChange={(v) => onChangeForm('password', v)}
                />
                {error && <p className="has-text-danger">{error}</p>} {/* Mostrar mensaje de error */}
                <div className="field is-grouped">
                    <button className="button is-link is-fullwidth" onClick={onSendForm}>Submit</button>
                </div>
            </div>
        </div>
    );
}
