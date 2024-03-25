import React from 'react'
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
import loginImage from "./loginImage.jpg";
const login = () => {
  return (
    <div className='login'>
      <div className='loginContainer' >
        <div className='loginImage'>
            <img src={loginImage} alt='Image' />            
        </div>
        
        <div className='mainLogin'>
          <span>Đang diễn ra ngay bây giờ</span>
          <h1>Tham gia ngay</h1>

          <div className='loginBtn'>
            <p>Đăng nhập</p>
          </div>
          <div class="orContainer">
            <div class="line"></div>
            <div class="text">Text</div>
            <div class="line"></div>
          </div>
          <div className='loginBtn'>
            <p>Đăng kí</p>
          </div>
        </div>        
      </div>


        <div className='form' id='login'>
          
          <div className='inputForm'>
            <CloseIcon className='closeIcon'/>
            <p className='textHeader'>Đăng ký tài khoản</p>
            <input class="input" type="text" placeholder="Tên đăng nhập"/>
            <input class="input" type="password" placeholder="Mật khẩu"/>
            <input class="input" type="email" placeholder="Email"/>
            <div class="loginBtn btnForm">Đăng ký</div>            
            <p class="loginText">Đã có tài khoản? <a href="#">Đăng nhập</a></p>
          </div>

        </div>

        <div className='form' id='register'>
          
          <div className='inputForm'>
            <CloseIcon className='closeIcon'/>
            <p className='textHeader'>Đăng nhập</p>
            <input class="input" type="email" placeholder="Email"/>
            <input class="input" type="password" placeholder="Mật khẩu"/>
           
            <div class="loginBtn btnForm">Đăng nhập</div>   
            <p class="loginText">Chưa có tài khoản? <a href="#">Đăng ký</a></p>
          </div>

        </div>

    </div>
  )
}

export default login