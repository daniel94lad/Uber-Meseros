import {TRAER_TODO,CARGANDO,ERROR} from '../types/profileUserTypes';

export const traerTodo =()=> async (dispatch)=>{
    dispatch({
        type:CARGANDO
    });
    try{
        
        dispatch({
            type:TRAER_TODO,
            payload:'Se logro'
        })

    }catch(error){
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Esta fallando register'
        })
    }
}