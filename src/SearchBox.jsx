import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox ({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "dcb9a1721e1e4871adcedc5649bf678d";
 
    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);

            if(!response.ok) {
                throw new Error("City not found");
            }

            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err) {
            throw err;
        }
    } 

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setError(false);
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }catch(err) {
            setError(true);
        }  
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
                <br /><br />
                <Button variant="contained" type='submit'>
                Search
                </Button>
                <br /><br />
                {error && <p>No such place exists</p>}
                <br />
            </form>
        </div>
    )
}