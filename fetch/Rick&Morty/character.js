//import { container, url } from './index.js';

let characterDivs = document.querySelectorAll('.characters');

console.log(characterDivs);

const newFunction = (event) => {
    console.log(event.target)
}




characterDivs.forEach(el => {
    el.addEventListener('click', newFunction);
    
        //let div = document.getAttribute('id');
        //console.log(div);
        //let id = el.reverse().parseInt();
       // return id;
    
})