import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LoginBg = styled.div`
    background-color: #16161A;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: Inter, sans-serif;
    padding-bottom: 100px;
`


export const Log = styled.div`
    width: 360px;
`


export const LoginIniciar = styled.div`
    display: flex ;
    flex-direction: column;
    color: white;
    justify-content:center;
    text-align: center;
    border-bottom: 1px solid white;
    margin: 5px 0px;
`
export const TitleLogin = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    margin-bottom:32px;
`
export const ButtonLogin = styled.button`
    display: flex ;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 70px;
    margin-bottom:10px;
    background-color:#EF4565;
    border-radius: 4px;
    border: 1px solid #EF4565;
    color:white;
    font-size: 16px;
    font-weight: 600;
`



export const FormLogin = styled(Form)`
    display: flex ;
    flex-direction: column;
    font-size:16px;
`
export const ButtonVerify = styled.button`
    display: flex ;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 10px;
    margin: 10px 50px;
    margin-top: 30px;
    background-color:#EF4565;
    border-radius: 4px;
    border: 1px solid #EF4565;
    color:white;
    font-size: 16px;
    font-weight: 600;
`




export const RedirecLogin = styled.div`
    margin: 30px 0px;
    display: flex ;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
`
export const LinkLogin = styled(Link)`
    color: #2CB67D;
`
