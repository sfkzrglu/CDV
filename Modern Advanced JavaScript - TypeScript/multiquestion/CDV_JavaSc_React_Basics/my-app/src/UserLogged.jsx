import React from 'react'

function UserLogged({logged,children}) {
    if (logged) {
        return (
            <div>{children}</div>
        )
    } else {      
        return (
            <div>Please Login</div>
        )
    }  
}

export function UserInfo ({userInfo}) {
    return (
      <h3>id: {userInfo.id} - {userInfo.username}</h3>
    )
}

export function Secret ({secret}) {
    return (
        <h7>Secret is '{secret}'</h7>
    )
}


export default UserLogged