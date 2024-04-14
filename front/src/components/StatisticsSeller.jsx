import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Error404 from './Error404';
import NavBar from './NavBar';
import Footer from './Footer';
import Loading from './Loading';
import '../resources/Statistics.css';
import Cookies from 'js-cookie';

const StatisticsSeller = () => {
    const { userId } = useParams();
    const nombre = Cookies.get('nombre');
    const apellido = Cookies.get('apellido');
    const [statistics, setStatistics] = useState({});
    const [wallet, setWallet] = useState();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const rolesString = Cookies.get('roles'); // Obtener el valor como una cadena de texto

    // Analizar la cadena JSON a un array
    const roles = rolesString ? JSON.parse(rolesString) : [];

    function handleLogout() {
        Cookies.remove('token');
        Cookies.remove('userId');
        Cookies.remove('nombre');
        Cookies.remove('apellido');
        Cookies.remove('roles');
        Cookies.remove('direccion');
        window.location.replace('/');
    }

    useEffect(() => {
        const fetchStatistics = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:3000/api/StatisticsSeller/${userId}`);
                setStatistics(response.data.statisticsSellers);
            } catch (error) {
                setError(error.message);
            }

            setLoading(false);
        };

        const fetchWallet = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/api/wallet/${userId}/saldo`);
                setWallet(response.data);
            } catch (error){
                setError(error.message);
            }
        };

        const fetchTransactions = async () =>{
            try{
                const response = await axios.get(`http://localhost:3000/api/wallet/${userId}/transacciones`);
                setTransactions(response.data.transactions);
            } catch (error){
                setError(error.message);
            }
        };

        fetchStatistics();
        fetchWallet();
        fetchTransactions();
    }, [userId]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error404 />;
    }

    return (
        <div>
            <NavBar
                logoSrc="/src/assets/images/logo_navbar.png"
                storeLogoSrc="/src/assets/images/store_navbar.png"
                menuSrc="/src/assets/icons/menu.png"
                closeSrc="/src/assets/icons/cerrar-ventana.png"
                searchSrc="/src/assets/icons/buscar.png"
                cartSrc="/src/assets/icons/carrito.png"
                userSrc="/src/assets/icons/usuario.png"
            />
            <div className='statsMain'>
                <div className='statsCon'>
                    <div className='Sleft'>
                        <img className='profile' src="..\src\resources\usuario.png" alt="usuario" />
                        <h3 className='username'>{nombre.charAt(0).toUpperCase() + nombre.slice(1)} {apellido.charAt(0).toUpperCase() + apellido.slice(1)}</h3>
                        <button className='lcancelar'>Actualizar info</button>
                        <button className='lcancelar'>Cambiar clave</button>
                        <button className="Cancelar-button" onClick={handleLogout}>Cerrar Sesión</button>
                    </div>
                    <div className='Sright'>
                        <div className='billetera'>
                            <p className='saldo'> ${(wallet.balance).toFixed(2)}/<span className='smallSaldo'>{(wallet.balance*38).toFixed(2)} Bs</span></p>
                            <p className='idWallet'><b>Id: </b>{wallet.walletId}</p>
                            <p className='idWallet'>Propietario: <b>{nombre.charAt(0).toUpperCase() + nombre.slice(1)} {apellido.charAt(0).toUpperCase() + apellido.slice(1)}</b></p>
                            <p className='wijoWallet'>WIJO wallet</p>
                        </div>
                        <div className='actionsContainer'>
                            <div className='action'>Enviar</div>
                            <div className='action'>Recibir</div>
                            <div className='action'>Recargar</div>
                            <div className='retirar'>Retirar</div>
                        </div>
                        <div className='transactions'>
                            <h3>Transacciones</h3>
                            <ul>
                                {transactions.length > 0 ? (
                                    transactions.map((transaction, index) => (
                                        <li className='transaction' key={index}>
                                            <p className='infoT'>Fecha: <div className='fecha'>{new Date(transaction.createdAt).toLocaleString()}</div></p>
                                            <p className='infoT'>Monto: <div className='amount'>{transaction.amount}</div> </p>
                                            <p className='infoT'>Tipo: <div className='tipo'>{transaction.type}</div> </p>
                                        </li>
                                    ))
                                ) : (
                                    <li className='transaction'>
                                        <p>No hay transacciones</p>
                                    </li>
                                )}
                            </ul>

                        </div>
                        {roles.includes('vendedor') && ( 
                            <div className='statsInfo'>
                                <p className='statInfo'>Productos en stock: <b>{statistics.products.length}</b></p>
                                <p className='statInfo'>Ventas totales: <b>{statistics.ventas_totales}</b></p>
                                <p className='statInfo'>Productos vendidos : <b>{statistics.cantidad_productos_vendidos}</b></p>
                                <p className='excel'>Generar reporte</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StatisticsSeller;
