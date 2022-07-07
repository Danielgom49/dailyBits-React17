import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #8762f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

export default class Inicio extends Component {

    render() {
        return (
            <Background>
                <Link to="/login">
                    <Image src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644977814/proyecto-sprint2/Color_Purple_Container_Yes_tugqmh.png" />
                </Link>
            </Background>
        )
    }
}
