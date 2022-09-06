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

const Login = () => {
  return (
    <Container>
      <Logo>To Do App</Logo>
      <LoginContainer>
        <Title>Login</Title>
        <Form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" style={{ marginTop: '24px' }} />
        </Form>
        <Button>Login</Button>
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
