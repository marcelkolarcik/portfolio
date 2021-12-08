import React from "react";
import classes from './About.module.css';
import square from '../../images/square.png'
import {services_details} from "../../data_info/services";

export default function Service() {
    return (
        <div id={'service'} className={classes.about_bgr_light + ' py-5 '}>
            <h1 className={'text-light fw-bold text-center display-1 service ' + classes.heading}>
                My Services<span className={classes.blue}>.</span>
            </h1>
            <p className={'lead text-center  ' + classes.text_color}>
                If you can imagine it, You can have it!
                I can help you build it!
            </p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3  g-2 g-lg-3">
                    {services_details.map((item, idx) => (
                        <div key={idx} className="col">
                            <div className="card text-white border-0">
                                <img src={square} className="card-img" alt="..."/>

                                <div className="card-img-overlay p-0 m-0 ">
                                    <div
                                        className={classes.card_content +
                                        ' p-2  d-flex justify-content-center align-items-center opacity-100'}>
                                        <div>
                                            <h3 className="fw-bold text-center">{item.title}</h3>
                                            <p className="card-text text-center">{item.description}</p>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>


    );

}