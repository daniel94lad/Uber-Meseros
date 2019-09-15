import axios from 'axios';
import {BUSCAR,CARGANDO,ERROR} from '../types/loginTypes';

export const buscar =() => async (dispatch)=>{
    dispatch({
        type:CARGANDO
    });
    try{
        const respuesta = await axios.get(`https://rickandmortyapi.com/api/character/`)
        const answer = {...respuesta};
        const an2= answer.data

        let users = an2.results.map((item)=>({
            name:item.name,
            id:item.id,
            image:item.image
        }))
        dispatch({
            type: BUSCAR,
            payload: users
        })
        console.log(users)

    }catch(error){
        
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Esta fallando el loading'
        })
    }
}
