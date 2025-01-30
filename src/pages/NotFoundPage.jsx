import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold mt-2">Sayfa Bulunamad�</h2>
            <p className="text-gray-600 mt-2">�zg�n�z, arad���n�z sayfa mevcut de�il.</p>
            <Button text="Ana Sayfaya D�n" onClick={() => navigate("/")} className="mt-4" />
        </div>
    );
};

export default NotFoundPage;
