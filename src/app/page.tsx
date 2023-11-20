"use client";
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [cityName, setCityName] = useState('');
  const [unit, setUnit] = useState('');
  const [lat, setLatitude] = useState('');
  const [lng, setLongitute] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const handleSubmitWeather = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/weather', {
        cityName: cityName,
        unit: unit,
      });
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmitLocation = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.2:4000/location', {
        lat: lat,
        lng: lng,
      });
      const data = response.data;
      setLocationData(data);
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <p>Test</p>
      <section className="bg-white p-6 rounded-lg shadow mt-4">
        <h2 className="text-xl text-black font-semibold mb-4">Weather App</h2>

        <h3 className="text-lg text-black font-semibold">
          A basic Weather app microservice
        </h3>
        <p>Enter your details to get weather Info </p>
        <form onSubmit={handleSubmitWeather}>
          <label className="text-black" htmlFor="cityInput">
            City name:
          </label>
          <input
            className="text-black"
            type="text"
            name="cityName"
            placeholder="Enter name of your city"
            id="cityInput"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <label className="text-black" htmlFor="unitInput">
            Unit:
          </label>
          <input
            className="text-black"
            type="text"
            name="unit"
            placeholder="Enter unit in metric"
            id="unitInput"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
            type="submit"
          >
            Submit
          </button>
        </form>
        {weatherData && (
          <div>
            <h4 className="text-black">Weather Information</h4>
            <p className="text-black">Temperature: {(weatherData as any).temperature}°C</p>
            <p className="text-black">Description: {(weatherData as any).weatherDes}</p>
            <p className="text-black">City Name: {(weatherData as any).cityName}</p>
            <img src={(weatherData as any).imageURL} alt="Weather Icon" />
          </div>
        )}
      </section >
      <section className="bg-white p-6 rounded-lg shadow mt-4">
        <h2 className="text-xl text-black font-semibold mb-4">Location App</h2>

        <h3 className="text-lg text-black font-semibold">
          A basic Location app microservice
        </h3>
        <p>Enter your details to get Location Info based on longitute and latitude </p>
        <form onSubmit={handleSubmitLocation}>
          <label className="text-black" htmlFor="latInput">
            Lat:
          </label>
          <input
            className="text-black"
            type="text"
            name="lat"
            placeholder="Enter latitude"
            id="latInput"
            value={lat}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <label className="text-black" htmlFor="lngInput">
            lng:
          </label>
          <input
            className="text-black"
            type="text"
            name="lng"
            placeholder="Enter longitute"
            id="lngInput"
            value={lng}
            onChange={(e) => setLongitute(e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
            type="submit"
          >
            Submit
          </button>
        </form>
        {locationData && (
          <div>
            <h4 className="text-black">Locaton Information</h4>
            <p className="text-black">CountryName: {(locationData as any).countryName}</p>
            <p className="text-black">CityName: {(locationData as any).city}</p>
          </div>
        )}
      </section >
    </div >
  );
}
