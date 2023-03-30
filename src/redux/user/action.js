import userType from './type';

import {
    createUserApi,
    deleteUserApi,
    getAllUserListAPi,
    updateUserApi
} from '../../services/userService'


export const getAllUserList = () =>{
    return async function(dispatch){
        dispatch({ type: userType.USER_LIST_REQUEST });
        await getAllUserListAPi().then((res)=>{
            if (res.status === 200) {
                dispatch({ type: userType.USER_LIST_SUCCESS, payload: res.data.data });
              } else {
                dispatch({ type: userType.USER_LIST_FAIL, payload: res.data.data });
              }
        })
    }
}

export const createUser = (urlencoded) =>{
    return async function(dispatch){
        dispatch({type:userType.USER_CREATE_REQUEST})
        await createUserApi(urlencoded).then((res)=>{
            if(res.status === 200)
            {
                dispatch({type:userType.USER_CREATE_SUCCESS, payload:res.data.message})
            }
        }).catch((e)=>{
            dispatch({type:userType.USER_CREATE_FAIL, payload:e.response.data.message})
        })
    }
}

export const updateUser = (urlencoded) =>{
    return async function(dispatch){
        dispatch({type:userType.USER_UPDATE_REQUEST})
        await updateUserApi(urlencoded).then((res)=>{
            if(res.status === 200)
            {
                dispatch({type:userType.USER_UPDATE_SUCCESS, payload:res.data.message})
            }
        }).catch((e)=>{
            dispatch({type:userType.USER_UPDATE_FAIL, payload:e.response.data.message})
        })
    }
}

export const deleteUser = (urlencoded) =>{
    return async function(dispatch){
        dispatch({type:userType.USER_DELETE_REQUEST})
        await deleteUserApi(urlencoded).then((res)=>{
            if(res.status === 200)
            {
                dispatch({type:userType.USER_DELETE_SUCCESS, payload:res.data.message})
            }
        }).catch((e)=>{
            dispatch({type:userType.USER_DELETE_FAIL, payload:e.response.data.message})
        })
    }
}