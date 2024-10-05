import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../main';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'contacts'), formData);
            alert('Tu consulta ha sido enviada correctamente');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error al enviar la consulta: ', error);
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">¡Contáctanos!</h2>
            <p className="contact-description">
                Si tienes alguna duda o consulta, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Consulta:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;


