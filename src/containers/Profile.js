import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import { StyledProfile, StyledUser, SignOff } from '../styled/StyledProfile'


const Profile = () => {

    // Estado donde se guarda la data del usuario para mostrarla en el perfil
    const [profileUser, setProfileUser] = useState([])
    const [url, setUrl] = useState(false)

    // Función para traer los datos que estan en el localStorage
    const Data = () => {
        const data = window.localStorage.getItem("UsuarioRegister")
        const dataAdmin = window.localStorage.getItem("Administrador")
        const obj = JSON.parse(data)
        const objAdmin = JSON.parse(dataAdmin)

        if (objAdmin !== null) {
            setProfileUser([objAdmin])
            setUrl(true)
        }
        else {
            setProfileUser([obj])
        }
    }
    useEffect(() => {
        Data()
    }, [])



    return (
        <div>
            <StyledProfile>
                <div>
                    <h1 style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'left' }}>Perfil</h1>
                    {
                        profileUser.map((u, index) => (
                            <StyledUser key={index}>
                                <Image src={u.imageUrl} width="150" height="150" style={{ borderRadius: '50%' }} />
                                <h2>{u.nombre}</h2>
                                <p>{u.email}</p>
                            </StyledUser>
                        ))
                    }
                    <SignOff style={{ display: 'flex', flexDirection: 'column' }}>
                        {url &&
                            <a href="/admin" style={{ fontSize: '16px', color: '#2CB67D', fontWeight: '600', lineHeight: '24px', textDecoration: 'none', marginBottom: '10px' }}>Ver Usuarios</a>
                        }
                        <Link to="/login" style={{ fontSize: '16px', color: '#EF4565', fontWeight: '600', lineHeight: '24px', textDecoration: 'none' }}> Cerrar Sesión</Link>
                    </SignOff>
                </div>
            </StyledProfile>
            <Nav />
        </div>
    )
}

export default Profile