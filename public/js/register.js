import { makeRequest } from './helpers.js';

const registerForm = document.querySelector('#register-form');
const errorMessage = document.querySelector('#error-message');

const handleRegister = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    // Basic client-side input validation
    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    try {
        const data = await makeRequest('api/users/register', 'POST', {
            name,
            email,
            password,
        });
        if (data.success) {
            window.location.replace('/login');
        } else {
            errorMessage.textContent = 'Registration failed. Please try again.';
        }
    } catch (error) {
        console.error('Failed to register', error);
        errorMessage.textContent = 'An error occurred during registration.';
    }
};

registerForm.addEventListener('submit', handleRegister);
