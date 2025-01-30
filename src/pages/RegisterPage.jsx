import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        country: '',
        profilePicture: null
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        navigate('/');  
    };

    return (
        <div className="container">
            <h2>Kay�t Ol</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    name="firstName"
                    className="input-field"
                    placeholder="Ad"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    className="input-field"
                    placeholder="Soyad"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="Kullan�c� Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="�ifre"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    className="input-field"
                    placeholder="�ifreyi Tekrar Girin"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="country"
                    className="input-field"
                    placeholder="�lke"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    className="input-field"
                    placeholder="�ehir"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    className="input-field"
                    onChange={handleFileChange}
                />
                <button type="submit">KAYIT OL</button>
            </form>
            <div className="link-text">
                <p>Zaten bir hesab�n�z var m�? <a href="/login">G�R�� YAP</a></p>
            </div>
        </div>
    );
};

export default RegisterPage;

