import React,{useState,useRef, useEffect} from 'react'
import Banner from '../../assets/banner.jpeg'
import './LoginPage.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function LoginPage() {

    const inputRef = useRef(null);//give one name and initialize it null at first
;

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isPassValid, setIsPassValid] = useState(true);
    const [toggle,setToggle] = useState(true);


    

    const handleEdit = (event)=>{   
        const grandParent  = event.target.parentNode.parentNode;
        grandParent.classList.add('focus');
        
    }

    const handleReverse = (event)=>{
        const grandParent = event.target.parentNode.parentNode;
        if (event.target.value !== "") {
            console.log(event.target.value);
            grandParent.classList.add("focus");
        }else{
            grandParent.classList.remove("focus");

        }
    }
    const handleSubmission = (event)=>{
        event.preventDefault();


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(userName)){
            event.preventDefault();
            setIsValid(false);
            
        }else{
            console.log("Good job");
        }

        if(password.length<1){
            event.preventDefault();
            setIsPassValid(false);
        }
        
       
    }
    const handleToggle = (event)=>{
        !toggle? setToggle(true):setToggle(false);

        const newValue = inputRef.current;  
        
        console.log(newValue);
        if(newValue.type ==="password"){
            newValue.type = 'text';
        }else{
            newValue.type = "password";
        }


    }
    

    const handleChange = (event) => {
        setUserName(event.target.value);     
        setIsValid(true);   
      };
  return (
    <>
    <main id='login-page'>
        <section className="login-container">
            <section className="left-section">
            <img id='banner-image' src={Banner} alt="none"/>
            </section>
            <section className="login-content">
                <div className="login-content">
                    <form>
                        <h1>Welcome Back,</h1>
                        <div className='email-container input-group'>
                            <div className="icon-container">
                                <i className='bx bxs-envelope'></i>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" onClick={handleEdit} value={userName} onChange={()=>handleChange(event)}  onBlur={handleReverse}  className="input" />
                            </div>
                            <span className={`${!isValid? 'error-message':'hide-message'}`}>Invalid Email</span>

                        </div>
                        <div className="password-container input-group">
                            <div className="icon-container">
                                <i className='bx bxs-key'></i>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input ref={inputRef} type="password" onClick={handleEdit} value={password} onChange={(event)=>{setPassword(event.target.value); setIsPassValid(true)}} onBlur={handleReverse}  className="input"/>
                            </div>
                            <i onClick={handleToggle} className={`fa-regular fa-eye${!toggle?'-slash':''}`}></i>

                            <span className={`${!isPassValid? 'error-message':'hide-message'}`}>Invalid Password</span>

                        </div>
                        <p className="forgot-password"><a href="">Forgot password?</a></p>
                        <div className="login-btn-container">
                            <input onClick={handleSubmission} type="submit" value="Login"/>
                        </div>
                        <p className="sign-up">Don't have an Account yet ? <a href=""> Create Now</a></p>
                    </form>
                    <div className="extra-option">
                        <span className="or-container">
                            or
                        </span>
                        <div className="extra-links">
                            <a href=""><img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
                                    width="30"/></a>
                            <GoogleLogin 
                                onSuccess={(credentialResponse)=>{
                                const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                                console.log(credentialResponseDecoded);
                                setGoogleEmail(credentialResponseDecoded.email);
                                console.log(googleEmail);
                            }}
                            onError={()=>{
                                console.log("Login Failed");
                            }}
                            />
                                    
                        </div>
                    </div>

                </div>
            </section>
        </section>
    </main>
    </>
)
}

export default LoginPage