import {TRAER_TODO,CARGANDO,ERROR} from '../types/personalReviewTypes';

const INITIAL_STATE={
    users:[],
    cargando:false,
    error:''
}
export default(state = INITIAL_STATE,action)=>{
    switch(action.type){
        case TRAER_TODO:
            return{
                ...state,
                cargando:false,
                users:action.payload
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