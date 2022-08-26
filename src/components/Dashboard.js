import styled from 'styled-components';
import backgroundMobile from 'images/backgroundMobile.png';
import background2 from 'images/background2.png';

const Container = styled.div`
  min-height: 100vh;
  padding: 16px 0;
  background: url(${backgroundMobile}) center/cover;
  background-size: contain;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    height: 100vh;
    background: url(${background2}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const ListContainer = styled.div`
  background: rgba(184, 140, 97, 0.7);
  width: 90%;
  height: auto;
  //border: 8px solid #d2b79e;
  border: 8px solid #ffd7b5;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    width: 80%;
    height: 80%;
    display: flex;
    padding: 0 24px;
  }
`;
const Text = styled.h1`
  text-align: center;
  color: white;
  font-size: 1.8rem;
  word-wrap: break-word;

  @media (min-width: 769px) {
    text-align: center;
    color: white;
    font-size: 3rem;
  }
`;
const Title = styled.h2`
  margin: 0;
  color: white;

  width: 100%;
  word-wrap: break-word;
  font-size: 1.6rem;

  @media (min-width: 769px) {
    margin: 0;
    width: 20%;
  }
`;
const Date = styled.p`
  width: 10%;
`;
const TextToDo = styled.p`
  width: 100%;
  word-wrap: break-word;

  @media (min-width: 769px) {
    width: 40%;
  }
`;
const CheckDone = styled.input`
  width: 24px;
  height: 24px;

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
    left: 0.7rem;
    top: 0.2rem;
  }
  :active {
    border: 2px solid #34495e;
  }
`;
const Delete = styled.svg`
  width: 24px;
  height: 24px;
  fill: red;
  cursor: pointer;
`;
const Edit = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: #f4e5c5;
`;
const List = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  //border: 3px solid #d2b79e;
  border: 3px solid #ffd7b5;
  margin-bottom: 16px;
  align-items: center;
  padding: 8px;
  @media (min-width: 769px) {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    align-items: center;
    padding: 8px;
  }
`;
const ListElement = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  //border: 2px solid #d2b79e;
  border: 2px solid #d2b79e;
  margin-bottom: 16px;
  padding: 8px;
  flex-direction: column;
  @media (min-width: 769px) {
    width: 95%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border: 3px solid #ffd7b5;
    margin-bottom: 16px;
    align-items: center;
    padding: 8px;

    flex-direction: row;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10%;
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    width: 25%;
    margin-top: 0;
  }
`;
const CheckBoxLabel = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  padding-right: 16px;

  @media (min-width: 769px) {
  }
`;
const AddButton = styled.svg`
  width: 50px;
  height: 50px;
  fill: white;
  border: 3px solid #d2b79e;
  background: transparent;
  border-radius: 50%;

  cursor: pointer;
  @media (min-width: 769px) {
    width: 60px;
    height: 60px;
    fill: white;
    border: 3px solid #d2b79e;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Dashboard = () => {
  return (
    <Container>
      <ListContainer>
        <Text>Your To Do List</Text>
        <List>
          <ListElement style={{ marginTop: '24px' }}>
            <Title>Titlegfdgdgfkfd;lgfdk;gfk;fdk;fdk;</Title>
            <Date>20.20.2022</Date>
            <TextToDo>
              Musze przytulić swojego
              chłopakfffffgkdfngdgfjdgjdfjgldkgjldfjldjlkgjdlgfjlfdjflgjlkjlja
            </TextToDo>
            <Buttons>
              <CheckBoxLabel>
                <CheckDone type="checkbox"></CheckDone>
                <span style={{ color: 'black', padding: '0.5rem 0.25rem' }}>Done!</span>
              </CheckBoxLabel>
              <Edit xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
              </Edit>
              <Delete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
              </Delete>
            </Buttons>
          </ListElement>
          <ListElement>
            <Title>Title</Title>
            <Date>20.20.2022</Date>
            <TextToDo>Musze przytulić swojego chłopaka</TextToDo>
            <Buttons>
              <CheckBoxLabel>
                <CheckDone type="checkbox"></CheckDone>
                <span style={{ color: 'black', padding: '0.5rem 0.25rem' }}>Done!</span>
              </CheckBoxLabel>
              <Edit xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
              </Edit>
              <Delete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
              </Delete>
            </Buttons>
          </ListElement>
        </List>
        <AddButton xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
        </AddButton>
      </ListContainer>
    </Container>
  );
};
export default Dashboard;
