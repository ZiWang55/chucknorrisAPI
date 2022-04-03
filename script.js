const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '9e3e0e4eebmsh0c66b6e438da666p10acd5jsn572fc3847907'
    }
};
chuckJokes().catch(err => console.error(err));
;
async function chuckJokes() {
    const response = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options);
    const chuck = await response.json()//put it into json
    console.log(chuck)
    const value = await chuck.value//grabbing the jokes
    console.log(value)
    const icon = await chuck.icon_url//grabbing the icon
    //DOM
    container.textContent = value
    icondiv.src=icon
}

//old promises code

// fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
// 	.then(response =>  response.json())
//     .then(response => {
//         console.log(response)
//        value.textContent = response.value;
//        icon.src=response.icon_url;
//     })
// 	.catch(err => console.error(err));

const app = document.getElementById('root');
const icondiv = document.createElement('img')
const container = document.createElement('div')

app.appendChild(icondiv)
app.appendChild(container)