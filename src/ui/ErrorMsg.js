import React from "react";

export default function ErrorMsg(props) {
    return (
        <div  className={'border border-danger text-center '+props.component} >
            <p className="lead fw-bold text-danger">Something went wrong here. <br/>
                <small>{props.component}</small>
            </p>

        </div>
    );
}