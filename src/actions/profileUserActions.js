import axios from 'axios';
import {TRAER_TODO,CARGANDO,ERROR} from '../types/profileUserTypes';

export const traerTodo =()=> async (dispatch)=>{
    dispatch({
        type:CARGANDO
    });
    try{
        const respuesta = await axios.get(`http://localhost:8000/api/v1/users/`)
        
        dispatch({
            type:TRAER_TODO,
            payload:respuesta.data
        })
        console.log(respuesta)

    }catch(error){
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Esta fallando register'
        })
    }
}