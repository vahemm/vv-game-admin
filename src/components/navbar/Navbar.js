import React from "react";
import {NavLink} from "react-router-dom"
import n from "./Navbar.module.css"

export const Navbar = () => {
    return <div className={n.nav}>
        <div className="position-fixed">
            <div className={n.back}>
        <div className="row ">
            <div className="col-lg-12">
                <div className="nav flex-column nav-pills" aria-orientation="vertical">
                    <NavLink className="nav-link " data-toggle="pill" to="profile"
                             aria-selected="true">Profile </NavLink>
                    <NavLink className="nav-link" data-toggle="pill" to="newquestion"
                             aria-selected="false">New question</NavLink>
                    <NavLink className="nav-link" data-toggle="pill" to="questionslist"
                             aria-selected="false">Questions list</NavLink>
                    <NavLink className="nav-link" data-toggle="pill" to="about"
                             aria-selected="false">About</NavLink>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>

}
