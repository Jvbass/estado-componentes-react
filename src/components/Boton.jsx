const Boton = ({setLogin})=> {
     const handleLogin = ()=> { setLogin('Ingresando al sitio..')
        return
    }
    return (   
         <button onClick={()=> handleLogin()}> Ingresar </button>
    )
}

export default Boton