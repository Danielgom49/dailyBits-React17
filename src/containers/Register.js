import React, { useState } from 'react';
import axios from 'axios';
import { users } from '../helpers/users'
import { fileUpload } from '../helpers/fileUpload';
import { Image } from 'react-bootstrap'
import { RegisterBg, Reg, RegisterIniciar, FormRegister, RedirecRegister, ButtonRegister, TitleRegister } from '../styled/StyledRegister'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()
    // Estado donde recibe los dato de los inputs
    const [register, setRegister] = useState({
        id: '',
        nombre: '',
        imageUrl: '',
        email: '',
        contraseña: ''
    })
    const { id, nombre, imageUrl, email, contraseña } = register
    // Función que trae los valores de los inputs
    const handleOnchange = ({ target }) => {
        setRegister({
            ...register,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // Funcion donde se almacena la imagen en el cloudinary
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                register.imageUrl = response
            }).catch(error => {
                console.log(error);
            })
    }
    // Función donde almacena los datos recibidos en la endpoint
    const postData = async () => {
        axios.post(users, register)
            .then(response => navigate('/login'))
            .catch(error => console.log(error))
        window.localStorage.setItem("UsuarioRegister", JSON.stringify(register))
    }

    return (
        <RegisterBg>
            <div className="my-4">
                <Image src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644977814/proyecto-sprint2/Color_Purple_Container_Yes_tugqmh.png" width="80" />
            </div>
            <Reg>
                <RegisterIniciar>
                    <TitleRegister>Registrarse</TitleRegister>
                </RegisterIniciar>
                <FormRegister onSubmit={handleSubmit} >
                    <label className="text-white mx-3 mb-2 mt-2">Nombre</label>
                    <input id="nombre" type="text" className="p-2 border-white border-1 rounded" value={nombre} name="nombre" placeholder="Ingrese su nombre" onChange={handleOnchange} autoComplete="off" />

                    <label className="text-white mx-3 mb-2 mt-2">Correo electrónico</label>
                    <input id="email" type="email" className="p-2 border-white border-1 rounded" value={email} name="email" placeholder="Ingrese su correo eléctronico" onChange={handleOnchange} autoComplete="off" />

                    <label className="text-white mx-3 mb-2 mt-2">Contraseña</label>
                    <input id="contraseña" type="password" className="p-2 border-white border-1 rounded" value={contraseña} name="contraseña" placeholder="Ingrese su contraseña" onChange={handleOnchange} autoComplete="off" />

                    <label className="text-white mx-3  mt-2">Imagen</label>
                    <input id="imageUrl" type="file" className="p-2  mx-2 border-white border-1 rounded text-white" value={imageUrl} name="imageUrl" onChange={handleFileChange} />
                </FormRegister>
                <RedirecRegister className="m-3">
                    <ButtonRegister className="text-center" onClick={() => postData()}>Registrar</ButtonRegister>
                </RedirecRegister>
            </Reg>
        </RegisterBg>
    )
}

export default Register