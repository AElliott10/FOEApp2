import React, { useState } from "react";
import { MainHeader } from "../Components/Header_Footer/MainHeader";
import { SimpleBottomNavigation_2 } from "../Components/Header_Footer/BottomNav_2";
import { createGlobalStyle } from 'styled-components';
import { createCalendar } from '../Components/kidCalendar/notesArray';
import Note from '../Components/kidCalendar/boxContainer';
import StyledNotes from '../Components/kidCalendar/magicalNotesStyles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
body {
  
  margin: 0;
}
`
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    position: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function MagicalNotes() {
  const classes = useStyles();

  const [notes, setNotes] = useState(createCalendar);

  // console.log(notes);

  const [selectedNote, selectNote] = useState({});

  const handleFlipNote = id => {
    const updatedContainer = notes.map(note => {
      if(selectedNote.open === true){
        selectedNote.open = false;
      }
      if (id === note.id) {
        let modalNote = note;
        modalNote.open = !modalNote.open;
        selectNote(modalNote);
      }
      return note.id === id ? { ...note, open: !note.open } : note
    });
    setNotes(updatedContainer);
  }

    return (
    <>
      <MainHeader />
      <GlobalStyle />
      <StyledNotes>
        {notes.map(note =>
          <div>
            <Note
              key={note.id}
              noteData={note}
              handleClick={handleFlipNote}
            />
          </div>
        )}
      </StyledNotes>
      <Modal
        open={selectedNote.open}
        onClose={!selectedNote.open}
        onClick={handleFlipNote}>
        <Fade in={selectedNote.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{selectedNote.text}</h2>
          </div>
        </Fade>
      </Modal>
            <SimpleBottomNavigation_2 />
    </>

  );
}


export default MagicalNotes;
