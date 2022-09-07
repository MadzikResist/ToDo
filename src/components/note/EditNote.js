import * as React from 'react';
import {
  Container,
  Form,
  NoteContainer,
  List,
  TitleDate,
  Text,
  InputTitle,
  InputDate,
  InputText,
  Button,
  BackArrow,
} from 'components/note/AddEditNoteStyle';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditNote = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(state.title);
  const [text, setText] = useState(state.text);
  const [date, setDate] = useState(state.date);

  const EditNoteFunction = async () => {
    await axios.put('https://nodejs-to-do-server.herokuapp.com/api/notes/' + state?._id, {
      title,
      text,
      date,
    });
    navigate('/dashboard');
    console.log(title, text, date);
  };

  const changeTitleChandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const changeTextChandler = (event) => {
    const value = event.target.value;
    setText(value);
  };
  const changeDateChandler = (event) => {
    const value = event.target.value;
    setDate(value);
  };
  return (
    <Container>
      <Link to="/dashboard" style={{ textDecoration: 'underline', textDecorationColor: ' white' }}>
        <BackArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </BackArrow>
      </Link>
      <Text>Edit Note</Text>
      <NoteContainer>
        <List>
          <Form>
            <TitleDate>
              <InputTitle
                type="text"
                defaultValue={state?.title}
                spellCheck={false}
                onChange={changeTitleChandler}
              />
              <InputDate
                type="date"
                value={new Date(date)?.toISOString()?.substring(0, 10)}
                onChange={changeDateChandler}
              />
            </TitleDate>
            <InputText
              defaultValue={state?.text}
              spellCheck={false}
              onChange={changeTextChandler}
            />
          </Form>
        </List>
        <Button onClick={EditNoteFunction}>Save</Button>
      </NoteContainer>
    </Container>
  );
};
export default EditNote;
