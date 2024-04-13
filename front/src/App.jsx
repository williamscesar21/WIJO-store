import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importa Navigate
import Login from './components/Login';
import Register from './components/Register';
import PagPrincipal from './pages/PagPrincipal';
import Cookies from 'js-cookie';
import {Product} from './components/Product';
import Error404 from './components/Error404';
import SearchResults from './components/SearchResults';
import Cart from './components/Cart';
import StatisticsSeller from './components/StatisticsSeller';
import Body from './components/Body';
import Checkout from './components/Checkout';
import Politicas from './components/Politicas';

const App = () => {
    const [token, setToken] = useState(Cookies.get('token'));
    const [searchTerm, setSearchTerm] = useState('');
    const [userId, setUserId] = useState(Cookies.get('userId'))
    

    return (
        <BrowserRouter>
            <Routes>
                {token ? (
                    <>
                        <Route path="/" element={<PagPrincipal />} />
                        <Route path="/inicio" element={<Body />} />
                        <Route path="/product/:productId" element={<Product />} /> {/* Ajusta la ruta del componente Product */}
                        <Route path="/politicas" element={<Politicas />} />
                        <Route
                            path="/buscar/:searchTerm" 
                            element={<SearchResults searchTerm={searchTerm} />}
                        />
                        <Route
                            path="/cart/:userId" 
                            element={<Cart userId={userId} />}
                        />
                        <Route
                                path="/statistics/:userId" 
                                element={<StatisticsSeller userId={userId} />}
                            />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Login setToken={setToken} />} />
                        <Route path="/register" element={<Register />} />
                    </>
                )}

                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
