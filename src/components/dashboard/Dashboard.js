import * as React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  List,
  TitleDate,
  Text,
  ButtonAddNote,
  ListContainer,
  TitleButton,
  ListElement,
  Title,
  Date,
  TextButtons,
  TextToDo,
  Buttons,
  CheckBoxLabel,
  Edit,
  CheckDone,
  Delete,
  LogoutButton,
} from './Dashboard.Style';
// const NOTES = [
//   { _id: '1234', title: 'Łukaś', date: new window.Date(), description: 'Moja super notatka' },
//   { _id: '1235', title: 'Łukaś', date: new window.Date(), description: 'Moja super notatka' },
//   { _id: '1236', title: 'Łukaś', date: new window.Date(), description: 'Moja super notatka' },
//   { _id: '1237', title: 'Łukaś', date: new window.Date(), description: 'Moja super notatka' },
// ];
const Dashboard = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  // const fetchNotes = async () => {
  //   //pobieranie notatek
  //   const res = await axios.get('http://localhost:3001/api/notes');
  //   setNotes(res.data);
  //   console.log(res);
  // };

  // useEffect(() => {
  //   fetchNotes();
  // }, []);
  const getUserNotes = async () => {
    const req = await fetch('https://nodejs-to-do-server.herokuapp.com/api/notes', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
    });
    const data = await req.json();
    setNotes(data);
    console.log('notes', data);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserNotes();
    } else {
      localStorage.removeItem('token');
      navigate('/');
    }
  }, []);
  const deleteNote = async (_id) => {
    console.log('usuwanie notatki', _id);

    setNotes((prevState) => {
      const copyOfArray = [...prevState];
      const indexId = copyOfArray.findIndex((element) => {
        return element._id === _id;
      });
      copyOfArray.splice(indexId, 1);
      return copyOfArray;
    });
    await axios.delete('https://nodejs-to-do-server.herokuapp.com/api/notes/' + _id);
  };
  const check = (_id, done) => {
    const newToDoList = notes.map((note) => {
      if (note._id === _id) return { ...note, done: !note.done };
      return note;
    });

    setNotes(newToDoList);
    console.log(newToDoList);
    axios.put('https://nodejs-to-do-server.herokuapp.com/api/notes/' + _id, { done: !done });
  };
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <Container>
      <TitleButton>
        <Text>Your To Do List</Text>
        {/*<AddButton xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">*/}
        {/*  <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />*/}
        {/*</AddButton>*/}
        <Link to="/add-note" style={{ textDecoration: 'underline', textDecorationColor: ' white' }}>
          <ButtonAddNote style={{ margin: '0' }}>Add Note</ButtonAddNote>
        </Link>
      </TitleButton>
      <ListContainer>
        <List>
          {notes?.length > 0 &&
            notes.map(({ _id, title, date, text, done }) => {
              return (
                <ListElement key={_id} style={{ marginTop: '24px' }}>
                  <TitleDate>
                    <Title>{title}</Title>
                    <Date>{dayjs(date).format('DD. MM. YYYY')}</Date>
                  </TitleDate>
                  <TextButtons>
                    <TextToDo>{text}</TextToDo>
                    <Buttons>
                      <CheckBoxLabel>
                        <CheckDone
                          type="checkbox"
                          checked={done}
                          onChange={() => check(_id, done)}
                        ></CheckDone>
                        <span style={{ color: 'black', padding: '0 0 0 8px', margin: '0 0 0 0' }}>
                          Done!
                        </span>
                      </CheckBoxLabel>
                      <Link
                        to="/edit-note"
                        style={{ textDecoration: 'underline', textDecorationColor: ' white' }}
                        state={{ _id, title, text, date, done }}
                      >
                        <Edit xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
                        </Edit>
                      </Link>
                      <Delete
                        onClick={() => deleteNote(_id)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
                      </Delete>
                    </Buttons>
                  </TextButtons>
                </ListElement>
              );
            })}
        </List>
      </ListContainer>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </Container>
  );
};
export default Dashboard;
