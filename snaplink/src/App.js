import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import SigninPage from "./components/signinPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<SigninPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
