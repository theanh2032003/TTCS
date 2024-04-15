import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
import loginImage from "./loginImage.jpg";
import { loginApi, registerApi, changePasswordApi } from '../service/userService';

const Login = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [errorLoginMessage, setErrorLoginMessage] = useState('');
  const [errorRegisterMessage, setErrorRegisterMessage] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerFullName, setRegisterFullname] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerTextId, setRegisterTextId] = useState('');
  const [confirmToken, setConfirmToken] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loginEmail) {
      setErrorLoginMessage('Please enter your email.');
    } else if (!emailRegex.test(loginEmail)) {
      setErrorLoginMessage('Invalid email format.');
    } else {
      setErrorLoginMessage('');
    }
  }, [loginEmail]);



  const showRegisterForm = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowChangePassword(false);
  };

  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowChangePassword(false);
  };

  const showChangePasswordForm = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowChangePassword(true);
  };

  const closeForm = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowChangePassword(false);
  };

  const handleLogin = async() => {


    try{
    let res = await loginApi(loginEmail, loginPassword); 
    localStorage.setItem('jwtToken', res.data.jwtToken);
    localStorage.setItem('userId',res.data.userId);
    navigate('/home',{replace : true});  
    } catch (error) {
      if (error.response) {
        const { data, status } = error.response;
        if (status === 401) {
          
          setErrorLoginMessage("Sai thông tin đăng nhập");
        } else {
          // Xử lý các lỗi khác (nếu cần)
          setErrorLoginMessage('Something went wrong');
        }
      } else {
        setErrorLoginMessage('Something went wrong');
      }
    }
    
 
  };

  const handleRegister = async () => {

    if (!emailRegex.test(registerEmail)) {
      setErrorRegisterMessage('Invalid email format.');
      return;
    }

    try{
    let res = await registerApi(registerEmail, registerPassword, registerFullName, registerTextId);      
    } catch(error){
      if (error.response) {
        const { data, status } = error.response;
        if (status === 400) {
          
          setErrorRegisterMessage(data);
        } else {
          // Xử lý các lỗi khác (nếu cần)
          setErrorRegisterMessage('Something went wrong');
        }
      } else {
        setErrorRegisterMessage('Something went wrong');
      }
    }

  }

  const handleChangePassword = async(email,password) => {
    try{
      let res = await changePasswordApi(email,password);
    }catch(error){
      if (error.response) {
        const { data, status } = error.response;
        if (status === 404) {
          
          setErrorLoginMessage("email không tồn tại");
        } else {
          
          setErrorRegisterMessage('Something went wrong');
        }
      } else {
        setErrorRegisterMessage('Something went wrong');
      }
    }
    
    
  }

  return (
    <div className='login'>
      <div className='loginContainer'>
        <div className='loginImage'>
          <img src={loginImage} alt='Image' />
        </div>

        <div className='mainLogin'>
          <span>Đang diễn ra ngay bây giờ</span>
          <h1>Tham gia ngay</h1>

          <div className='loginBtn' onClick={showLoginForm}>
            <p>Đăng nhập</p>
          </div>
          <div className="orContainer">
            <div className="line"></div>
            <div className="text">Text</div>
            <div className="line"></div>
          </div>
          <div className='loginBtn' onClick={showRegisterForm}>
            <p>Đăng kí</p>
          </div>
        </div>
      </div>

      {showRegister && (
        <div className='form' id='register'>
          <div className='inputForm'>
            <CloseIcon className='closeIcon' onClick={closeForm} />

            {showForm && (
              <div className='inputForm'>
                <p className='textHeader'>Đăng ký tài khoản</p>
                <input className="input" type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input className="input" type="text" placeholder="Họ tên" value={registerFullName} onChange={(e) => setRegisterFullname(e.target.value) }/>
                <input className="input" type="text" placeholder="TextId" value={registerTextId} onChange={(e) => setRegisterTextId(e.target.value) } />
                <input className="input" type="password" placeholder="Mật khẩu" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                {errorRegisterMessage && <p className="errorMessage">{errorRegisterMessage}</p>}
                <div className="loginBtn btnForm" onClick={handleRegister}>Đăng ký</div>
              </div>
            )}
            
            {showConfirm && (
              <div className='inputForm'> 
                <p className='textHeader'>Nhập mã xác nhận</p>
                <input className="input" type="email" value={confirmToken} placeholder="Token" onChange={(e) => setConfirmToken( e.target.value)} />
                <div className="loginBtn btnForm" onClick={handleChangePassword}>Xác nhận</div>
                <p className="loginText" >Đã có tài khoản? <a  onClick={showLoginForm}>Đăng nhập</a></p>    
              </div>      
            )}

          </div>
        </div>
      )}

      {showLogin && (
        <div className='form' id='login'>
          <div className='inputForm'>
            <CloseIcon className='closeIcon' onClick={closeForm} />
            <p className='textHeader'>Đăng nhập</p>
            <input className="input" type="email" value={loginEmail} placeholder="Email" onChange={(e) => setLoginEmail( e.target.value)} />
            
            <input className="input" type="password" value={loginPassword} placeholder="Mật khẩu" onChange={(e) => setLoginPassword(e.target.value)} />
            {errorLoginMessage && <p className="errorMessage">{errorLoginMessage}</p>}
            <div className="loginBtn btnForm" onClick={handleLogin}>Đăng nhập</div>
            <p className="loginText">Quên mật khẩu? <a  onClick={showChangePasswordForm} >Đổi mật khẩu</a></p>
            <p className="loginText">Chưa có tài khoản? <a  onClick={showRegisterForm} >Đăng ký</a></p>
          </div>
        </div>
      )}

      {showChangePassword && (
        <div className='form' id='login'>
          <div className='inputForm'>
            <CloseIcon className='closeIcon' onClick={closeForm} />
            {showForm && (
              <div className='inputForm'>
                <p className='textHeader'>Đổi mật khẩu</p>
                <input className="input" type="email" value={loginEmail} placeholder="Email" onChange={(e) => setLoginEmail( e.target.value)} />
                <input className="input" type="password" value={changePassword} placeholder="Mật khẩu mới" onChange={(e) => setChangePassword(e.target.value)} />
                {errorLoginMessage && <p className="errorMessage">{errorLoginMessage}</p>}
                <div className="loginBtn btnForm" onClick={handleChangePassword}>Đổi mật khẩu</div>                
              </div>
            )}


            {showConfirm && (
              <div className='inputForm'>
                <p className='textHeader'>Nhập mã xác nhận</p>
                <input className="input" type="email" value={confirmToken} placeholder="Token" onChange={(e) => setConfirmToken( e.target.value)} />
                <div className="loginBtn btnForm" onClick={handleChangePassword}>Xác nhận</div>
                {errorLoginMessage && <p className="errorMessage">{errorLoginMessage}</p>}
                          
              </div>
            )}

            <p className="loginText" >Quay lại <a  onClick={showLoginForm}>Đăng nhập</a></p>   

          </div>
        </div>
      )}




    </div>
  );
}


export default Login