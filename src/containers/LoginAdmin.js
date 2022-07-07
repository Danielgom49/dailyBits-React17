import React from 'react'
import { Image } from 'react-bootstrap'
import { LoginBg, Log, LoginIniciar, ButtonLogin, RedirecLogin, TitleLogin } from '../styled/StyledLogin'
import { BsGoogle } from 'react-icons/bs'
import GoogleLogin from 'react-google-login';
import TimeComponent from '../components/TimeComponent'
import { useNavigate } from 'react-router-dom';


const LoginAdmin = () => {

    const navigate = useNavigate()

    const responseGoogle = (response) => {
        TimeComponent()
        console.log(response.profileObj);
        window.localStorage.setItem('Administrador', JSON.stringify(response.profileObj))
        navigate('/home')
    }

    return (
        <LoginBg style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="my-4">
                <Image src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644977814/proyecto-sprint2/Color_Purple_Container_Yes_tugqmh.png" width="80" />
            </div>
            <Log>
                <LoginIniciar>
                    <TitleLogin>Administrador</TitleLogin>
                </LoginIniciar>
                <RedirecLogin className="my-3 py-3">
                    <GoogleLogin
                        clientId="659598802935-6nv11823hotrc6hq67vjmnqjsga3u4k2.apps.googleusercontent.com"
                        render={renderProps => (<ButtonLogin onClick={renderProps.onClick} disabled={renderProps.disabled}> <BsGoogle style={{ margin: '0px 10px' }} /> Continuar con Google</ButtonLogin>)} onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
                </RedirecLogin>
            </Log>
        </LoginBg >
    )
}

export default LoginAdmin