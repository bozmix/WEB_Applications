var input = document.getElementById('search');
var resultsDisplay = document.getElementById('results');
var api = 'https://api.github.com/search/users?q=';
 
export const someFunction =(event) =>{
    if (event.keyCode === 13){
        var inputValue = input.value;
        $.ajax(api + inputValue, {
            success: function (data) {
                data.items.forEach(function(user){
                    var resultDiv = document.createElement('div');
                    resultDiv.setAttribute('class', 'resultDiv');
                    resultsDisplay.appendChild(resultDiv);
                    var resultImg = document.createElement('img');
                    resultImg.setAttribute('src', user.avatar_url);
                    resultDiv.appendChild(resultImg);
                    var resultP = document.createElement('p');
                    resultP.setAttribute('class', 'resultP');
                    resultP.textContent = user.login;
                    resultDiv.appendChild(resultP);
    
                })
                
            }
        });
    }
}

window.addEventListener('keypress', someFunction);