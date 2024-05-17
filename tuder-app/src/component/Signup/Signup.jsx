import React from 'react'
import './Signup.css'
import StudentImage from '../../assets/student.png'
import Teacher from '../../assets/tutor.png'
import {Link} from 'react-router-dom'


function Signup() {


    
  return (
    <>
    <main id='selection-page'>
         <section className="ask-user-type">
        <div className="ask-user-type-content">
            <h1>
                What type Best Describes you?
            </h1>
            <div className="user-type-content">
            <Link to="/tutorlogin" id="Istudent">
                    <div class="user-img-container"> <img src={StudentImage} alt="student"/>
                    </div>
                    <h3>I am looking for a Tutor</h3>
                </Link>
                <a href="/teacherLogin" id="Itutor">
                    <div className="user-img-container">
                        <img src={Teacher} alt="not available"/>    

                    </div>
                    <h3>I am looking for student</h3>
                </a>
            </div>
        </div>

    </section>
    </main>

    </>
)
}

export default Signup