import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <h2>Dashboard Page</h2>
            <Link to="/login" style={{margin:"10px"}}><button>Login</button></Link>
            <Link to="/details"><button>UserDetails</button></Link>
        </div>
    )
}

export default Dashboard
