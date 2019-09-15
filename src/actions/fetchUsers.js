import {fetchUsersPending,fetchUsersSuccess,fetchUsersFail} from './pinterestActions';

function fetchUsers(){
    return dispatch => {
        dispatch(fetchUsersPending());
        
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(res =>{
            if(res.error){
                throw(res.error)
            }
            dispatch(fetchUsersSuccess(res.users))
            console.log(res)
            return res.users
        })
        .catch(error =>{
            dispatch(fetchUsersFail(error))
        })
    }
}
export default fetchUsers;