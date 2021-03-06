import React, { Component } from 'react'
import axios from 'axios';
import { StyledQuestion, StyledBar, FormStyle, ButtonStyle, Answer, Results } from '../styled/StyledQuestion';
import { Link } from 'react-router-dom';
import { Form, Image, ProgressBar } from 'react-bootstrap'
import { dataQuestion2 } from '../helpers/dataQuestion2'
import TimeFinally from '../components/TimeFinally';


export default class Question2 extends Component {

    constructor() {
        super();
        this.state = {
            numberQuestion: 0,
            question: {
                question: "",
                a: "",
                b: "",
                c: "",
                correct: ""
            },
            score: 0,
            answerSelect: "",
            porcent: 0
        }
    }

    componentDidMount() {
        axios.get(dataQuestion2)
            .then(response => {
                const currentData = response.data[this.state.numberQuestion]
                this.setState({
                    question: {
                        question: currentData.question,
                        a: currentData.a,
                        b: currentData.b,
                        c: currentData.c,
                        correct: currentData.correct
                    }
                })
            }).catch(error => {
                console.log(error);
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()

        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({ score: this.state.score + 1 })
            this.setState({ porcent: this.state.porcent + 33 })
        }
        if (this.state.numberQuestion < 3) {
            this.componentDidMount()
        } else {
            window.localStorage.setItem("Score2", JSON.stringify(this.state.score))
            TimeFinally()
            console.log('Terminó');
            window.location = '/home';
        }
    }

    onChanged = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    render() {
        return (
            <StyledQuestion>
                <StyledBar>
                    <Link className="px-3" to='/home'>
                        <Image src='https://res.cloudinary.com/dvcxyjkko/image/upload/v1645143467/proyecto-sprint2/Property_1_x_efkp2f.svg' />
                    </Link>
                    <div style={{ width: '250px' }}>
                        <ProgressBar variant="success" now={this.state.porcent} label={`${this.state.porcent}%`} visuallyHidden style={{ height: '12px', borderRadius: '10px' }} />
                    </div>
                    <div className="px-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='https://res.cloudinary.com/dvcxyjkko/image/upload/v1645143549/proyecto-sprint2/Property_1_heart_aas4ox.svg' />
                        <h5 className="px-2">{this.state.score}</h5>
                    </div>
                </StyledBar>
                <div >
                    <Answer>
                        <Image src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645153174/proyecto-sprint2/Property_1_2_ekqta6.png" width="150" height="200" />
                        <h2 style={{ fontSize: '22px', fontWeight: '700', margin: '20px', lineHeight: '35px' }}>{this.state.question.question}</h2>
                    </Answer>
                    <FormStyle onSubmit={this.handleSubmit}>
                        <Form.Group className='mb-3' controlId='control_radio'>
                            <Results>
                                <label for="Respuesta1">{this.state.question.a}</label>
                                <Form.Check
                                    type="radio"
                                    value={this.state.question.a}
                                    name={"Respuestas"}
                                    id={"Respuesta1"}
                                    onChange={this.onChanged}
                                />
                            </Results>
                            <Results>
                                <label for="Respuesta2">{this.state.question.b}</label>
                                <Form.Check
                                    type="radio"
                                    value={this.state.question.b}
                                    name={"Respuestas"}
                                    id={"Respuesta2"}
                                    onChange={this.onChanged}
                                />
                            </Results>
                            <Results>
                                <label for="Respuesta3">{this.state.question.c}</label>
                                <Form.Check
                                    type="radio"
                                    value={this.state.c}
                                    name={"Respuestas"}
                                    id={"Respuesta3"}
                                    onChange={this.onChanged}
                                />
                            </Results>

                        </Form.Group>
                        <ButtonStyle variant="primary" type="submit" onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }} >
                            COMPROBAR
                        </ButtonStyle>
                    </FormStyle>
                </div>
            </StyledQuestion >
        )
    }
}
