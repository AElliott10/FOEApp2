import styled from 'styled-components';
/*import noteContainerBackdrop from './img/retina_wood.png';
background: center / cover url(${noteContainerBackdrop});*/

export const ContainerStyled = styled.div`
padding-top: 100%;
position: relative;
cursor: pointer;

.front {
    background: red;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 20px;
        width: 50%
        height: 50%
        border-radius: 50%;
        font-weight: 700;
        font-size: 4rem;
    }

    &.open {
        transform: rotateY(180deg);
    }
}

.back {
    position: absolute;
    background-color: brown;
    top: 0px;
    left: 0px;
    z-index: 1;
    transform: rotateY(180deg);

    &.open{
        z-index: 2;
        transform: rotateY(0deg);
    }

    p{
        color: #fff;
        padding: 10px;
        font-size: 1.4 rem;
        text-align: center;
    }
}

>div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all .5s;
    transform-style: preserve-3d;
    border-radius; 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
}

`
export default ContainerStyled;