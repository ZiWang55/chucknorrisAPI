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
        console.log(response); 
        return response.value
    })
    .then(value => {
        console.log(value)
        document.getElementById('root').textContent=value;
       
    })
	.catch(err => console.error(err));

