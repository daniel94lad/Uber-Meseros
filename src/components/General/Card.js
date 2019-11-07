import React from 'react';

const Card = props =>{
    return(
        <div style={{margin:'1em'}}>
            <img alt="avatar" style={{width:'70px'}} src={props.avatar_url}/>
            <div>
                <div style={{fontWeight:'bold'}}>{props.username}</div>
                <div>{props.first_name}</div>
            </div>
        </div>
    )
}
export default Card;