import React, {useContext} from 'react';
import '../styles/components/app.css'
import '../styles/components/botones.css'
import { AiFillCamera  } from "react-icons/ai";
import { GiPositionMarker} from "react-icons/gi";
import { RiSensorFill } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";
import AppContext from '../context/AppContext'
import {foto_cerca} from '../utils/foto'
import {getDataEncendido} from '../utils/getData'
import {getDataPosition} from '../utils/getData'

const Actions = () => {
    const {state} = useContext(AppContext)
    const {barco} = state
    console.log(barco)
    let bar = barco.length - 1

    
    return(
        <div className="fondo">
            <h5 className="styleTitulo"><strong>Opciones</strong> {barco[bar]}</h5>
            <div className="container">
                <div className="d-flex justify-content-between bd-highlight sombreadoBox">   
                <div className="m-2">
                    <p className="mt-3 mr-5 pr-1 ml-2"><AiFillCamera size={30} />Tomar foto</p>
                </div>

                    <div className="ml-auto btn-group align-self-center m-3">
                    <div class="dropdown">
                        <a className="btn dropdown-toggle btn btn-success btn-sm" role="button" id="dropdownMenuLink" data-toggle="dropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        Action
                        <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                            <li><a className="dropdown-item"  onClick={()=>foto_cerca(1)}>Foto horizonte</a></li>
                            <li><a className="dropdown-item"  onClick={()=>foto_cerca(2)}>Foto central</a></li>
                            <li><a className="dropdown-item"  onClick={()=>foto_cerca(3)}>Foto derecha</a></li>
                            <li><a className="dropdown-item"  onClick={()=>foto_cerca(4)}>Foto izquierda</a></li>
                            <li><a className="dropdown-item"  onClick={()=>foto_cerca(5)}>Foto cerca</a></li>
                        </ul>
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-between bd-highlight sombreadoBox">   
                    <div className="m-2">
                        <p className="mt-3 mr-2 pr-1 ml-2"> <GiPositionMarker size={30} /> Obtener posición</p>
                    </div>
                    <button type="button" onClick={()=>getDataPosition(barco[bar])} className="ml-auto btn btn-outline-success btn-sm align-self-center m-4">Success</button>
                </div>

                <div className="d-flex justify-content-between bd-highlight sombreadoBox">   
                    <div className="m-2">
                        <p className="mt-3 mr-2 pr-1 ml-2"> <RiSensorFill size={30}/> Obtener sensado</p>

                    </div>
                    <button type="button" className="ml-auto btn btn-outline-success btn-sm align-self-center m-4">Success</button>
                </div>

                <div className="d-flex justify-content-between bd-highlight sombreadoBox">   
                    <div className="m-2">
                        <p className="mt-3 mr-2 pr-1 ml-2"> <AiFillAlert size={30}/>Encender dispositivo</p>
                    </div>
                    <div>
                        <button type="button" onClick={()=>getDataEncendido(barco[bar], 6)} className="ml-auto btn btn-outline-success btn-sm align-self-center m-4">On</button>
                        <button type="button" onClick={()=>getDataEncendido(barco[bar], 7)} className="ml-auto btn btn-outline-danger btn-sm align-self-center m-4">Off</button>
                    </div>
                </div>
                </div>

                
            </div>

    )
}

export default Actions