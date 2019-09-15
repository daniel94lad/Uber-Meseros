import {BUSCAR,CARGANDO,ERROR} from '../types/loginTypes';

const INITIAL_STATE={
    users:[],
    cargando:false, 
    error:''
}
export default(state = INITIAL_STATE,action) =>{
    switch(action.type){
        case BUSCAR:
            
            return {...state,
                cargando: false,
                users: action.payload,
            }
            
        case CARGANDO:
            return{
                ...state,
                cargando:true
            }
        case ERROR:
            return{
                ...state,
                error:action.payload,
                cargando:false
            }
        default:
            return state;
    }
}
