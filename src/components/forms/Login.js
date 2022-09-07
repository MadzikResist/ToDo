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
  ErrorMsg,
} from 'components/forms/LoginRegisterStyle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch('https://nodejs-to-do-server.herokuapp.com//api/login', {
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
      navigate('/dashboard');
    } else if (data.message) {
      setError(data.message);
      return;
    }
    console.log('errordata: ', data);
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
          <ErrorMsg>{error || ''}</ErrorMsg>
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
