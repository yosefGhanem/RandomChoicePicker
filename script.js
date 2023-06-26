const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

/*when button clicked generate new joke*/
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
//Using awsync/await
async function generateJoke(){
    const config = {
        headers :{
        'Accept':'application/json'
        }}
        /*now this gives response*/ 
    const res = await fetch('https://icanhazdadjoke.com' ,config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke


}

/*//USING .then
function generateJoke(){
    const config = {
        headers :{
        'Accept':'application/json'
        }}

    fetch('https://icanhazdadjoke.com' ,config).then(response => response.json()).then(data => {
        jokeEl.innerHTML = data.joke
    })
}
    /*Taking joke from above*/ 

