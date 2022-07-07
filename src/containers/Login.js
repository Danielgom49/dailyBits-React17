import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { users } from '../helpers/users'
import { Image } from 'react-bootstrap'
import { BsGoogle } from 'react-icons/bs'
import { LoginBg, Log, LoginIniciar, FormLogin, ButtonLogin, LinkLogin, RedirecLogin, ButtonVerify, TitleLogin } from '../styled/StyledLogin'
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import TimeComponent from '../components/TimeComponent'



const Login = () => {

    const navigate = useNavigate()
    // Estado para traer la data de la endpoint
    const [login, setLogin] = useState([])
    // Estado para recibir los datos de login 
    const [verify, setVerify] = useState({
        email: '',
        contraseña: ''
    })
    const { email, contraseña } = verify

    // Recibe los cambios de los inputs
    const handleOnchange = ({ target }) => {
        setVerify({
            ...verify,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // Funcion para recoger la data de la endpoint
    const Data = () => {
        axios.get(users)
            .then((response) => {
                setLogin(response.data)
            }).catch(error => {
                console.log(error);
            })
    }

    // Funcion para verificar que el correo si exista en la base de datos
    const filter = () => {
        login.filter(user => {
            const userVerify = user.email.includes(verify.email)
            const passVerify = user.contraseña.includes(verify.contraseña)
            if (userVerify) {
                if (passVerify) {
                    //Función que trae la hora de inicio de sesión
                    TimeComponent()
                    window.localStorage.setItem("Usuario", JSON.stringify(login))
                    navigate('/home')
                } else {
                    console.log('contraseña incorrecta');
                }
            } else {
                console.log('error');
            }
            return (user)
        })
    }

    useEffect(() => {
        Data()
    }, [])

    // Funcion para inicar sesion con Google
    const responseGoogle = (response) => {
        console.log(response.profileObj);
        window.localStorage.setItem('UsuarioRegister', JSON.stringify(response.profileObj))
        TimeComponent()
        navigate('/home')
    }

    return (
        <LoginBg>
            <div className="my-4">
                <Image src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644977814/proyecto-sprint2/Color_Purple_Container_Yes_tugqmh.png" width="80" />
            </div>
            <Log>
                <LoginIniciar>
                    <TitleLogin>Iniciar Sesión</TitleLogin>
                    <GoogleLogin
                        clientId="659598802935-6nv11823hotrc6hq67vjmnqjsga3u4k2.apps.googleusercontent.com"
                        render={renderProps => (<ButtonLogin onClick={renderProps.onClick} disabled={renderProps.disabled}> <BsGoogle /> Continuar con Google</ButtonLogin>)} onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
                </LoginIniciar>
                <FormLogin onSubmit={handleSubmit} >
                    <label for="email" className="text-white mx-3 mb-2">Correo electrónico</label>
                    <input className="p-2 border-white border-1 rounded" id="email" type="email" name="email" value={email} onChange={handleOnchange} placeholder="Ingrese su correo eléctronico" autoComplete="off" />
                    <label for="contraseña" className="text-white mx-3 mb-2 mt-2">Contraseña</label>
                    <input className="p-2 border-white border-1 rounded" id="contraseña" type="password" name="contraseña" value={contraseña} onChange={handleOnchange} placeholder="Ingrese su contraseña" autoComplete="off" />
                    <ButtonVerify className="text-center" onClick={() => filter()}>Iniciar Sesión</ButtonVerify>
                </FormLogin>
                <RedirecLogin className="m-2">
                    <LinkLogin to="/administrador">Administrador</LinkLogin>
                    <p className="text-white my-3 ">¿Aún no tienes una cuenta? <LinkLogin to="/register" style={{ textDecoration: 'none' }}>Incribirse</LinkLogin></p>
                </RedirecLogin>
            </Log>
        </LoginBg>
    )
}

export default Login