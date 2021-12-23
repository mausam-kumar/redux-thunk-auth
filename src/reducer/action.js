import {
    GET_USER_SUCCESS,GET_USER_REQUEST,GET_USER_FALIURE,
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FALIURE,
    USER_LOGOUT_SUCCESS
} from './actionType.js'

import axios from 'axios'

export const getUserDetails = (data) => async (dispatch,getState) => {
    dispatch({
        type: GET_USER_REQUEST
    })
    const payload = {
        url:`https://api.github.com/search/users?q=${data.name}&per_page=${data.per_page}&page=${data.page}}`,
        method: 'GET'
    }

    try {
        const res = await axios(payload)
        dispatch({
            type:GET_USER_SUCCESS,
            payload: res.data.items
        })
    } catch (error) {
        dispatch({
            type: GET_USER_FALIURE,
            payload: error
        })
    }
}

export const userLoginRequest =  (data) => async (dispatch,getState) => {
    dispatch({
        type: USER_LOGIN_REQUEST
    })
    try {
        console.log("data =>",data);
        const payload = {
            url:`http://localhost:3001/auth/login`,
            method:'post',
            'Access-Control-Allow-Origin': '*',
            data:data
        }
    
        const res = await axios(payload)
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FALIURE})
    }
}

export const userLogOut = () => {
    return{
        type: USER_LOGOUT_SUCCESS
    }
}