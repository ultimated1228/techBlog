import { makeRequest } from './helpers.js';

const createCommentButton = document.querySelector('#create-comment');
const deleteBlogBtn = document.querySelector('.delete-btn');
const commentElements = document.querySelectorAll('.delete-comment');
const updateElements = document.querySelectorAll('.update-comment');

const titleID = document.querySelector('.title').id;

const handleCreateComment = async () => {
    const comment = document.querySelector('#comment').value;

    if (comment && titleID) {
        try {
            const data = await makeRequest('/api/comments', 'POST', {
                comment_text: comment,
                blog_id: titleID,
            });

            if (data.success) {
                window.location.reload();
            } else {
                console.error('Failed to create comment');
            }
        } catch (error) {
            console.error('Failed to create comment', error);
        }
    } else {
        console.error('Please fill in all fields');
    }
};

const handleDeleteComment = async (commentID) => {
    try {
        const data = await makeRequest(`/api/comments/${commentID}`, 'DELETE');

        if (data.success) {
            window.location.replace(`/blogs/${titleID}`);
        } else {
            console.error('Failed to delete comment');
        }
    } catch (error) {
        console.error('Failed to delete comment', error);
    }
};

const handleUpdateComment = async (commentID, updatedComment) => {
    try {
        const data = await makeRequest(`/api/comments/${commentID}`, 'PUT', {
            comment_text: updatedComment,
        });

        if (data.success) {
            window.location.replace(`/blogs/${titleID}`);
        } else {
            console.error('Failed to update comment');
        }
    } catch (error) {
        console.error('Failed to update comment', error);
    }
};

createCommentButton.addEventListener('click', handleCreateComment);

if (deleteBlogBtn) {
    deleteBlogBtn.addEventListener('click', async () => {
        try {
            const data = await makeRequest(`/api/blogs/${titleID}`, 'DELETE');

            if (data.success) {
                window.location.replace('/dashboard');
            } else {
                console.error('Failed to delete blog post');
            }
        } catch (error) {
            console.error('Failed to delete blog post', error);
        }
    });
}

commentElements.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.stopPropagation();
        const commentID = element.id;
        handleDeleteComment(commentID);
    });
});

updateElements.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.stopPropagation();
        const commentID = element.id;
        const messageBox = document.querySelector(`[data-id="${commentID}"]`);
        const saveBtn = document.querySelector(`[save-btn-id="${commentID}"]`);
        messageBox.toggleAttribute('disabled');
        saveBtn.classList.toggle('hidden');
        saveBtn.addEventListener('click', () => {
            const updatedComment = messageBox.value;
            handleUpdateComment(commentID, updatedComment);
        });
    });
});
