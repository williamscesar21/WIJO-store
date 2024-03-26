// App.jsx
import React, { useState } from 'react';
import Login from './components/Login';
import PagPrincipal from './pages/PagPrincipal';
import Cookies from 'js-cookie';

const App = () => {
    const [token, setToken] = useState(Cookies.get('token'));

    return (
        <div>
            {token ? <PagPrincipal /> : <Login setToken={setToken} />}
        </div>
    );
};

export default App;
