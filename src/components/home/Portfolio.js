import React from "react";
import classes from './About.module.css'
import {portfolio_details} from "../../data_info/portfolio";

export default function Portfolio() {
    return (

        <div id={'portfolio'} className={classes.about_bgr_dark + ' py-5 '}>
            <h1 className={'text-light fw-bold text-center display-1 portfolio ' + classes.heading}>
                Portfolio<span className={classes.blue}>.</span>
            </h1>
            <p className={'lead text-center ' + classes.text_color}>
               Some of the latest projects.
            </p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                    {portfolio_details.map((item, idx) => (
                        <div key={idx} className="col">
                            <div className="card border-0">
                                <img src={item.image} className="card-img" alt="..."/>

                                <div className="card-img-overlay p-0 m-0 ">
                                    <a target={'_blank'} href={item.url} className={'text-decoration-none'}>
                                        <div
                                            className={classes.card_content +
                                            ' p-2  d-flex justify-content-center align-items-center'}>
                                            <div>
                                                <h3 className="fw-bold text-center text-light">{item.title}</h3>
                                                <p className="card-text text-light small">{item.description}</p>
                                                <p className="small text-light">
                                                  <strong>Technologies: </strong>  {item.technologies}
                                                </p>
                                                  <p className={'small text-light '+classes.features}>
                                                  <strong>Features: </strong>  {item.features.map((feature)=>(
                                                     <span><span>{feature}</span> <br/></span>
                                                  ))}
                                                </p>

                                            </div>


                                        </div>
                                    </a>


                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>

    );

}