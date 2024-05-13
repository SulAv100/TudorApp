import React from 'react'
import './MainBody.css'

function MainBody() {

    const headStyle={
        textAlign: 'center',
        fontSize: '2.5rem'
    }
  return (
    <>
        <main>
        <section className="landing-section">
            <h1 className="landing-msg">All Your <span>Tutors</span> & <span>Students</span>
                <span className="msg-second-line">At one Place</span>
            </h1>
            <p className="landing-msg2">Choose from over 1,000 subjects and access a diverse pool of over 1,000 professional
                tutors, available
                for both online and in-person sessions.</p>
            <div className="search-box">
                <input type="text" placeholder="What yout want to learn?"/>
                <i className='bx bx-search'></i>
            </div>
            <div className="hot-searches-container">
                <div className="hot-searches">
                    <span><i className='bx bxs-hot'></i> Hot Searches :</span>
                    <div className="hot-searches-links-container">
                        <span className="hot-search-link">Mathematics</span>
                        <span className="hot-search-link">Web Development</span>
                        <span className="hot-search-link">Web Development</span>
                        <span className="hot-search-link">Architecture</span>
                        <span className="hot-search-link">Chemistry</span>
                    </div>
                </div>
            </div>

        </section>
        <section className="data-numbers-container">
            <div className="data-numbers">
                <div className="data-number-card">
                    <h1>2000+</h1>
                    <p>Tutors</p>
                </div>
                <div className="data-number-card">
                    <h1>2000+</h1>
                    <p>Students</p>
                </div>
                <div className="data-number-card">
                    <h1>2000+</h1>
                    <p>Subjects</p>
                </div>
                <div className="data-number-card">
                    <h1>2000+</h1>
                    <p>Class Completed</p>
                </div>
            </div>
        </section>
        <section className="why-tuder">
            <h2 style={headStyle}>Why Tuder?</h2>
            <div className="feature-card-container">
                <div className="feature-card">
                    <div className="feature-image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_EmdS1pJI_AB9YtKL3hlz2c47UnELN_tfXbxX-TIqw&s"
                            alt=""/>
                    </div>
                    <h4 className="feature-name">verified Tutors</h4>
                    <p className="feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                        modi nulla sed rem quibusdam veritatis aliquid eligendi repellendus aspernatur, esse,
                        eveniet natus, cupiditate illum laboriosam labore. Earum, distinctio. Unde, rem!</p>
                </div>
                <div className="feature-card">
                    <div className="feature-image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_EmdS1pJI_AB9YtKL3hlz2c47UnELN_tfXbxX-TIqw&s"
                            alt=""/>
                    </div>
                    <h4 className="feature-name">verified Tutors</h4>
                    <p className="feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                        modi nulla sed rem quibusdam veritatis aliquid eligendi repellendus aspernatur, esse,
                        eveniet natus, cupiditate illum laboriosam labore. Earum, distinctio. Unde, rem!</p>
                </div>
                <div className="feature-card">
                    <div className="feature-image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_EmdS1pJI_AB9YtKL3hlz2c47UnELN_tfXbxX-TIqw&s"
                            alt=""/>
                    </div>
                    <h4 className="feature-name">verified Tutors</h4>
                    <p className="feature-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                        modi nulla sed rem quibusdam veritatis aliquid eligendi repellendus aspernatur, esse,
                        eveniet natus, cupiditate illum laboriosam labore. Earum, distinctio. Unde, rem!</p>
                </div>

            </div>
        </section>
        <section className="find-apply-section-container">
            <div className="find-apply-section-content">
                <h3>Have Confusion on any Subjects? Need any Help?</h3>
                <p>Our tutors are here to make your confusion go away</p>
                <button>Find Tutor now</button>
            </div>
        </section>
        <section className="how-book-content">
            <h2>How you can Book a class ? </h2>
            <p>It's easy . Here's the THREE steps involved :</p>
            <div className="booking-tutorial-media">
                <div className="booking-tutorial"><img
                        src="https://w0.peakpx.com/wallpaper/108/639/HD-wallpaper-anime-study-night-study-study.jpg"
                        alt=""/></div>
                <div className="booking-tutorial"><img
                        src="https://w0.peakpx.com/wallpaper/108/639/HD-wallpaper-anime-study-night-study-study.jpg"
                        alt=""/></div>
                <div className="booking-tutorial"><img
                        src="https://w0.peakpx.com/wallpaper/108/639/HD-wallpaper-anime-study-night-study-study.jpg"
                        alt=""/></div>

            </div>
        </section>


        <section className="find-apply-section-container">
            <div className="find-apply-section-content">
                <h3>Do you think you have what it takes to Teach?</h3>
                <p>Then you can help others overcoming their confusion on the subject of your knowledge.</p>
                <button>Apply Now</button>
            </div>
        </section>


    </main>
    </>
)
}

export default MainBody