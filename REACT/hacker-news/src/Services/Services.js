const dataUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

export const getStories = () => {
       return fetch (dataUrl)
            .then(response => response.json())
            .then(myresponse => myresponse.slice(0, 10))
}