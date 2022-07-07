import styled from 'styled-components'

export const StyledHome = styled.div`
    background-color: #16161A;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    width:100%;
    height:70%;
`

export const StyledParagraph = styled.div`
    font-size: 18px;
    font-family: Inter, sans-serif;
    margin: 20px 0px;
    text-align: center;
`
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0px;
`

export const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`

export const SectionPrueba = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 30px;
`


export const StyledImage = styled.div`
    border: 10px solid #DDDDDD;
    border-radius: 50%;
    &:hover{
     border: 10px solid #2CB67D;
    }
`