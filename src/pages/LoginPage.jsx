import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Giri� Yap</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    className="input-field"
                    placeholder="Kullan�c� Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="�ifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">G�R��</button>
            </form>
            <div className="link-text">
                <p>Hen�z hesab�n�z yok mu? <a href="/register">�YE OL</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
