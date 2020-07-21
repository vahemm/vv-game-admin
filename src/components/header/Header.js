import React from "react";
import h from "./Header.module.css";


export const Header = () => {
    return <div className={h.header}>
        <div className="card text-white bg-primary mb-3 align-items-center ">
            <div className="card-header ">Header</div>
        </div>
    </div>
}
