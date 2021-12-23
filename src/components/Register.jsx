import React from 'react'
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
function Register() {

    const [state,setState] = React.useState({
        name:"",
        email:"",
        password:'',
        username:'',
        mobile:'',
        description:''
    })

    let navigate = useNavigate();

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    async function handleSumbit(e){
        e.preventDefault()
        try {
            
            const payload = {
                url:`http://localhost:3001/auth/register`,
                method: 'POST',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                data:state
            }
            const {data} = await axios(payload)
            alert(data.message);
            navigate("/login")
        } catch ({error,message}) {
            console.log(message);
        }
        
    }
    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={(e) => handleSumbit(e)}>
                <span>Name : </span>
                <input type="text" 
                    value={state.name} 
                    name="name" 
                    placeholder='Enter Name' 
                    onChange={(e) => handleChange((e))} 
                />
                <br />
                <br />
                <span>Email : </span>
                <input type="email" 
                    value={state.email} 
                    name="email" 
                    placeholder="Enter Email" 
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Username : </span>
                <input type="text" 
                    name="username" 
                    value={state.username} 
                    placeholder="Enter Username"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Password : </span>
                <input type="password" 
                    name="password" 
                    value={state.password} 
                    placeholder="Enter Password"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Contact : </span>
                <input type="text" 
                    name="mobile" 
                    value={state.mobile} 
                    placeholder="Enter Contact"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Description : </span>
                <input type="text" 
                    name="description" 
                    value={state.description} 
                    placeholder="Enter description"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <input type="submit" value="Sumbit" />
            </form>
            <span>Already Registered ?</span>
            <Link to="/login"><button>Login</button></Link>
        </div>
    )
}

export default Register
