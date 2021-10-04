import React, {useContext} from 'react';
import '../styles/components/Home.css'
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext'

const Home = () => {
    const history = useHistory();
    const {state, addToBarco} = useContext(AppContext)
    const {barco} = state

    const barcos = (name_barco) => {

        addToBarco(name_barco)
        history.push('/barco')

    }
 
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Mi Empresa</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccionar barco
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" onClick={()=>barcos("barco 1")}>Barco 1</a></li>
                        <li><a className="dropdown-item" onClick={()=>barcos("barco 2")}>Barco 2</a></li>
                        <li><a className="dropdown-item" onClick={()=>barcos("barco 3")}>Barco 3</a></li>
                        <li><a className="dropdown-item" onClick={()=>barcos("barco 4")}>Barco 4</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="search d-flex justify-content-center">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar barco" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Bucar</button>
                </form>
            </div>
            </div>

    )
}

export default Home