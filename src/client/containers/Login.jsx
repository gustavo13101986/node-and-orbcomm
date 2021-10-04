import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {USER, PASSWORD} from '../../../../credenciales/credenciales.js'

const Login =() => {
    const history = useHistory();
    const [password, setPassword]= useState('')
    const [user, setUser]= useState('')

    const addIngreso = (e) => {
        e.preventDefault();
        console.log(user, password)
        if(USER=== user && PASSWORD === password){
            history.push('/home')
        }

    }

    return(
        <div className="container">
            <form onSubmit={addIngreso}>
                <div className="mb-3">
                    <label className="form-label">User</label>
                    <input type="text" className="form-control"
                        name="user" 
                        onChange={e => setUser(e.target.value)}
                        value = {user}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                        name="password" 
                        onChange={e => setPassword(e.target.value)}
                        value = {password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
        </div>
    )
}

export default Login