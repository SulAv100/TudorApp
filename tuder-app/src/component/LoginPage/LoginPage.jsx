import React,{useState} from 'react'
import './LoginPage.css'


function LoginPage() {


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleEdit = (event)=>{
        const grandParent  = event.target.parentNode.parentNode;
        grandParent.classList.add('focus');
        
    }

    const handleReverse = (event)=>{
        const grandParent = event.target.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }
    const handleSubmission = (event)=>{
        
        if(userName && password){
            console.log("Niceely done")
        }else{
            event.preventDefault();
        }
    }
  return (
    <>
    <main>
        <section className="login-container">
            <section className="left-section">
            <img src="../.././assets/undraw_online_test_re_kyfx.svg" alt="none"/>
            </section>
            <section className="login-content">
                <div className="login-content">
                    <form action="">
                        <h1>Welcome Back,</h1>
                        <div className="email-container input-group">
                            <div className="icon-container">
                                <i className='bx bxs-envelope'></i>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" onClick={handleEdit} value={userName} onChange={(event)=>setUserName(event.target.value)}  onBlur={handleReverse} className="input"/>
                            </div>
                        </div>
                        <div className="password-container input-group">
                            <div className="icon-container">
                                <i className='bx bxs-key'></i>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" onClick={handleEdit} value={password} onChange={(event)=> setPassword(event.target.value)} onBlur={handleReverse}  className="input"/>
                            </div>
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
                            <a href=""><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy9xImRwuUbBnbJ0QgHs5GEcWDeKLqeaOpd2jLQ7SWg&s"
                                    width="30" alt=""/></a>
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