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
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState();
  const [done, setDone] = useState(false);

  const addNoteFunction = async () => {
    await axios.post('http://localhost:3001/api/notes', { title, text, date, done });
    navigate('/dashboard');
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
      <Text>Add Note</Text>
      <NoteContainer>
        <List>
          <Form>
            <TitleDate>
              <InputTitle
                type="text"
                placeholder={'Title'}
                spellCheck={false}
                value={title}
                onChange={changeTitleChandler}
              />
              <InputDate type="date" value={date} onChange={changeDateChandler} />
            </TitleDate>
            <InputText
              placeholder={'text'}
              spellCheck={false}
              value={text}
              onChange={changeTextChandler}
            />
          </Form>
        </List>
        <Button onClick={addNoteFunction}>Save</Button>
      </NoteContainer>
    </Container>
  );
};
export default AddNote;
