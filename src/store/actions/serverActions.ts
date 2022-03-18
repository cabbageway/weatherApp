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
          
           
            const resData: UserData[] = (await axios.get(url)).data 
            console.log("Serveraufruf OK" , resData);
            resData.forEach(data=>{
                console.log(data.Date + " " + data.ID + " " + data.Location + " " + data.Name);
            });
            
            dispatch({
                type: GET_USER,
                payload: resData[0]
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