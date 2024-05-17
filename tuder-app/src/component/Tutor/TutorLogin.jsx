import React from 'react'
import { useContext, useRef ,useState} from 'react'
import './Style.css'
import {Link} from 'react-router-dom'
import { ClickedContext } from '../Context/Context'

function TutorLogin() {
    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const {toggle,setToggle} = useContext(ClickedContext);
    const inputRef = useRef(null);

    const labelStyle ={
        color:"color: rgba(84, 84, 84, 0.708)"
    }
    const handleEdit = (event)=>{   
        const grandParent  = event.target.parentNode;
        grandParent.classList.add('focus');
        
    }

    const handleReverse = (event)=>{
        const grandParent = event.target.parentNode;
        if (event.target.value !== "") {
            console.log(event.target.value);
            grandParent.classList.add("focus");
        }else{
            grandParent.classList.remove("focus");

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
  return (
    <>

        <main id="signupLanding">
        <section className="signup-container">
            <h1>Sign up as a Student</h1>
            <form>
                
                <div className="form-groups">
                    <label style={labelStyle} htmlFor="name">Full Name</label>
                    <i className='bx bx-user'></i>
                    <input onClick={handleEdit} onBlur={handleReverse} value={signupName} onChange={(event)=>setSignupName(event.target.value)} type="text" className="input" name="name"/>

                </div>
                <div className="form-groups ">
                    <label style={labelStyle} htmlFor="email">Email</label>
                    <i className='bx bx-envelope'></i>
                    <input value={signupEmail} onClick={handleEdit} onBlur={handleReverse} onChange={(event)=>setSignupEmail(event.target.value)} type="email" name="email" id="email" className="input"/>
                </div>
                <div className="form-groups">
                    <label style={labelStyle} htmlFor="password">Password</label>
                    <i className='bx bx-lock'></i>
                    <input ref={inputRef} onClick={handleEdit} value={signupPassword} onChange={(event)=>setSignupPassword(event.target.value)} onBlur={handleReverse} type="password" name="password" id="password" className="input"/>
                    <i onClick={handleToggle} className={`fa-regular fa-eye${!toggle?'-slash':''}`}></i>

                </div>

                <div className="signup-btn-container">
                    <input type="submit" value="Sign up"/>

                    <p className="log-in">Already have an Account? <Link to="/login"> Log in</Link></p>
                </div>
            </form>

            <div className="extra-option">
                <span className="or-container">
                    or continue with
                </span>
                <div className="extra-links">
                    <a href=""><img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
                            width="30"/></a>
                    <a><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy9xImRwuUbBnbJ0QgHs5GEcWDeKLqeaOpd2jLQ7SWg&s"
                            width="30" alt=""/></a>
                </div>
            </div>
        </section>
    </main>
    </>
)
}

export default TutorLogin