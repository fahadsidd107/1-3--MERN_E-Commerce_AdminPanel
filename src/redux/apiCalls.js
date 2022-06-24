import { loginStart,loginFailure,loginSuccess } from "./userRedux";
import {getProductStart, getProductSuccess} from './productRedux'
import { userRequest } from "../requestMethods";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await userRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}


export const getProduct = async (dispatch)=>{
    dispatch(getProductStart());
    try{
        const res = await userRequest.post("/product");
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(());
    }
}