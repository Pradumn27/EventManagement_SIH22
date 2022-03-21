import React, { useEffect } from 'react'
import Authenticator from './components/Authenticators/Authenticator'
import MainPage from './components/MainPage'
import { useStateValue } from './StateReducer/StateProvider'

function FirstPage() {

    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {

    }, [user])
    return (
        <>
            {user ? <MainPage /> : <Authenticator />}
        </>
    )
}

export default FirstPage