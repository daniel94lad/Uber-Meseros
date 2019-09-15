import {TRAER_TODO,CARGANDO,ERROR} from '../types/loginRegisterTypes';

const INITIAL_STATE={
    cargando:false,
    error:''
}
export default(state = INITIAL_STATE,action)=>{
    switch(action.type){
        case TRAER_TODO:
            return{
                ...state,
                cargando:false,
                error:''
            };
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