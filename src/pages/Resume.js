import React from 'react';
import Footer from "../components/Footer"
import Header from "../components/Header"
import CV from "../components/ProjectCard/resume.png"


function Resume() {
    return (
        <div>
            <Header></Header>
            <img src={CV} className="cv" alt="resume photo" />
            <Footer></Footer>
        </div>

    );
}

export default Resume;