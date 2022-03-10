import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from '..';
import {  UserAction, UserData, GET_USER } from "../types";



//bei KC
export const getServerData = (): ThunkAction<void, RootState, null, UserAction> => {
    return async dispatch => {
        try {
           console.log("vor Serveraufruf");
           let url = 'http://localhost:8000/api/users';
          
           
            const resData: UserData = (await axios.get(url)).data 
            console.log("Serveraufruf OK" , resData);
            console.log(resData.Date + " " + resData.ID + " " + resData.Location + " " + resData.Name);
            dispatch({
                type: GET_USER,
                payload: resData
            });
        } catch (err) {
            console.log("bin in err");
           /* dispatch({
                type: SET_ERROR
                payload:  err.message
            }); */
        }

    }
}