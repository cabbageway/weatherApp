import { ThunkAction } from "redux-thunk";
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR, UserAction, UserError, UserData, GET_USER } from "../types";

//bei KC
export const getServerData = (): ThunkAction<void, RootState, null, UserAction> => {
    return async dispatch => {
        try {
           console.log("vor Serveraufruf");
           let url = '/api/users';
          
            const res = await fetch(url);
            if (!res.ok) {
                const resData: UserError = await res.json();
                   throw new Error(resData.message);
                   console.log("Serveraufruf not OK");
                
            }
            const resData: UserData = await res.json();
            console.log("Serveraufruf OK" + resData.Location);
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

export const getweather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
           
           let url = 'https://api.openweathermap.org/data/2.5/weather?q=';
           url += city + '&appid=140494dd31fc0353aaf1b5c38930945b';
            //const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=graz&appid=140494dd31fc0353aaf1b5c38930945b');
            const res = await fetch(url);
            if (!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }
            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
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

export const setLoading = ():WeatherAction =>{
    return {
        type:SET_LOADING
    }
}

export const setError = ():WeatherAction =>{
    return {
        type:SET_ERROR,
        payload:''
    }
}