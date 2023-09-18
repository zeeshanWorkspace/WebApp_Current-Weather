console.log("searhing...")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '933a103cdbmshba7eb7a85b59ed5p1a1d25jsn8ba1559c96cc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)

		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

		temp.innerHTML = response.temp
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML= response.max_temp
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
	
		wind_speed.innerHTML = response.wind_speed
		wind_degree.innerHTML = response.wind_degrees
	})
	.catch(err => {
		console.error(err)
		alert('Please internet connection.')
	});
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

Delhi.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Delhi")
})
Mumbai.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Mumbai")
})
Bangalore.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Bangalore")
})
Hyderabad.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Hyderabad")
})
Ahmedabad.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Ahmedabad")
})
Chennai.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Chennai")
})
Kolkata.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Kolkata")
})
Surat.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Surat")
})
Pune.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Pune")
})
Jaipur.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather("Jaipur")
})