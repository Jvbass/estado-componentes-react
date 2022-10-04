const Input =  ({setUser, setPassword})=> {
    return (
        <div className="form-input">
            <input type="text" placeholder="user"
             onChange={(e) => setUser(e.target.value)} />

            <input type="password" placeholder="Contraseña" 
             onChange={(e) => setPassword(e.target.value)}/>
        </div>
    )
}

export default Input