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
} from './LoginRegisterStyle';

const Register = () => {
  return (
    <Container>
      <Logo>To Do App</Logo>
      <LoginContainer>
        <Title>Register</Title>
        <Form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" style={{ marginTop: '24px' }} />
        </Form>
        <Button>Register</Button>
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
