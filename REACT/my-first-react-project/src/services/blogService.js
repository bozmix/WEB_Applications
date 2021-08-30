let url = 'https://jsonplaceholder.typicode.com/posts';

export const getBlogs = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((blogData) => {
                return (
                    blogData.map(blog => {
                        return {
                            title: blog.title,
                            body: blog.body,
                            id: blog.id
                        }
                    })
                )
            });
}

export const getSingleBlog = (id) => {
    return fetch(`${url}/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((blogData) => {
                return (
                    {
                        title: blogData.title,
                        body: blogData.body,
                        id: blogData.id
                    }
                )
            });
}