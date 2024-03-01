import React, {useState} from 'react'
import './App.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

let apiKey = "**********************************";







function WeatherApp() {

  
const [humidity, setHumidity] = useState(0.0);
const [wind, setwind] = useState(0.0);
const [temperature, settemperature] = useState(0.0);
const [location, setlocation] = useState('');

const search = async ()=>{
  const elementValue = document.getElementsByClassName("cityInput")[0].value
  if(elementValue==="")
  {
    return 0;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${elementValue}&units=metric&appid=${apiKey}`
  let response = await fetch(url);
  let data = await response.json();
  if(data.cod != 200){
    alert(data.message)
    return 0;
  }
 
  //humidity[0].innerHTML = data.main.humidity;
  setHumidity(data.main.humidity);
  setwind(data.wind.speed);
  settemperature(data.main.temp);
  setlocation(data.name);
}
const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" 
        className="cityInput" 
        placeholder='Enter City'
        onKeyPress={handleKeyPress}/>
        <div className="search-icon" onClick={()=>search()}>
          <img src={search_icon} alt="" className="" />
        </div>
      </div>
       <div className="weather-image">
        <img src={cloud_icon} alt="" />
       </div>
       <div className="weather-temp">{temperature}</div>
       <div className="weather-location">{location}</div>
       <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
         <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{wind}km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default WeatherApp
