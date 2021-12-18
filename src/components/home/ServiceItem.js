import square from "../../images/square.png";
import classes from "./About.module.css";
import React from "react";

export default function ServiceItem(props) {
    const item = props.item
    return (
        <div className="col">
            <h4 className="text-light ps-3 "> {item.title}</h4>
            <div className="card text-white border-0">
                <img src={square} className="card-img" alt="..."/>

                <div className="card-img-overlay p-0 m-0 ">

                    <div
                        className={classes.card_content +
                        ' p-2  d-flex justify-content-center align-items-center '}>

                        <div>
                            <h3 className="fw-bold text-center">{item.title}</h3>
                            <p className="card-text text-center">{item.description}</p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}