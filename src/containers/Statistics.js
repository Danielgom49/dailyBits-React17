import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaChevronDown } from 'react-icons/fa'
import Nav from '../components/Nav'
import { StyledStatistics, Results, Answer } from '../styled/StyledStatistics'
import { dataStatistics } from '../helpers/dataStatistics'
import TimeFinally from '../components/TimeFinally';
import TimeComponent from '../components/TimeComponent'


const Statistics = () => {

    const [time, setTime] = useState()
    const [resp, setResp] = useState({
        correctas: '',
        incorrectas: ''
    })
    // Funcion para traer los resultados almacenados en que localStorage
    const Score = () => {
        const score = window.localStorage.getItem("Score")
        const obj = JSON.parse(score)

        const score2 = window.localStorage.getItem("Score2")
        const obj2 = JSON.parse(score2)

        const score3 = window.localStorage.getItem("Score3")
        const obj3 = JSON.parse(score3)

        const timeUser = TimeComponent() - TimeFinally()
        setTime(timeUser)

        const correctas = obj + obj2 + obj3
        const incorrectas = 9 - correctas

        const results = {
            correctas,
            incorrectas,
        }
        setResp(results)
    }

    // const getData = () => {
    //     axios.post(dataStatistics, resp)
    //         .then(response => {
    //             console.log(response);
    //             setResp(response.data)
    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }

    useEffect(() => {
        Score()
    }, [])

    return (
        <div>
            <StyledStatistics>
                <div>
                    <div>
                        <h1 style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'left' }}>Estadísticas</h1>
                    </div>
                    <div>
                        <p>Los últimos 7 días <FaChevronDown /> </p>
                    </div>
                    <Results>
                        <Answer>
                            <p>Tiempo de estudio (horas)</p>
                            <p>{time}</p>
                        </Answer>
                        <Answer>
                            <p>Respuestas contestadas</p>
                            <p>9</p>
                        </Answer>
                        <Answer>
                            <p>Respuestas correctas</p>
                            <p style={{ color: '#2CB67D' }} >{resp.correctas}</p>
                        </Answer>
                        <Answer>
                            <p>Respuestas incorrectas</p>
                            <p style={{ color: '#EF4565' }} >{resp.incorrectas}</p>
                        </Answer>
                    </Results>
                </div>
            </StyledStatistics>
            <Nav />
        </div>
    )
}

export default Statistics