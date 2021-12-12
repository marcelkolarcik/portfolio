import React from "react";
import img from '../../images/about.jpg'
import classes from './About.module.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function About() {
    return (

        <div id={'about'} className={' row  g-0 p-5 ' + classes.about_bgr_dark}>
            <div className={'col-md-5'}>
                <img className={'rounded-3 img-fluid'} src={img} alt={''}/>
            </div>
            <div className="col-md-7 p-0 p-md-5">
                <h1 className={'display-1 fw-bold text-light about'}>About me<span className={classes.blue}>.</span>
                </h1>
                <p className={classes.text_color + ' lead'}>
                    Highly motivated, self-starting developer seeking to launch a career
                    building web applications and services. Familiar with development and
                    deployment process for many web-based technologies.
                </p>
                <Tabs
                    defaultActiveKey="skills"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="skills" title="Main skills" className={'tab_btn'}>

                        <p className={classes.text_color + ' lead fw-bold pb-0 mb-0'}>
                            Web and user interface design</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            I create websites that are useful and clearly convey content. When designing, I follow the
                            UI / UX principles and knowledge in the field of marketing. The result of my work is a
                            modern, responsive website, where customers can easily navigate and reach places where you
                            want to lead them.</p>
                        <p className={classes.text_color + ' lead fw-bold pb-0 mb-0'}>
                            Full Stack Development</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            Reactjs, HTML, CSS, Bootstrap, Javascript, jQuery, Python, Flask, Django, Heroku,
                            MongoDB, Mysql, Nginx, Git, Firebase,
                            Stripe, leaflet.js...
                        </p>
                    </Tab>
                    <Tab eventKey="profile" title="Experience">
                        <p className={classes.text_color + ' lead pb-0 mb-0'}>
                            <span className={'fw-bold'}>Project Developer/Owner</span> ifyMARKET.com</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            2020 - Current</p>
                    </Tab>
                    <Tab eventKey="contact" title="Education & Certification">
                        <p className={classes.text_color + ' lead pb-0 mb-0'}>
                           <span className={'fw-bold'}>
                               Constant self-learning
                           </span> - Online, offline...</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            Current - Till the end...;-)</p>
                        <p className={classes.text_color + ' lead pb-0 mb-0'}>
                           <span className={'fw-bold'}>
                               Diploma in Full Stack Software Development
                           </span> - At Code Institute, Europe's only University Credit-rated Coding Bootcamp.</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            I have
                            completed 4 independently assessed milestone projects to earn a Diploma in Software
                            Development: User-Centric Front End using HTML, CSS and Bootstrap; Interactive Front-End
                            using HTML5, CSS3, Bootstrap, JavaScript; Data-Centric Full-Stack using
                            Front End technologies as well as Python, Flask and MongoDB; Full-Stack using Front End
                            PostgreSQL, Python, Django. 2019- 2020.</p>
                        <p className={classes.text_color + ' lead pb-0 mb-0'}>
                           <span className={'fw-bold'}>
                              Angular : Beginner to Pro
                           </span> - Mosh Hamedani Course</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            - 2020</p>

                        <p className={classes.text_color + ' lead pb-0 mb-0'}>
                           <span className={'fw-bold'}>
                              Managing People
                           </span> - Quality and Qualifications Ireland</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            - 2018</p>
                        <p className={classes.text_color + ' lead pb-0 mb-0'}>
                           <span className={'fw-bold'}>
                            School of electrotechnics
                           </span> - Slovakia</p>
                        <p className={classes.text_color + ' m-0 p-0 mb-3'}>
                            High School Diploma, Field Of Study: Electrical and Electronics Engineering
                        </p>


                    </Tab>
                </Tabs>
            </div>


        </div>

    );

}