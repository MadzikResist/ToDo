import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Form,
  LoginContainer,
  Logo,
  RegisterContainer,
  Text,
  Title,
  Button,
} from 'components/forms/LoginRegisterStyle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      navigate('/dashboard');
    } else {
      alert('Please check your email and password');
    }
    console.log(data);
  };
  return (
    <Container>
      <Logo>To Do App</Logo>
      <LoginContainer>
        <Title>Login</Title>
        <Form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: '24px' }}
          />
        </Form>
        <Button onClick={loginUser}>Login</Button>
        <RegisterContainer>
          <Text>Don't have an account?&nbsp;</Text>
          <Link
            to="/register"
            style={{ textDecoration: 'underline', textDecorationColor: ' white' }}
          >
            <Text> Register </Text>
          </Link>
        </RegisterContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
