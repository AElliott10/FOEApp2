import React from 'react';
import ContainerStyled from './noteContainerStyles'

// This is how we get the box to open the modal.
const Note = ({ noteData: { id, num, type, day, countdown,text, open }, handleClick }) => (
    <ContainerStyled onClick={() => handleClick(id)}>
        <div className={open ? "front open" : "front"}>
            <p>{num}</p>
        </div>

    </ContainerStyled>
)

export default Note;
/*<p>{text}</p>

<div className={open ? "back open" : "back"}>
        </div>*/