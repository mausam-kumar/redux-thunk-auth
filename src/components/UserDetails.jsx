import React from 'react'
import {Link,useNavigate,Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails,userLogOut} from '../reducer/action.js'

function UserDetails() {

    const [state,setState] = React.useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isAuth} = useSelector(state => state.reducer)
    const {items} = useSelector(state => state.reducer)

    function handleChange(e){
        setState(e.target.value)
    }

    function handleLogout(){
        dispatch(userLogOut())
        navigate("/login")
    }

    function handleSearch(){
        const payload = {
            name:state,
            per_page:10,
            page:1
        }
        dispatch(getUserDetails(payload))
    }
   
    return (
        isAuth===true?<div>
            <Link to="/"><button>HomePage</button></Link>
            <br />
            <br />
            <button onClick={handleLogout}>Logout</button>
            <br />
            <br />
            <h2>UserDetails</h2>

            <span>Search For Users :</span>
            <input type="text" name="username" onChange={handleChange} value={state} placeholder="Search" />
            <button onClick={handleSearch}>Search</button>

            <br />
            <br />

            {
                items.map((ele) => {
                    return(
                        <h3 key={ele.login}>{ele.login}</h3>
                    )
                })
            }

        </div>:<Navigate to="/login" />
    )
}

export default UserDetails
