import { makeRequest } from './helpers.js';

const editBlogButton = document.querySelector('#edit-btn');

const handleEditBlog = async (event) => {
    event.preventDefault();

    const blogID = document.querySelector('.title-label').id;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const description = document.querySelector('#description').value;

    // Client-side validation
    if (!title || !content) {
        // Display an error message to the user
        alert('Title and content are required.');
        return;
    }

    try {
        const data = await makeRequest(`/api/blogs/${blogID}`, 'PUT', {
            blog_title: title,
            blog_body: content,
            blog_description: description,
        });

        if (data.success) {
            // Redirect to the updated blog post
            window.location.replace(`/blogs/${blogID}`);
        } else {
            console.error('Failed to update content');
        }
    } catch (error) {
        console.error('Failed to update content', error);
    }
};

editBlogButton.addEventListener('submit', handleEditBlog);
