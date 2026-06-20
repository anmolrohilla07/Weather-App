import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp () {
    const [weatherInfo,setWeatherInfo] = useState({
        city : "",
        feelslike : "",
        temp : "",
        tempMin : "",
        tempMax : "",
        humidity : "",
        weather : "",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    
    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}