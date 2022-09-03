import {Route, Outlet,Navigate} from 'react-router-dom'

const PrivateRoute = () => {
    let auth = {'token' : false}

    return (
        <>
        <p>Private route</p>
        {auth.token ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoute