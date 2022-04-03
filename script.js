const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '9e3e0e4eebmsh0c66b6e438da666p10acd5jsn572fc3847907'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response =>  response.json())
    .then(response => {
        console.log(response)
       value.textContent = response.value;
       icon.src=response.icon_url;
    })
	.catch(err => console.error(err));



const app = document.getElementById('root');
const value = document.createElement('div')
const icon = document.createElement('img')
app.appendChild(icon)
app.appendChild(value)