import React, { Component } from "react";
import { createCalendar } from '../Components/kidCalendar/notesArray';
import { makeStyles } from '@material-ui/core/styles';


    const useStyles = makeStyles(theme => ({
        button: {
          //alignItems: 'center',
          
        },
      }));
function closeButton() {
         
    const classes = useStyles();

  const [notes, setNotes] = useState(createCalendar);

  const [selectedNote, selectNote] = useState({});
    const closeModal = id => {
        const Modal = notes.map(note => {
            if (id === note.id) {
                let modalNote = note;
                modalNote.open = false;
                selectNote(modalNote);
                //console.log(modalNote)
            }
            close(); {
                this.useState({ modalClose: false });
            }

            render(); {
                return (
                    <Button onClick={this.close}>
                        Close
          </Button>
                );
            }
        })
    }
}

export default closeButton;


/*const closeModal = id => {
    notes.map(note => {
      if (id === note.id) {
        let modalNote = note;
        modalNote.close = false;
        selectNote(modalNote);
        //console.log(modalNote)
      }

      // closeModal(); {
      // this.useState({ Modal: false });
      //}

    })
  };
  const [static propTypes] = {
    onClose: PropTypes.func.isRequired
  };
*/