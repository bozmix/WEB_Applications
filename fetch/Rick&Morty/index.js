const body = document.querySelector('body');


const url = 'https://rickandmortyapi.com/api/character';

const setElementsForRequest = (event) => {
    let index = event.target.getAttribute('id');
    let id = parseInt(index.slice(10));
    let container = document.querySelector('.container');
    localStorage.setItem('id', id);
    fetch(`${url}/${id}`)
        .then(response => {
            return response.json();
        })
        .then( el => {
            console.log(el);
            container.remove();
            let container1 = document.createElement('div');
            container1.setAttribute('class', 'character');
            body.appendChild(container1);
            let image = document.createElement('img');
            image.setAttribute('src', el.image);
            container1.appendChild(image);
            let description = document.createElement('div');
            description.setAttribute('class', 'description');
            let p = document.createElement('p');
            let a = document.createElement('p');
            let b = document.createElement('p');
            let c = document.createElement('p');
            let d = document.createElement('p');
            let e = document.createElement('p');
            let f = document.createElement('p');
            p.textContent = 'Character name: ' + el.name;
            a.textContent = 'Character species: ' + el.species;
            b.textContent = 'Character status: ' + el.status;
            c.textContent = 'Character type: ' + el.type;
            d.textContent = 'Gender: ' + el.gender;
            e.textContent = 'Character location: ' + el.location.name;
            f.textContent = 'Character origin: ' + el.origin.name;
            description.appendChild(p);
            description.appendChild(a);
            description.appendChild(b);
            description.appendChild(c);
            description.appendChild(d);
            description.appendChild(e);
            description.appendChild(f);
            container1.appendChild(description);
            container1.addEventListener('click', removeCharacter);
        })
        
}

const removeCharacter = () => {
    let w = document.querySelector('.character');
    if (w) {
        w.remove();
    };
    onLoad();
}

const onLoad = () => {
    const a = document.createElement('div');
    a.setAttribute('class', 'container');
    body.appendChild(a);
    const container = document.querySelector('.container');
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(myResponse => {
        myResponse.results.forEach(el => {
            let id = el.id;
            let name = el.name;
            let image = el.image;
            let div = document.createElement('div');
            div.setAttribute('id', `character-${id}`);
            div.setAttribute('class', 'characters');
            let characterImage = document.createElement('img');
            characterImage.setAttribute('src', image);
            characterImage.setAttribute('id', `character-${id}`);
            let title = document.createElement('h2');
            title.textContent = name;
            title.setAttribute('id', `character-${id}`);
            let btn = document.createElement('button');
            btn.innerHTML = `<i class="fas fa-thumbs-up" id="character-${id}">    Like</i>`;
            btn.setAttribute('id', `character-${id}`);
            div.appendChild(characterImage);
            div.appendChild(title);
            div.appendChild(btn);
            container.appendChild(div);
            div.addEventListener('click', setElementsForRequest);
        })
    })
}

onLoad();
