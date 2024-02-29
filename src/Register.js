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
    background-image: url('https://w.wallhaven.cc/full/gp/wallhaven-gp865d.png'); /* Replace with your wallpaper image path */
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

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (response.ok) {
                toast.success('Registration successful');
                // Redirect to login or perform other actions after successful registration
            } else {
                toast.error('Registration failed');
                // Handle registration error, display error message, etc.
            }
        } catch (error) {
            toast.error('Error during registration');
            console.error('Error during registration:', error);
        }
    };


    return (
        <Container>
            <FormContainer>
                <Title>Register</Title>
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
                <Button onClick={handleRegister}>Register</Button>
                <p>
                    Don't have an account? <Link to="/login">Login</Link>
                </p>
            </FormContainer>
            <ToastContainer />
        </Container>
    );
};

export default Register;
