import {URL, ID, PASS, EQUIPO_1, EQUIPO_2, EQUIPO_3, EQUIPO_4} from '../../../../credenciales/credenciales.js'
import { getPosition } from './position'
import { getEncendido } from './encendido'


export const getDataPosition = (equipo) => {
    if(equipo=== "barco 1"){
        getPosition(URL, ID, PASS, EQUIPO_1.DESTI_1)
    }else if(equipo=== "barco 2"){
        getPosition(URL, ID, PASS, EQUIPO_2.DESTI_2)
    }else if(equipo=== "barco 3"){
        getPosition(URL, ID, PASS, EQUIPO_3.DESTI_3)
    }else if(equipo=== "barco 4"){
        getPosition(URL, ID, PASS, EQUIPO_4.DESTI_4)
    }
}

export const getDataEncendido = (equipo, action) => {
    if(equipo=== "barco 1"){
        getEncendido(URL, ID, PASS, EQUIPO_1.DESTI_1, action)
    }else if(equipo=== "barco 2"){
        getEncendido(URL, ID, PASS, EQUIPO_2.DESTI_2, action)
    }else if(equipo=== "barco 3"){
        getEncendido(URL, ID, PASS, EQUIPO_3.DESTI_3, action)
    }else if(equipo=== "barco 4"){
        getEncendido(URL, ID, PASS, EQUIPO_4.DESTI_4, action)
    }
}