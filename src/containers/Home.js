import React from 'react'
import Nav from '../components/Nav';
import { Image } from 'react-bootstrap';
import { StyledHome, StyledParagraph, Section, Section1, Section2, SectionPrueba, StyledImage } from '../styled/StyledHome'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <StyledHome>
                <StyledParagraph>
                    <p>Practica tus conocimientos en la categoría que prefieras</p>
                </StyledParagraph>

                <Section>
                    {/* SECCION 1 HTML */}
                    <Link to='/question' style={{ textDecoration: 'none', color: 'white' }}>
                        <Section1>
                            <StyledImage>
                                <Image className="p-2" src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645043735/proyecto-sprint2/Ellipse_9_nd1v1e.png" />
                            </StyledImage>
                            <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px' }} >HTML</h1>
                        </Section1>
                    </Link>

                    {/* SECCION 2 CSS Y JS */}

                    <Section2>
                        <Link to='/question2' style={{ textDecoration: 'none', color: 'white' }}>

                            <SectionPrueba>
                                <StyledImage>
                                    <Image className="p-2" src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645044533/proyecto-sprint2/Ellipse_9_1_r4nkp3.png" />
                                </StyledImage>
                                <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px' }} >CSS</h1>
                            </SectionPrueba>
                        </Link>

                        <Link to='/question3' style={{ textDecoration: 'none', color: 'white' }}>
                            <SectionPrueba>
                                <StyledImage>
                                    <Image className="p-2" src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645044536/proyecto-sprint2/Ellipse_9_2_k9y3dn.png" />
                                </StyledImage>
                                <h1 style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px' }} >JS</h1>
                            </SectionPrueba>
                        </Link>

                    </Section2>

                </Section>
            </StyledHome>
            <Nav />
        </div>
    )
}

export default Home