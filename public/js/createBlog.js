import { makeRequest } from './helpers.js';
//make sure HTML is within a form
const createBlogForm = document.querySelector('#create-blog-form');

const handleCreateBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const description = document.querySelector('#description').value;

    if (title && content && description) {
        try {
            const data = await makeRequest('/api/blogs', 'POST', {
                blog_title: title,
                blog_body: content,
                blog_description: description,
            });

            if (data.success) {
                window.location.replace('/dashboard');
            } else {
                console.error('Failed to create blog post');
            }
        } catch (error) {
            console.error('Failed to create blog post', error);
        }
    } else {
        console.error('Please fill in all fields');
    }
};
//make sure a submit button is used within the HTML
createBlogForm.addEventListener('submit', handleCreateBlog);


