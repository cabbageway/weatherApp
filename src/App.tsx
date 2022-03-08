import React, {FC}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/search';
import Alert from './components/alert';
import Weather from './components/Weather';
import { setAlert } from './store/actions/alertActions';
import {setError} from './store/actions/weatherActions';
import AdditionalInputs from './components/additionalInputs';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state:RootState) => state.weather.data);
  const loading = useSelector((state:RootState) => state.weather.loading);
  const error = useSelector((state:RootState) => state.weather.error);
  const alertMsg = useSelector((state:RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title='Enter city name and press search button' />
      {loading ? <h2 className='is-size-3 py-2'>Loading ...</h2> : weatherData && <Weather data= {weatherData} />}
      {alertMsg && <Alert message={alertMsg} onClose={()=>dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      <AdditionalInputs title="Diese Elemente sind nur für Javascript Tests notwendig" />
      
    </div>
  );
}

export default App;
