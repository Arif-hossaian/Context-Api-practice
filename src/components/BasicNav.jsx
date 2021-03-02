import React from 'react'

const loggedInNav = ({ logout, user }) => {
    return (
        <div>
            <p>
                Hello i am {user.name} and my email is {user.email}
            </p>
            <ul>
                <li>Dashboard</li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    )
}
const loggedOutNav = ({ login }) => {
    return(
        <div>
            <p>Please click the login Button Below</p>
            <ul>
                <li onClick={login}>Login</li>
                <li>Register</li>
            </ul>
        </div>
    )
}

const BasicNav = ({ login, logout, isAuthenticated, user }) => {
    if(isAuthenticated) {
        return <loggedInNav logout={logout} user={user}/>
    }
    return <loggedOutNav login={login}/>
}

export default BasicNav
