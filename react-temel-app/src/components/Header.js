import React from 'react'

function Header() {
    const name = 'Ahmet'
    const surname = 'Sarıdoğan'
    const bio = 'lorem ipsum..'
    const isLoggedIn = true
    return (
        <>
            <h1>Hi, {name}</h1>
            <p>{`Name: ${name}, Surname: ${surname}, Bio: ${bio}`}</p>
            <p>{ isLoggedIn ? 'Çıkış' : 'Giriş' }</p>
        </>
    )
}

export default Header
