import styled from 'styled-components';
import backgroundMobile from 'images/backgroundMobile.png';
import background2 from 'images/background2.png';
import buttonImage from 'images/buttonImage.png';

export const Container = styled.div`
  min-height: 100vh;
  padding: 16px 0;
  background: url(${backgroundMobile}) center/cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  @media (min-width: 1200px) {
    height: 100vh;
    background: url(${background2}) center/cover no-repeat;
  }
`;
export const NoteContainer = styled.div`
  background: rgba(184, 140, 97, 0.7);
  width: 90%;
  height: 99%;
  border: 8px solid #ffd7b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    width: 80%;
    height: 80%;
    display: flex;
    padding: 0 24px;
    justify-content: start;
  }
`;
export const List = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  align-items: center;
  padding: 8px;
  overflow-y: auto;
  @media (min-width: 1200px) {
    width: 90%;
    justify-content: center;
    margin-bottom: 0;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  gap: 16px;
  align-items: center;
`;
export const TitleDate = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
export const InputTitle = styled.input`
  font-size: 2rem;
  background: transparent;
  text-align: center;
  color: white;
  border: 3px solid #ffd7b5;
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;
  ::placeholder {
    color: white;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    outline: none;
  }
  @media (min-width: 769px) {
    font-size: 3rem;
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin-top: 0;
  }
`;
export const InputDate = styled.input`
  text-align: center;
  font-size: 1rem;
  background: transparent;
  color: white;
  width: 100%;
  height: 40px;
  color-scheme: dark;
  border: 3px solid #ffd7b5;
  padding: 0 8px 0 0;
  :focus {
    outline: none;
  }
  ::-webkit-calendar-picker-indicator {
    background-color: #b88c61;
    cursor: pointer;
    width: 16px;
    height: 16px;
    padding: 5px;
    border-radius: 8px;
  }
  @media (min-width: 1200px) {
    width: 20%;
    height: 100%;
    padding: 0 16px 0 0;
  }
`;
export const InputText = styled.textarea`
  color: white;
  width: 100%;
  height: 35vh;
  background: transparent;
  resize: none;
  font-size: 1.5rem;
  border: 3px solid #ffd7b5;
  padding: 8px;

  ::placeholder {
    color: white;
    opacity: 0.5;
  }
  :focus {
    ::placeholder {
      color: transparent;
    }
    outline: none;
  }
`;
export const Text = styled.h1`
  font-size: 2.5rem;
  color: #ab815a;
  text-align: center;
  padding: 2% 0;
  @media (min-width: 769px) {
    font-size: 5rem;
    color: #ab815a;
    width: 100%;
    padding: 16px 0;
  }
`;
export const Button = styled.button`
  font-size: 1.5rem;
  height: 70px;
  width: 170px;
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
    height: 90px;
    width: 220px;
    margin: 0 0 16px 0;
  }
`;
export const BackArrow = styled.svg`
  fill: #ab815a;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 32px;
  left: 0;
  transform: translateX(50%);
  cursor: pointer;
`;
