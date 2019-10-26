import {TRAER_TODO,CARGANDO,ERROR} from '../types/personalReviewTypes';
import axios from 'axios';

export const traerTodo =()=> async (dispatch)=>{
    dispatch({
        type:CARGANDO
    });
    try{
        const users = await axios.get('http://localhost:8000/profiles/')
        dispatch({
            type:TRAER_TODO,
            payload:users.data
        })
        console.log(users)

    }catch(error){
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Esta fallando register'
        })
    }
}