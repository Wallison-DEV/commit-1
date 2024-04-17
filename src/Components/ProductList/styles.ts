import styled from 'styled-components'
import { Cores, breakpoints } from '../../styles'
import { Button } from '../Button/styles'

export const Container = styled.section`
    padding: 56px 0 120px;
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visivel {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`
export const ModalContent = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    width: 1024px;
    height: 344px;
    padding: 32px;
    background-color: ${Cores.salmao};
    color: ${Cores.branco};

    h4 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    .productImg {
        width: 280px;
        height: 280px;
        margin-right: 24px;
        object-fit: cover;
    }
    @media (max-width: ${breakpoints.desktop}) {
        padding: 24px; 
        margin: 40px auto;
    }
    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        height: auto; 
        align-items: center; 
        text-align: center; 
        padding: 24px; 
        margin: 10vh auto;

        .productImg {
            width: 100%;
            height: auto; 
            margin: 16px 0;
        }

        h4 {
            margin-top: 0; 
        }

        ${Button} {
            width: 100%;
        }
    }
`
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    weight: 400;
    line-height: 22px;
    width: 656px;
    height: 176px;
    
    @media (max-width: ${breakpoints.desktop}) {
        justify-content: center;
        max-width: 100%;
        width: 100%;
        gap: 8px;
    }
`

export const CloseIcon = styled.img`
    position: absolute;
    max-width: 16px;
    max-height: 16px;
    top: 8px;
    right: 8px;
    cursor: pointer;
`
