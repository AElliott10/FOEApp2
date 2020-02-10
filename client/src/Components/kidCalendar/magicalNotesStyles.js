//This is where you can resize the boxes on the Magical Notes page. 


import styled from 'styled-components';

export const StyledNotes = styled.div`
display: grid;
grid-gap: 60px;
grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
padding: 0 px;
`
export default StyledNotes;