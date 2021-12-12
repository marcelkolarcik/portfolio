import React from "react";
import classes from './About.module.css';
import {services_details} from "../../data_info/services";
import ServiceItem from "./ServiceItem";

export default function Service() {
    return (
        <div id={'service'} className={classes.about_bgr_light + ' py-5 '}>
            <h1 className={'text-light fw-bold my-5 text-center display-1 service ' + classes.heading}>
                My Services<span className={classes.blue}>.</span>
            </h1>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3  g-2 g-lg-3">
                    {services_details.map((item, idx) => (
                        <ServiceItem item={item} key={idx}/>
                    ))}

                </div>
            </div>


        </div>


    );

}