import React from 'react';
import ContainerStyled from './noteContainerStyles'

//
const Note = ({ noteData: { id, num, type, day, text, open }, handleClick }) => (
    <ContainerStyled onClick={() => handleClick(id)}>
        <div className={open ? "front open" : "front"}>
            <p>{num}</p>
        </div>

        <div className={open ? "back open" : "back"}>
        </div>
    </ContainerStyled>
)

export default Note;
//<p>{text}</p>