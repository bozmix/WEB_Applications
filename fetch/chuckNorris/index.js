const main = document.querySelector('#main');
const btn = document.querySelector('#btn');

const url = 'https://api.chucknorris.io/jokes/random';

const getJoke = () => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            let joke = myJson.value;
            //let p = document.createElement('p');
            //p.textContent = joke;
            main.textContent = joke;
        })
}

btn.addEventListener('click', getJoke);
