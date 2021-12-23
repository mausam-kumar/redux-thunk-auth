import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate,Link,Navigate} from 'react-router-dom'
import {userLoginRequest} from '../reducer/action.js'

function Login() {
    const [state,setState] = React.useState({
        password: '',
        username: ''
    })
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth} = useSelector(state => state.reducer)

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    function handleSumbit(e){
        e.preventDefault()
        
        dispatch(userLoginRequest(state))
        // redirectPage()
        if (isAuth) {
            navigate("/details")
            alert("Login successful")
        }
    }

    
    return (
        isAuth===true?<Navigate to="/details"/>:<div>
            <Link to="/"><button>HomePage</button></Link>
            <h2>Login Page</h2>
            <form onSubmit={(e) => handleSumbit(e)} style={{margin:"30px 0px"}}>
                <br />
                <br />
                <span>Username :</span>
                <input type="text" name="username" value={state.username} onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <span>Password :</span>
                <input type="password" name="password" value={state.password} onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
            <span>No Account ?</span>
            <Link to="/register"><button>Register</button></Link>
        </div>
    )
}

export default Login
