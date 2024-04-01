import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import PagPrincipal from './pages/PagPrincipal';
import Cookies from 'js-cookie';
import CrearProducto from './components/CrearProducto';

const App = () => {
    const [token, setToken] = useState(Cookies.get('token'));

    return (
        <BrowserRouter>
            <Routes>
              {token?
              <>
              <Route path="/" element={<PagPrincipal/>} />
              <Route path="/crear-producto" element={<CrearProducto />} />
              </>
              :
              <>
              <Route path="/" element={<Login setToken={setToken} />} />
              <Route path="/register" element={<Register />} />
              </>
              }
            </Routes>
        </BrowserRouter>
    );
};

export default App;
