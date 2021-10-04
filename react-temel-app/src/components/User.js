import React from 'react'

function User({ user, isLoggedIn }) {
    return (
        <>
            <p>{ isLoggedIn ?
               `User info: ${user.name} ${user.surname},`
               : `Giriş yapmalısınız`
            }

            </p>
        </>
    )
}

export default User
