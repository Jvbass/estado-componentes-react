import { useState } from 'react'
// importamos libreria useState 

import './App.css'
// importamos estilos 

import Input from './components/Input.jsx'
import Boton from './components/Boton.jsx'
// importamos componentes 

function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState("")

   return (
    <main className="App">
      <div className="card">
        <h1>Login</h1>
        <Input setUser={setUser} setPassword={setPassword}/>
       
       { user && password ==="252525" && <Boton setLogin={setLogin}/>}
       {!user && password === "252525" && <p className='error'> *Ingrese nombre de usuario</p> }
       {/* validando datos con condicional && muestra boton  */}
       
       <p className={password && password !== "252525" ? "" : "disabled"}>*contraseña incorrecta</p> 
       {/* validando datos con operador ternario y clase  */}

       <p> {login} </p>

      </div>
    </main>
  )
}
export default App
