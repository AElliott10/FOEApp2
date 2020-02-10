import React, { useState } from "react";
import { MainHeader } from "../Components/Header_Footer/MainHeader";
import { SimpleBottomNavigation } from "../Components/Header_Footer/BottomNav";
import { createGlobalStyle } from 'styled-components';
import { createCalendar } from '../Components/kidCalendar/notesArray';
import Note from '../Components/kidCalendar/boxContainer';
import StyledNotes from '../Components/kidCalendar/magicalNotesStyles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
body {
  margin: 50px;
}
`
const useStyles = makeStyles(theme => ({

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px',
    margin:'auto',
    border:'none',
  },

  paper: {
    backgroundColor: '#004940',
    color:'#ffffff',
    fontFamily: 'sans-serif',
    //boxShadow: theme.shadows[5],
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
        className={classes.modal}
        open={selectedNote.open}
        onClose={!selectedNote.open}
        onClick={handleFlipNote}
        >
          
        <Fade in={selectedNote.open}>
          <div className={classes.paper}>

            <h2 id="personalized-greeting">
              Dear ,</h2>
          
            <h2 id="countdown">{selectedNote.countdown}</h2>
            
            <h2 id="note-body">{selectedNote.text}</h2>
            
            <h2 id="elf-closing">
              Love, 
            </h2>
          </div>
        </Fade>
      </Modal>

      <SimpleBottomNavigation />
    </>

  );
}


export default MagicalNotes;

/*
<h1 id="personalized-greeting"> Dear </h1>
          <h1 id="note-body"> 
          Body
          </h1>
          <h1 id="elf-names"> Love, </h1>
          */

          /*<h2 id="personalized-greeting">
              Dear {child_1_first_name } and {child_2_first_name} and {child_3_first_name},</h2>
              
              <h2 id="elf-closing">
              Love, {elf_1 } and {elf_2}
            </h2>
              */