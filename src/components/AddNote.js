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
} from './AddEditNoteStyle';
import { Link } from 'react-router-dom';

const AddNote = () => {
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
              <InputTitle type="text" placeholder={'Title'} />
              <InputDate type="date" />
            </TitleDate>
            <InputText placeholder={'text'} spellCheck={false} />
          </Form>
        </List>
        <Button>Save</Button>
      </NoteContainer>
    </Container>
  );
};
export default AddNote;
