import React from 'react'

function TutorLogin() {
  return (
    <>
        <main id="signupLanding">
        <section class="signup-container">
            <h1>Sign up as a Student</h1>
            <form>
                
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <i class='bx bx-user'></i>
                    <input type="text" class="input" name="name"/>

                </div>
                <div class="form-group ">
                    <label for="email">Email</label>
                    <i class='bx bx-envelope'></i>
                    <input type="email" name="email" id="email" class="input"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <i class='bx bx-lock'></i>
                    <input type="password" name="password" id="password" class="input"/>
                    <i class="fa-solid fa-eye" id="toggle-visual"></i>

                </div>

                <div class="signup-btn-container">
                    <input type="submit" value="Sign up"/>

                    <p class="log-in">Already have an Account? <a href="/login"> Log in</a></p>
                </div>
            </form>

            <div class="extra-option">
                <span class="or-container">
                    or continue with
                </span>
                <div class="extra-links">
                    <a href=""><img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
                            width="30"/></a>
                    <a href="{{ route('google-auth')}}"><img
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