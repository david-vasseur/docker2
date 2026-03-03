import React from "react";

async function fetchWeather(city: string) {
	// On récupère les infos de la ville d'abord pour avoir le WOEID
	const locationRes = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);
	const locations = await locationRes.json();

	if (!locations.length) {
		return null;
	}

	const woeid = locations[0].woeid;

	// On récupère la météo avec le WOEID
	const weatherRes = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
	const weatherData = await weatherRes.json();

	// On retourne seulement la météo du jour
	return weatherData.consolidated_weather[0];
}

export default async function Home() {
	const weather = await fetchWeather("Paris");

	if (!weather) {
		return <p>Ville introuvable</p>;
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
		<h1 className="text-5xl text-red-600 mb-4">DOCKER 2</h1>
		<p className="text-xl text-gray-700 dark:text-white">
			{weather.weather_state_name} à {weather.the_temp.toFixed(1)}°C
		</p>
		</div>
	);
}