import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap'
import { users } from '../helpers/users'
import { StyledStatistics, Results } from '../styled/StyledStatistics'

const Admin = () => {

    const [admin, setAdmin] = useState([])

    const getData = () => {
        axios.get(users)
            .then((response) => {
                setAdmin(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(admin);
    return (
        <StyledStatistics style={{ height: '100vh' }}>
            <div>
                <div>
                    <h1 style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'left', margin: '10px' }}>Usuarios</h1>
                </div>
                <Results>
                    <Table striped bordered hover style={{ color: 'white', marginTop: '100px' }}>
                        <thead className="p-20">
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        {
                            admin.map(a => (
                                <tbody key={a.id} className="p-20">
                                    <tr>
                                        <td style={{ color: 'white' }}>{a.id}</td>
                                        <td style={{ color: 'white' }}>{a.nombre}</td>
                                        <td style={{ color: 'white' }}>{a.email}</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </Table>
                    <a style={{ border: '2px solid red', padding: '10px 20px', background: 'red', textDecoration: 'none', color: 'white', borderRadius: '10px', marginTop: '50px' }} href="/home">Regresar</a>
                </Results>
            </div>
        </StyledStatistics>
    )
}

export default Admin