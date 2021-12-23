import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    
    return (
        <div>
            <h2>Something went wrong</h2>
            <Link to="/"><button>Back To Homepage</button></Link>
        </div>
    )
}

export default Error
