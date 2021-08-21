const url = 'https://randomuser.me/api/?results=15';

export const getUsers = () => {
    return fetch(url)
            .then(response => response.json())
            .then(users => users.results)
}