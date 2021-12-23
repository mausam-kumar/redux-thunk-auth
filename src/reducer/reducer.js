import {
    GET_USER_SUCCESS,GET_USER_REQUEST,GET_USER_FALIURE,
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FALIURE,
    USER_LOGOUT_SUCCESS
} from './actionType.js'


const initState = {
    isLoading: false,
    error:false,
    items: [],
    isAuth:false,
    token:''
}
export const reducer = (state=initState, action) =>{
    switch (action.type) {
        case GET_USER_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:false
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                items:action.payload
            }
        case GET_USER_FALIURE:
            return{
                ...state,
                isLoading:false,
                error:true
            }
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                error:false,
                isLoading:true
            }
        case USER_LOGIN_FALIURE:
            return{
                ...state,
                error:true,
                isLoading:false
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                error:false,
                isAuth:true,
                isLoading:false,
                token:action.payload.token
            }
        case USER_LOGOUT_SUCCESS:
            return{
                ...state,
                isAuth:false,
                token:"",
                items:[]
            }
    
        default:
            return state
            
    }
}