import { makeRequest } from "./helpers.js";

const loginForm = document.querySelector('#login-form');

const handleLogin = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email && password) {
        try {
            console.log(email, password)
            const data = await makeRequest('/api/users/login', 'POST', {
                email,
                password,
            });

            if (data.success) {
                window.location.replace('/dashboard');
            } else {
                alert('Invalid username or password');
                window.location.replace('/login');
            }
        } catch (error) {
            console.error('Failed to login', error);
        }
    } else {
        alert('Both name and password are required');
    }
};

loginForm.addEventListener('click', handleLogin);