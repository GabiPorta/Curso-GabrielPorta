import React, { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/contactoPage.css'

const ContactoPage = (props) => {
    
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
    
    return (
        <main class="holder">
        <div class="columna">
            <h2>Se voluntario!</h2>
            <form action="/contacto" method="post" class="formulario" onSubmit={handleSubmit}>
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label>Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label>Comentarios/Sugerencias</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                </p>
                <p className="centrar"><input type="submit" value="Enviar"/></p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            
            </form>
        </div>
    </main>
    )
}
export default ContactoPage;   