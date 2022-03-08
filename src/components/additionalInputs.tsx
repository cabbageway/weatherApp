import { FC, useState, FormEvent} from 'react';

import { useDispatch } from 'react-redux';
import { isFunctionLike } from 'typescript';
import { setAlert } from '../store/actions/alertActions';
import { getweather, setLoading, getServerData } from '../store/actions/weatherActions';


interface SearchProps {
    title: string;
}

const AdditionalInputs: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');


    const changeHandler = (e: FormEvent<HTMLSelectElement | HTMLInputElement> ) => {
        setCity(e.currentTarget.value);
        //console.log("City:  " + city);
        }

        const changeHandlerDate = (e: FormEvent< HTMLInputElement> ) => {
            setDate(e.currentTarget.value);
            //console.log("City:  " + city);
            }

        const changeHandlerSelect = (e: FormEvent<HTMLOptionElement | HTMLSelectElement> ) => {
            setCity(e.currentTarget.value);
            console.log("City:  " + city);
            } 



        const changeHandlerUsername = (e: FormEvent<HTMLInputElement> ) => {
            setUsername(e.currentTarget.value);
            //console.log("Username:  " + username);
            }

        

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim() === '') {

            return dispatch(setAlert('city is required!'));
        }
      
        dispatch(setLoading());
        dispatch(getweather(city));
        dispatch(getServerData());  // Aufruf der Serverfunktion
        checkFunki(username, date);  // interne JS Funktion für die Tests
        setCity('');
    }

    return (
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{title}</h1>
                                  
                    <form onSubmit={submitHandler} className="py-5" >
                        <input type="text" className="input "
                            placeholder="Enter City Name" style={{ maxWidth: 300 }}
                            value={city}
                            onChange={changeHandler} />
                            
                        
                        
                        <div className="field">
                            <label className="label">Date</label>
                            <div className="control">
                                <input className="input" type="date" placeholder="Text input" 
                                value={date}
                                onChange={changeHandlerDate}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" 
                                placeholder="Text input"  value={username}
                                onChange={changeHandlerUsername}/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                            <p className="help is-success">This username is available</p>
                        </div>

                     

                        <div className="field">
                            <label className="label">Ort</label>
                            <div className="control">
                                <div className="select">
                                    <select onChange={changeHandlerSelect}>
                                        <option selected value={city} >Graz</option>
                                        <option value={city}>Kaindorf</option>
                                        <option value={city}>Wien</option>
                                        <option value={city}>Paris</option>
                                        <option value={city} >Barcelona</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    I agree to the <a href="#">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="question" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="question" />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
    );
}

const checkFunki = (user:string, date:string) => {
    console.log("berechne was mit den Werten " + user  + date);
}


export default AdditionalInputs;