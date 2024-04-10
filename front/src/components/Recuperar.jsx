import './recuperar.css'
const Recuperar = () => {   
     return (       
        <div className='sb__recuperar'>
            <div className='sb__recuperar-div'>
                <img src="./src/assets/images/logo_recuperar.png" alt="" />
            </div>
            <div className='sb__recuperar-div2'>
                <h1 className='sb__recuperar-titulo'>Recuperar contraseña</h1>
                <form action=""  method='POST' className='sb__recuperar-form'>
                    <label htmlFor="enviaremail" className='label-usuario'>
                        <img src="./src/assets/icons/usuario.png" alt="" />
                        Usuario
                    </label>
                    <input type="text" id='enviaremail' className='input-usuario' placeholder='correo' name='correo'/>
                    <button className='sb__recuperar-button' type='submit'>Recuperar</button>
                </form>
            </div>
        </div>   
    )
}
export default Recuperar
