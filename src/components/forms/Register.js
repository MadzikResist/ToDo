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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/api/register', {
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
    if (data.status === 'ok') {
      navigate('/');
    }
  };

  return (
    <Container>
      <Logo>To Do App</Logo>
      <LoginContainer>
        <Title>Register</Title>
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
        <Button onClick={registerUser}>Register</Button>
        <RegisterContainer>
          <Text>Already have an account?&nbsp;</Text>
          <Link to="/" style={{ textDecoration: 'underline', textDecorationColor: ' white' }}>
            <Text> Login </Text>
          </Link>
        </RegisterContainer>
      </LoginContainer>
    </Container>
  );
};

export default Register;
