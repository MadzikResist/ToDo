import styled from 'styled-components';
import backgroundMobile from 'images/backgroundMobile.png';
import background2 from 'images/background2.png';
import buttonImage from 'images/buttonImage.png';

export const Container = styled.div`
  height: 100vh;
  padding: 8px 0;
  background: url(${backgroundMobile}) center/cover;
  //background-size: contain;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1200px) {
    min-height: 100vh;
    background: url(${background2}) center/cover no-repeat;
  }
`;
export const ListContainer = styled.div`
  background: rgba(184, 140, 97, 0.7);
  width: 90%;
  height: 70vh;
  //border: 8px solid #d2b79e;
  border: 8px solid #ffd7b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  margin-top: 3%;
  @media (min-width: 1200px) {
    width: 75%;
    padding: 0 24px;
    margin-top: 0;
  }
`;
export const Text = styled.h1`
  font-size: 2.5rem;
  color: #ab815a;
  text-align: center;
  padding: 0;
  margin-bottom: 8px;

  @media (min-width: 769px) {
    font-size: 5rem;
    color: #ab815a;
    width: 100%;
    margin: 0;
  }
`;
export const Title = styled.h2`
  margin: 0;
  color: white;
  width: 100%;
  word-wrap: break-word;
  font-size: 1.6rem;

  @media (min-width: 1200px) {
    width: 90%;
  }
  @media (min-width: 1500px) {
    width: 70%;
  }
`;
export const Date = styled.p`
  width: 100%;
  margin: 16px 0 0 0;
  padding: 0;

  @media (min-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 1920px) {
    width: 30%;
    margin: 0;
    margin-top: 4px;
  }
`;
export const TextToDo = styled.p`
  width: 100%;
  word-wrap: break-word;

  @media (min-width: 1200px) {
    margin: 0;
    padding: 0;
  }
  @media (min-width: 1920px) {
    width: 68%;
    margin-top: 4px;
  }
`;
export const CheckDone = styled.input`
  width: 24px;
  height: 24px;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: transparent;
  cursor: pointer;
  :checked {
    border: 1px solid #34495e;
    background-color: #41b883;
  }
  :checked + span:before {
    content: '\\2713';
    display: block;
    text-align: center;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(50%);
  }
  :active {
    border: 2px solid #34495e;
  }
`;
export const Delete = styled.svg`
  width: 24px;
  height: 24px;
  fill: red;
  cursor: pointer;
`;
export const Edit = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: #f4e5c5;
`;
export const List = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  //border: 3px solid #d2b79e;
  //border: 3px solid #ffd7b5;
  margin-bottom: 16px;
  align-items: center;
  padding: 8px;
  @media (min-width: 1200px) {
    width: 90%;
    //margin-bottom: 16px;
    //padding-bottom: 24px;
    margin-top: 32px;
  }
`;
export const ListElement = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  //border: 2px solid #d2b79e;
  border: 2px solid #d2b79e;
  margin-bottom: 16px;
  padding: 8px;
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 95%;
    justify-content: space-between;
    border: 3px solid #ffd7b5;
    align-items: center;
    flex-direction: row;
  }
  @media (min-width: 1920px) {
    width: 95%;
    justify-content: start;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10%;
  @media (min-width: 1200px) {
    margin-top: 8px;
    align-items: end;
  }
  @media (min-width: 1400px) {
    align-items: center;
    width: 100%;
  }
  @media (min-width: 1920px) {
    align-items: start;
    width: 30%;
    margin-top: 4px;
  }
`;
export const CheckBoxLabel = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;
`;

export const TitleDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1200px) {
    width: 40%;
    height: 100%;
    justify-content: space-between;
  }
  @media (min-width: 1920px) {
    flex-direction: row;
    width: 40%;
    margin: 0;
    padding: 0;
    justify-content: center;
    gap: 16px;
  }
`;
export const TextButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  @media (min-width: 1200px) {
    width: 60%;
    height: 100%;
  }
  @media (min-width: 1920px) {
    flex-direction: row;
    width: 60%;
    justify-content: start;
    gap: 16px;
  }
`;
export const ButtonAddNote = styled.button`
  margin-top: 24px;
  font-size: 1.5rem;
  height: 50px;
  width: 160px;
  color: #ab815a;
  font-weight: 600;
  background: url(${buttonImage}) center/cover no-repeat;
  border: none;
  cursor: pointer;
  :hover {
    color: #67642d;
  }
  @media (min-width: 769px) {
    height: 70px;
    width: 170px;
  }
`;
export const TitleButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const LogoutButton = styled.button`
  padding: 0;
  font-size: 1rem;
  height: 35px;
  width: 100px;
  color: #ab815a;
  font-weight: 600;
  margin-top: 4%;
  background: url(${buttonImage}) center/cover no-repeat;
  border: none;
  cursor: pointer;
  :hover {
    color: #67642d;
  }
  @media (min-width: 769px) {
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 8px;
    right: 0;
    transform: translateX(-20%);
    height: 45px;
    width: 140px;
    margin: 0;
  }
  @media (min-width: 1920px) {
    position: absolute;
    right: 0;
    transform: translateX(-20%);
    height: 45px;
    width: 140px;
  }
`;
