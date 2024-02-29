import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('https://wallpapercrafter.com/desktop/35086-fuji-4k-HD-wallpaper-japan-travel-tourism-National-Geographic-Traveler-Photo-Contest.jpg'); /* Replace with your wallpaper image path */
    background-size: cover;
`;

const FormContainer = styled.div`
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Handle login logic
        console.log('Logging in...');

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            console.log('response', response);
            if (response.ok) {
                console.log('Login successful');
                toast.success('Login successful'); // Show toaster message on success
            } else {
                console.error('Login failed');
                toast.error('Login failed'); // Show toaster message on failure
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Error during login'); // Show toaster message on error
        }
    };

    return (
        <Container>
            <FormContainer>
                <Title>Login</Title>
                <Input
                    type="text"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleLogin}>Login</Button>
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </FormContainer>
            <ToastContainer />
        </Container>
    );
};

export default Login;
