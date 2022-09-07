import styled from 'styled-components';
import buttonImage from 'images/buttonImage.png';
import backgroundMobile from 'images/backgroundMobile.png';
import background2 from 'images/background2.png';

export const Container = styled.div`
  height: 100vh;
  background: url(${backgroundMobile}) center/cover;
  background-size: contain;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;

  @media (min-width: 769px) {
    height: 100vh;
    background: url(${background2}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 8px;
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 8px;
  }
  label {
    color: white;
    font-size: 1.5rem;
    //margin-bottom: 8px;
  }
  input {
    height: 32px;
    width: 100%;
    background: transparent;
    border: 0;
    border-bottom: 2px solid white;
    margin-top: 16px;
    color: white;
    font-size: 1.1rem;

    ::placeholder {
      color: white;
      font-size: 1rem;
      opacity: 70%;
    }
    :focus {
      outline: none;
    }
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 350px;
  border: 8px solid #d2b79e;
  //background: #a28062;
  background: rgba(184, 140, 97, 0.7);
  margin-bottom: 16px;

  @media (min-width: 769px) {
    width: 70%;
    height: 45%;
    margin-top: 5%;
  }
  @media (min-width: 1200px) {
    width: 55%;
    height: 45%;
    margin-top: 5%;
  }
`;
export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 16px 0;
  @media (min-width: 769px) {
    font-size: 3rem;
  }
`;
export const Text = styled.p`
  color: white;
`;
export const Button = styled.button`
  margin-top: 24px;
  font-size: 1.5rem;
  height: 55px;
  width: 150px;
  color: #ab815a;
  font-weight: 600;
  background: url(${buttonImage}) center/cover no-repeat;
  border: none;
  margin-bottom: 32px;
  cursor: pointer;
  :hover {
    color: #67642d;
  }
  @media (min-width: 769px) {
    height: 70px;
    width: 170px;
  }
`;
export const RegisterContainer = styled.div`
  display: flex;
`;
export const Logo = styled.h1`
  font-size: 3.5rem;
  color: #ab815a;
  text-align: center;
  margin: 8% 0;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 769px) {
    font-size: 5rem;
    color: #ab815a;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 80px 0;
    width: 100%;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
  width: 100%;
  height: 20px;
`;
