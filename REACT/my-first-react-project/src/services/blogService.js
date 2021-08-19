let url = 'https://jsonplaceholder.typicode.com/posts';

export const getBlogs = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((blogData) => blogData);
}